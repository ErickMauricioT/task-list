# React + Vite - Sistema de Listagem de Tarefas

Este projeto é um aplicativo de lista de tarefas desenvolvido com React e Vite. Ele permite ao usuário gerenciar suas tarefas de forma simples e eficiente.

## 📌 Funcionalidades

- Adicionar tarefas com título e descrição.
- Marcar tarefas como concluídas.
- Excluir tarefas da lista.
- Filtrar tarefas (todas, concluídas, pendentes).
- Armazenamento local das tarefas (localStorage).

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- HTML5 e CSS3

## 📂 Estrutura do Projeto

```
📦 TASK-LIST
 ┣ 📂 node_modules
 ┣ 📂 public
 ┃ ┣ 📜 icon.jpg
 ┃ ┗ 📜 vite.svg
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┃ ┗ 📜 react.svg
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Home.jsx
 ┃ ┃ ┣ 📜 Task.jsx
 ┃ ┃ ┣ 📜 TaskForm.jsx
 ┃ ┃ ┣ 📜 TaskList.jsx
 ┃ ┃ ┗ 📜 TaskPage.jsx
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 main.jsx
 ┃ ┗ 📜 styles.css
 ┣ 📜 .gitignore
 ┣ 📜 eslint.config.js
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 package-lock.json
 ┣ 📜 vite.config.js
 ┗ 📜 README.md
```

## 🔧 Instalação e Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/ErickMauricioT/task-list.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd task-list
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Execute o projeto:
   ```sh
   npm run dev
   ```

## 🎨 Requisitos Técnicos

### HTML/CSS
- Estrutura semântica.
- Design simples e funcional.
- Responsividade básica.

### React
- Componentes reutilizáveis.
- Uso correto de props e state.
- Manipulação de eventos para interatividade.
- Aplicação de hooks.

### Interatividade
- Validação de entrada (tarefas sem título ou descrição não são permitidas).
- Uso de animações simples ao adicionar ou remover tarefas.

## 🔥 Bônus
- Uso de Styled-components para estilização modular.
- Persistência de tarefas com localStorage.

## 📄 Documentação Adicional

Caso precise de mais informações sobre o desenvolvimento, consulte os arquivos no projeto ou entre em contato.

---

### 📌 Sobre o Template Vite + React
Este projeto foi iniciado com o template mínimo para React e Vite, incluindo configurações básicas do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc/README.md)

Se deseja expandir a configuração do ESLint com suporte a TypeScript, confira o [modelo oficial do Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

---

🛠 Desenvolvido com React e Vite 🚀
