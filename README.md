# Task Manager

Aplicação **full stack** simples para gerenciamento de tarefas, desenvolvida com foco em **Java e back-end**, consumida por um front-end em **HTML, CSS e JavaScript**.

O projeto foi criado com o objetivo de praticar **Spring Boot, API REST, integração com banco de dados** e a comunicação entre **front-end e back-end**.

---

## 📌 Visão geral do projeto

- O **front-end** fornece a interface para o usuário
- O **back-end** expõe uma API REST em Java
- O **banco de dados PostgreSQL** garante persistência das tarefas
- O front-end consome a API usando `fetch` (JSON)

📌 **Sem o back-end**, o front-end não consegue salvar tarefas.  
📌 **Sem o banco de dados**, as tarefas só existiriam enquanto o servidor estivesse rodando.

---

## 🛠️ Tecnologias utilizadas

### Back-end
- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- PostgreSQL
- Maven

### Front-end
- HTML5
- CSS3
- JavaScript (Fetch API)

### Outros
- Git
- GitHub
- IntelliJ IDEA

---

## 📂 Estrutura do projeto

```
src
└── main
    ├── java
    │   └── com.bruno.taskmanager
    │       ├── controller   # Camada de API (endpoints)
    │       ├── model        # Entidades do sistema
    │       ├── repository  # Acesso ao banco de dados
    │       └── service     # Regras de negócio
    └── resources
        ├── static
        │   ├── css         # Estilos do front-end
        │   └── js          # Lógica JavaScript
        └── application.properties
```



---

## ✅ Funcionalidades

- Criar tarefas
- Listar tarefas
- Atualizar status da tarefa (pendente / concluída)
- Persistência em banco de dados
- Comunicação via API REST

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Java 21
- Maven
- PostgreSQL
- Git

---

## 🗄️ Configuração do Banco de Dados (PASSO OBRIGATÓRIO)

### 1️⃣ Criar o banco de dados

No PostgreSQL, execute:

```sql

CREATE DATABASE task_manager;

2️⃣ Configurar o acesso ao banco

Edite o arquivo:

src/main/resources/application.properties

Exemplo de configuração:

spring.datasource.url=jdbc:postgresql://localhost:5432/task_manager
spring.datasource.username=postgres
spring.datasource.password=sua_senha

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
📌 Importante:
As tabelas são criadas automaticamente pelo Spring Boot através do Hibernate.
Não é necessário criar tabelas manualmente.

▶️ Como executar o projeto

1️⃣ Clonar o repositório
git clone https://github.com/Bruno-Souzaa19/taskmanager.git

2️⃣ Acessar a pasta do projeto
cd taskmanager

3️⃣ Executar a aplicação
mvn spring-boot:run

O servidor será iniciado em:

http://localhost:8080

🌐 Acessando a aplicação

Após iniciar o servidor, abra no navegador:

http://localhost:8080/index.html

A partir dessa página, o front-end irá consumir a API Java automaticamente.

🧠 Conceito principal do projeto

Este projeto demonstra:

Separação entre front-end e back-end

Uso de API REST

Persistência de dados com JPA + PostgreSQL

Comunicação via HTTP e JSON

Organização em camadas (Controller, Service, Repository)

🚀 Próximos passos (ideias de evolução)

Validação de dados

Autenticação de usuários

Deploy em nuvem

Paginação de tarefas

Documentação da API com Swagger

👤 Autor
Projeto desenvolvido por Bruno Souza como parte dos estudos em Engenharia de Software e desenvolvimento back-end com Java.
