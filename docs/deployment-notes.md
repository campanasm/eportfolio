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