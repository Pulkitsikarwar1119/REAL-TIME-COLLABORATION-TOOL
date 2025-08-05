# REAL TIME COLLABORATION TOOL

COMPANY : CODTECH IT SOLUTIONS

NAME  : PULKIT SIKARWAR

INTERN ID  :CT08DF482

DOMAIN  : MERN STACK WEB DEVELOPMENT

DURATION :8 WEEKS

MENTOR : NEELA SANTOSH

## DESCRIPTION OF TASK

Objective:
The purpose of this task was to build a Real-Time Collaboration Tool using the MERN stack (MongoDB, Express.js, React.js, Node.js) integrated with WebSockets (Socket.IO) to allow multiple users to simultaneously edit or interact within a shared environment—such as a document editor or whiteboard—synchronized in real time.

⚙️ Tech Stack

MongoDB – NoSQL database for storing collaborative data like user sessions, document contents, or history.

Express.js – Backend server to handle RESTful routes, API endpoints, and WebSocket connections.

React.js – Frontend for building an interactive and real-time UI.

Node.js – Runtime environment for executing server-side JavaScript.

Socket.IO – Enables bi-directional, event-based communication for real-time collaboration.

Canvas API (for whiteboard) – Used on the frontend to build a drawing tool for collaboration.

📁 Project Structure

bash
Copy
Edit
Task-3-Real-Time-Collaboration/

├── backend/
│   ├── server.js             # Express server and socket setup
│   └── models/Document.js    # MongoDB schema for storing document/whiteboard data
├── frontend/
│   ├── src/
│   │   ├── Editor.jsx        # Shared document editor component
│   │   ├── Whiteboard.jsx    # Collaborative drawing component
│   │   ├── Editor.css        # Styling and background
│   │   └── App.js            # Main React entry point
💻 Functionalities Implemented

Real-Time Text Editing: Multiple users can edit text in a shared document. All changes are instantly broadcast to others using WebSocket events.

Live Whiteboard: A canvas-based whiteboard allows users to draw or sketch together. Mouse events are transmitted in real time using Socket.IO.

Socket.IO Integration: Events like text_change, draw, connect, and disconnect ensure all users remain synchronized.

UI Enhancements: A background image (editor.jpg) and organized layout were applied for a modern editor interface.

🔌 Backend Features

Express and Socket.IO handle client connections and broadcast changes.

MongoDB can optionally store document contents to support persistence and multi-session editing.

Clean-up logic ensures socket events don't stack or duplicate across sessions.

🖥️ Frontend Features

Built in React using functional components and hooks (useState, useEffect, useRef).

Editor and whiteboard are placed inside a styled container.

Background image, font styles, and spacing were applied for a clean workspace.

Dynamic socket-based communication ensures live collaboration.

🚀 How to Run the App
Start the backend:

bash

cd backend
npm install
node server.js
Start the frontend:

bash

cd frontend
npm install
npm start
Test Collaboration:

Open the app in multiple tabs or devices. Edits and drawings from one window should appear in others instantly.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

## OUTPUT 

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
