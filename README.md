# VoiceGrid - AI Blog App

VoiceGrid is a modern full-stack AI-powered blog application that allows users to generate blog posts using the **Gemini API**, manage their content, and interact with a clean, responsive UI.  

Live Demo: [https://voicegrid-ai-blogapp-frontend.vercel.app](https://voicegrid-ai-blogapp-frontend.vercel.app)  
GitHub Repo: [YoJu310/voicegrid-ai-blogapp](https://github.com/YoJu310/voicegrid-ai-blogapp)  

---

## 🚀 Features

- ✍️ AI-powered blog generation using **Gemini API**  
- 🔐 User authentication and authorization  
- 📄 Create, edit, delete, and view blog posts  
- 🎨 Modern responsive UI (React + Tailwind)  
- 🌐 RESTful API with Node.js & Express.js  
- 📦 MongoDB integration for storing blog content  
- ☁️ Deployment-ready (Frontend on Vercel, Backend on Render/Local)  

---

## 🛠️ Tech Stack

**Frontend:** React, Tailwind CSS, Axios, React Router DOM  
**Backend:** Node.js, Express, MongoDB (Mongoose)  
**AI Integration:** Gemini API  
**Authentication:** JWT-based  
**Deployment:** Vercel (frontend), Render/Local (backend)  

---

## 📸 Screenshots

| Homepage | Blog Editor | AI-Generated Blog |
|----------|-------------|------------------|
| ![Homepage](screenshots/home.png) | ![Blog Editor](screenshots/editor.png) | ![AI Blog](screenshots/blog.png) |

*(Add your screenshots inside a `screenshots/` folder and update the paths above.)*

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YoJu310/voicegrid-ai-blogapp.git
cd voicegrid-ai-blogapp

2️⃣ Install dependencies

Install dependencies for both frontend and backend:

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

3️⃣ Environment Variables
Backend (/backend/.env)

MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173

Frontend (/frontend/.env)
VITE_API_URL=http://localhost:4000/api

4️⃣ Run the App

Start both frontend and backend in separate terminals:
# In /frontend
npm run dev

# In /backend
npm run dev

📌 Roadmap

 Add rich text editor with Markdown support

 Implement blog categories & tags

 Enable user profiles with bio & avatar

 Add likes & comments system

 Optimize SEO for AI blogs

📜 License

This project is licensed under the MIT License – see the LICENSE
 file for details.

👩‍💻 Author

Developed by Yojna Singh
🔗 GitHub Profile
