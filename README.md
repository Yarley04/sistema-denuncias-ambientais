# Sistema de Denúncias de Crimes Ambientais

<img width="1920" height="1789" alt="FireShot Capture 001 - Sistema de Denuncias -  localhost" src="https://github.com/user-attachments/assets/71476cde-c801-4b0b-9bf3-e21b56ad9636" />


---

## 📌 Descrição

O **Sistema de Denúncias de Crimes Ambientais** é uma plataforma digital que permite que cidadãos registrem denúncias de forma simples, rápida e anônima.  
Ele busca resolver a **falta de monitoramento e canais eficientes** para denúncias ambientais, agilizando a comunicação entre população e órgãos de fiscalização.  

✅ Problema resolvido: dificuldade de identificar e responsabilizar infratores ambientais devido à ineficiência no processo de denúncia e apuração.

---

## 👥 Equipe

| Matrícula   | Nome                                   | Função                 |
|-------------|----------------------------------------|------------------------|
| 2023007015  | Gustavo Nery Sampaio Corrêa            |                        |
| 2023007267  | Yarley Keven Souza Costa               |                        |
| 2023007383  | Leonardo Morais da Silva               |                        |
| 2023007347  | Gabriel Gil Rocha Maia                 |                        |
| 2020016020  | Patrícia Roberta Nascimento Brandão    |                        |

---

## 🛠 Tecnologias Utilizadas

- **Linguagens:** JavaScript, HTML, CSS  
- **Backend:** Node.js + Express  
- **Frontend:** Handlebars + Bootstrap  
- **Banco de Dados:** MongoDB  
- **Prototipação:** Figma  
- **Controle de Versão:** Git + GitHub  
- **Gestão de Tarefas:** Trello  
- **Testes:** Jest, GitHub Actions, Testes manuais (Chrome, Firefox, Edge)  

---

## ⚙️ Instalação e Execução

### 1. Clonar repositório
git clone https://github.com/Yarley04/sistema-denuncias-ambientais.git

cd repositorio

npm start

### 2. Instalar dependências
npm install

### 3. Executar projeto
node app.js ou npm start

---

## 📋 Funcionalidades

- [x] Cadastro de denúncias (com anonimato)  
- [x] Notificações por e-mail com o número de registro da denúncia  
- [x] Visualização e acompanhamento de denúncias usando número de registro da denúncia  
- [x] Área de login para agentes ambientais  
- [x] Visualização de denúncias por agentes  
- [x] Vinculação e desvinculação de denúncias por agentes  
- [x] Diferentes níveis de acesso (agentes / administradores)  
- [x] Gerenciamento de usuários por administradores


## 🚀 Uso / Exemplos

### Exemplo de cadastro de denúncia

**Entrada:**  
Usuário informa **Titulo** + **descrição** + **local do crime** + **Data do ocorrido** + **Imagens**
**Saída:**  
Sistema gera um **número de protocolo** e define o **status inicial: pendente**.  Usuario recebe por e-mail o número de de protocolo.

---

### 📸 Prints

## Tela de nicio
<img width="1920" height="911" alt="FireShot Capture 002 - Sistema de Denuncias -  localhost" src="https://github.com/user-attachments/assets/cd42be04-d6af-4e84-a990-a1c7c70b4641" />

## Tela de cadastro  
<img width="1920" height="1319" alt="FireShot Capture 003 - Sistema de Denuncias -  localhost" src="https://github.com/user-attachments/assets/64ce5e51-bc8c-4ea6-aa2c-b3b036b8c03e" />


## Arquitetura / Organização do Projeto

/middlewares -> Regras de negócio  
/models      -> Modelos de dados (MongoDB)  
/routes      -> Definição das rotas  
/views       -> Interfaces (Handlebars + Bootstrap)  
/public      -> Arquivos estáticos (CSS, JS, imagens)  
app.js       -> Arquivo com o servidor Node.js  
.env         -> Configuração do banco de dados  
