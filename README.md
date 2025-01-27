# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm (Node Package Manager)
- MySQL (or XAMPP for local MySQL server)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies:**

   Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

3. **Set Up the Database:**

   - Create a `.env` file in the root of your project and add your database URL:

     ```
     DATABASE_URL="mysql://<username>:<password>@localhost:3306/<database>"
     ```

   - Run the Prisma migrations to set up your database schema:

     ```bash
     npx prisma migrate dev --name init
     ```

4. **Generate the Prisma Client:**

   Run the following command to generate the Prisma client:

   ```bash
   npx prisma generate
   ```

### Running the Project

1. **Start the Backend Server:**

   Run the following command to start the Express server:

   ```bash
   node server.js
   ```

   This will start the server on `http://localhost:3001`.

2. **Start the Frontend Development Server:**

   Run the following command to start the Vite development server:

   ```bash
   npm run dev
   ```

   You can view your application at `http://localhost:5173`.

3. **Build the Project for Production:**

   ```bash
   npm run build
   ```

4. **Preview the Production Build:**

   ```bash
   npm run preview
   ```

### Interacting with the Database

- **Access the Prisma Studio:**

  Prisma Studio is a visual editor for your database. You can start it with:

  ```bash
  npx prisma studio
  ```

  This will open a web interface where you can view and edit your database records.

### Troubleshooting

If you encounter any issues, ensure your `DATABASE_URL` in the `.env` file is correct and that your database server is running. Also, make sure both the backend and frontend servers are running simultaneously.

<!-- npx prisma migrate dev --name init -->
<!-- npm run dev -->
<!-- node server.js -->