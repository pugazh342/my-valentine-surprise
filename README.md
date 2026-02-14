# 💝 The Valentine Surprise Project

A personalized, interactive, and romantic web experience built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. 

Designed to be the perfect digital gift for your special someone.

## ✨ Features

- 🔐 **Love Lock Login:** A secure gatekeeper that requires a special "Nickname" and "First Meet Date" to enter.
- 💌 **Digital Love Letter:** A typewriter-effect letter that pours your heart out.
- 📸 **Memory Lane:** A vertical scroll timeline showcasing your best moments with photos.
- 🃏 **Flip Cards:** Interactive cards detailing "Why I Love You."
- 🎵 **Background Music:** Auto-playing romantic background music (bypasses browser autoplay blocks).
- 💍 **The Big Question:** A playful "Will you be my Valentine?" section where the "No" button runs away!

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Glassmorphism
- **Animations:** Framer Motion & Canvas Confetti
- **Icons:** Lucide React

---

## 🚀 Setup Guide

Follow these steps to run the project locally on your machine.

### **Prerequisites**
- [Node.js](https://nodejs.org/) (Version 18 or higher) installed.
- [Git](https://git-scm.com/) installed.

### **1. Clone the Repository**
```bash
git clone [https://github.com/YOUR_USERNAME/my-valentine-surprise.git](https://github.com/YOUR_USERNAME/my-valentine-surprise.git)
cd my-valentine-surprise
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Add Your Media**
Navigate to the `public/` folder and replace the placeholder files with your own:
- **Photos:** Add your photos (e.g., `us.jpg`, `date.jpg`) to the `public/` folder.
- **Music:** Add your song as `music.mp3` to the `public/` folder.

### **4. Configure the Secrets**
Open `src/app/page.tsx` and update the login credentials:
```typescript
const SECRET_NICKNAME = "Your_Nickname"; 
const FIRST_MEET_DATE = "YYYY-MM-DD"; // e.g., "2024-12-19"
```

---

### **💻 Run on Windows**

1.  Open **Command Prompt** or **PowerShell** in the project folder.
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  Open your browser and visit:
    `http://localhost:3000`

### **🍎 Run on macOS / Linux**

1.  Open **Terminal** in the project folder.
2.  Run the development server:
    ```bash
    chmod +x node_modules/.bin/next
    npm run dev
    ```
    or 
    ```bash
    rm -rf node_modules package-lock.json
    npm cache clean --force
    npm install
    chmod -R u+rwX,go+rX,go-w node_modules
    npm run dev
    ```
3.  Open your browser and visit:
    `http://localhost:3000`

---

## 🌍 How to Deploy (Put it Online)

The easiest way to share this with her is using **Vercel**.

1.  Push your code to GitHub.
2.  Go to [Vercel.com](https://vercel.com) and sign up/login.
3.  Click **"Add New Project"** -> **"Project"**.
4.  Select your GitHub repository (`my-valentine-surprise`).
5.  Click **"Deploy"**.

In 1 minute, Vercel will give you a live link (e.g., `https://my-valentine-surprise.vercel.app`) to send to her! ❤️

---

## 🎨 Customization Tips

- **Change the Letter:** Edit `LOVE_LETTER` in `src/app/surprise/page.tsx`.
- **Update Timeline:** Edit the `TIMELINE_EVENTS` array in `src/app/surprise/page.tsx`.
- **Change Colors:** Modify `tailwind.config.ts` to change the `love` color palette.

Made with ❤️ by [Your Name]