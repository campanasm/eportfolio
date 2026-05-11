# ePortfolio MERN Stack Application
A full-stack ePortfolio built using **React (Vite)** for the frontend, **Node.js + Express** for the backend, and **MongoDB Atlas** for data storage. The application dynamically loads project data from a database and includes a contact form and external API integration.

---

# Live Deployment
- Frontend: https://eportfolio-client.onrender.com
- Backend API: https://eportfolio-xa53.onrender.com

---

# Installation Instructions (Local Setup)

## 1. Clone Repository
git clone https://github.com/campanasm/eportfolio.git
cd eportfolio

---

## 2. Backend Setup
cd server
npm install

Create a `.env` file inside `/server`:

MONGO_URI=your-mongodb-atlas-uri

---

## 3. Frontend Setup
cd ../client
npm install

Create a `.env` file inside `/client`:

VITE_API_BASE_URL=http://localhost:3001

---

# MongoDB Atlas Setup
This project uses MongoDB Atlas.

Steps:

- Create a free account on MongoDB Atlas
- Create a new cluster
- Create a database user
- Allow network access (0.0.0.0/0 for deployment)
- Connect to the cluster using MongoDB Compass or Atlas Data Explorer
- Create a database named `eportfolio`
- Create a collection named `projects`
- Import the project JSON data from `server/data/eportfolio.projects.json` into the `projects` collection
- Copy the MongoDB connection string

Example:
mongodb+srv://username:password@cluster.mongodb.net/eportfolio

6. Add it to your `.env` file as:

MONGO_URI=your_connection_string

---

# Running the Project Locally

## Run both frontend and backend:
npm run dev

---

# Deployment (Render)

## Backend Deployment (Web Service)
Deploy backend using Render Web Service:

- Root Directory: <leave empty>
- Build Command: npm install
- Start Command: node server/server.js

Environment Variables:
MONGO_URI=mongodb-atlas-uri

---

## Frontend Deployment (Static Site)
Deploy frontend using Render Static Site:

- Root Directory: client
- Build Command: npm install && npm run build
- Publish Directory: dist

Environment Variables:
VITE_API_BASE_URL=https://backend-url.onrender.com

---

# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler
The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## External API added
The project now interacts with an external API (https://official-joke-api.appspot.com/random_joke) which provides a random joke to give a sense of humor to my profile.

## New endpoints
Default backend server has been set to http://localhost:3001.
To test new endpoints (/projects, /contact), you may access http://localhost:3001/api/projects and http://localhost:3001/api/contact respectively. However, since /contact is a POST endpoint, you will not be able to test it through Chrome or Edge, you will need an external party software to do so. You can test both through the frontend application (http://localhost:5173/projects and http://localhost:5173/contact).
Additionally, you may also test the joke generator through http://localhost:3001/api/joke.

## Running both front-end and back-end
'concurrently' has been added to npm so that you can run front-end and back-end (server.js) of the project with one command: 'npm run dev'.

## Purpose of back-end
This backend server was built using Node.js and Express.js to support my React ePortfolio. It handles API requests, serves JSON data, validates form submissions, and integrates with the frontend to create a full-stack (MERN-style) application.

## Setup and updates
The front-end is built using React and is located in the /client directory, while the back-end is built using Node.js, Express, and MongoDB (via Mongoose) and is located in the /server directory. The application has been updated so that project data is no longer hardcoded in JSON but is now dynamically retrieved from MongoDB through the backend API endpoint http://localhost:3001/api/projects, which is configured in the /server directory. The backend uses Mongoose to query the MongoDB database and return project data through this endpoint, and the React front-end running at http://localhost:5173 fetches this data and uses it to render projects dynamically using the ProjectCard component.
As before, to run the project you can input 'npm install' to install the necessary packages into node_modules, and then input 'npm run dev', package.json has been updated to properly run both projects with this command.
For more information on changes on the back-end application, refer to /server/README.md.

MongoDB projects:
![DB Projects](./assets/mongodbProjects.PNG)

Back-end projects endpoint:
![Back Projects](./assets/backendProjects.PNG)

Front-end projects endpoint:
![Front Projects](./assets/frontendProjects.PNG)