# VoiceGrid - AI Blog App

**VoiceGrid** is an AI-powered blogging platform built with the MERN stack, integrating the Gemini API for effortless content generation. It offers secure authentication, responsive design, and efficient content management to enhance creativity and user engagement.

🚀 Live Demo: [https://voicegrid-ai-blogapp-frontend.vercel.app](https://voicegrid-ai-blogapp-frontend.vercel.app)  
🌐 GitHub Repo: [YoJu310/voicegrid-ai-blogapp](https://github.com/YoJu310/voicegrid-ai-blogapp)  

---

## 🚀 Features

- **MERN Stack**: Utilizes MongoDB, Express.js, React, and Node.js for building a scalable and maintainable web application.
- **Global State Management**: Integrated **Context API** for efficient global data management, ensuring smooth and consistent state across components.
- **Authentication**: Secure Sign Up & Login using JWT and bcrypt.
- **Blog CRUD**: Create, edit, delete posts with optional cover image and slug-based URLs. 
- **AI Blog Generator**: Generate markdown-formatted blogs using AI by entering a title. 
- **Markdown Support**: Write and render blogs in markdown with live syntax highlighting. 
- **Tag Filtering**: Categorize and filter posts by tags like React, Node, etc.
- **Admin Dashboard**: View and manage blog posts easily.
- **Post View Counter**: Track how many times each blog has been viewed.
- **Comments Section**: Readers can leave feedback or thoughts.
- **Like/Clap Button**: Engage readers and track the popularity of posts.
- **Draft & Publish Toggle**: Save as draft or publish instantly.
- **Search Functionality**: Search blogs by title or content in real-time.
- **Responsive UI**: Optimized for both desktop and mobile experiences.


## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Axios, React Router DOM  
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: Gemini API 
- **Image Storage**: Cloudinary
- **Security**: bcrypt (password encryption)
- **Deployment**: Vercel (frontend), Render/Local (backend)
   

## Test Users

- **USER**
  - Email: user@example.com
  - Password: user12345

- **ADMIN**
  - Email: admin@example.com
  - Password: admin12345


## ⚙️ Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (v14.x or above)
- MongoDB (local instance or Atlas)
- Cloudinary account for image storage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YoJu310/voicegrid-ai-blogapp.git
   cd voicegrid-ai-blogapp
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd .frontend/blog-app
   npm install

   cd ../backend
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the `/frontend` directory and include the following:

   ```env
   VITE_API_URL = http://localhost:8000
   ```
   
   Create a `.env` file in the `/backend` directory and include the following:

   ```env
   PORT = 8000
   MONGO_URI = YOUR_MONGODB_BASE_URI
   JWT_SECRET = RANDOM_STRING
   ADMIN_ACCESS_TOKEN = RANDOM_STRING
   GEMINI_API_KEY = YOUR_GEMINI_API_KEY
   CLOUDINARY_CLOUD_NAME = YOUR_CLOUD_NAME
   CLOUDINARY_API_KEY = YOUR_CLOUDINARY_API_KEY 
   CLOUDINARY_API_SECRET = YOUR_CLOUDINARY_SECRET_KEY 
   ```

4. Start the development servers:

   ```bash
   # Start the backend server
   cd backend
   npm run dev

   # Start the frontend server
   cd .frontend/blog-app
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the app.

## 📖 Usage

1. **Sign Up / Log In**  
   Create an account or log in to access the platform.

2. **Create a Blog Post**  
   - Navigate to the blog editor.  
   - Enter a topic or prompt.  
   - Use the **AI Generate** option to let the Gemini API create content, or write manually.  

3. **Edit & Format**  
   Customize your blog post, add formatting, and review AI suggestions.

4. **Publish**  
   Save your draft or publish it instantly. Published blogs will appear on the homepage feed.

5. **Manage Content**  
   - View all your blogs in the dashboard.  
   - Edit or delete posts anytime.  

6. **Read Blogs**  
   Explore AI-generated and user-created blogs, with a clean, responsive UI.

 
## Contributions

Feel free to fork this repository and submit pull requests. All contributions are welcome!


## 👩‍💻 Author

Developed by Yojna Singh
🔗 [GitHub](https://github.com/YoJu310) 


**VoiceGrid** — Where creativity meets AI for effortless blogging.
