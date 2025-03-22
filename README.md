# Upvote List Project

This project is a simple application built with React, TypeScript, and Vite. It allows users to upvote items in a list. The project includes hot module replacement (HMR) and some ESLint rules to ensure code quality.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/jjccy/upvote-list.git
    cd upvote-list
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Development Server

To start the development server with hot module replacement, run:

```bash
npm run dev
```

This will start the Vite development server and open the application in your default browser.

### Building for Production

To build the project for production, run:

```bash
npm run build
```

This will create an optimized build in the `dist` directory.

### Running Tests

To run the tests, use the following command:

```bash
npm run test
```

This will open the test runner.

## Available Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.