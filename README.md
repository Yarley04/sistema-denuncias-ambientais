# Sistema de Denúncias Ambientais

<img width="1920" height="1789" alt="FireShot Capture 001 - Sistema de Denuncias -  localhost" src="https://github.com/user-attachments/assets/71476cde-c801-4b0b-9bf3-e21b56ad9636" />


---

## 📌 Descrição

O **Sistema de Denúncias Ambientais** é uma plataforma digital que permite que cidadãos registrem denúncias de forma simples, rápida e anônima.  
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

## Tela de Inicio
### Acesse o Formulario de Cadastro para Realizar a Denúncia:
No menu principal, você verá uma opção chamada “Cadastrar”. Clique nela para iniciar o processo.

<img width="1920" height="918" alt="tela1" src="https://github.com/user-attachments/assets/2fc470ff-cb47-49db-8676-35ff0cfaadaf" />

## Tela de Cadastro  
### Preencha o Formulário de Denúncia:
Na tela de cadastro, você precisará fornecer algumas informações importantes sobre o crime ambiental que deseja denunciar. Os campos obrigatórios incluem:

- Título: Resumo breve do crime (ex.: "Desmatamento em Área de Preservação").
- Descrição: Explique detalhadamente o que você presenciou. Inclua informações como o local, data e possíveis envolvidos.
- Localização: Indique onde ocorreu o crime (endereço, cidade, ou coordenadas, se possível).
- E-mail.
- Data: Quando o crime ocorreu ou foi notado.
- Evidências (opcional): Caso tenha fotos, você pode anexá-los para ajudar na investigação.
  
<img width="1920" height="1319" alt="FireShot Capture 003 - Sistema de Denuncias -  localhost" src="https://github.com/user-attachments/assets/64ce5e51-bc8c-4ea6-aa2c-b3b036b8c03e" />

## Tela de Após a Denúncia Ser Cadastrada
Após registra a denúncia aparecerá a tela com o número de registro da denúncia.

<img width="1920" height="919" alt="FireShot Capture 001 - Sistema de Denuncias -  localhost" src="https://github.com/user-attachments/assets/b3763257-09d4-4cd8-a90b-126f7a1d7611" />

## Tela de Recebimento de Notificação por E-mail
O número de registro da denúncia é enviado pora o e-mail do denunciante

<img width="1504" height="346" alt="Captura de tela 2025-09-13 100042" src="https://github.com/user-attachments/assets/da0f3ff9-5171-40bc-a348-1d031a96dff2" />

## Tela de Consulta de Denúncias
### Acompanhe o Status da Denúncia:
Para verificar o andamento da sua denúncia, No menu principal, você verá uma opção chamada “Consultar”. Insira o número de protocolo para visualizar o status atual (como "em análise", "em investigação", "resolvida", entre outros).

<img width="1920" height="1643" alt="print233" src="https://github.com/user-attachments/assets/e1da6249-b6b2-477b-adc0-9358d67c1b1a" />

## Tela Após a Consulta da Denúncia
A tela de consulta mostrará o status atual da denúncia.

<img width="1920" height="2022" alt="FireShot Capture 003 - Sistema de Denuncias -  localhost" src="https://github.com/user-attachments/assets/516902a4-7547-4f52-88b6-29fe76a78ea6" />


## Arquitetura / Organização do Projeto

/middlewares -> Regras de negócio  
/models      -> Modelos de dados (MongoDB)  
/routes      -> Definição das rotas  
/views       -> Interfaces (Handlebars + Bootstrap)  
/public      -> Arquivos estáticos (CSS, JS, imagens)  
app.js       -> Arquivo com o servidor Node.js  
.env         -> Configuração do banco de dados  
