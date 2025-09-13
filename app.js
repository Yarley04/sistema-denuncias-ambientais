const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { create } = require('express-handlebars');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();

// Configurar Handlebars
const hbs = create({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    },
    helpers: {
        formatDate: function (date) {
            if (!date) return '';
            const d = new Date(date);
            return `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth() + 1)).slice(-2)}/${d.getFullYear()}`;
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'Sdenucias', resave: false, saveUninitialized: true }));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success');
    res.locals.error_msg = req.flash('error');
    next();
});

app.use((req, res, next) => {
    const token = req.cookies.token;
    res.locals.user = null;
    res.locals.isAuthenticated = false;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            res.locals.user = decoded;
            res.locals.isAuthenticated = true;
        } catch {}
    }
    next();
});

// Conectar MongoDB somente fora dos testes
if (process.env.NODE_ENV !== "test") {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB conectado"))
        .catch(err => console.log(err));
}

// Rotas
const denunciaRoutes = require('./routes/denuncias.js');
app.use('/denuncia', denunciaRoutes);

const agenteRoutes = require('./routes/agentes.js');
app.use('/agente', agenteRoutes);

app.get('/', (req, res) => res.render('denuncia/home'));

module.exports = app; // exporta somente o app
