# Simple Greeting App

**Name:** Elvis Kemoi.
**Reg:** 23/05350.

A simple **Node.js + Express** application that returns a personalized greeting message.  
This project was created as part of the **"Introduction to GitHub for Version Control"** assignment to demonstrate basic Git and GitHub usage.

---

## 🧠 Overview

This small application introduces you to the world of **version control** using **Git** and **GitHub**.  
It allows you to practice:

- Initializing a Git repository
- Making commits
- Pushing code to GitHub
- Managing files and project versions

In addition, it’s a working Node.js app that you can run locally and test in your browser.

---

## 🚀 Features

- Returns a **personalized greeting message** via an API.
- Supports query parameters for dynamic greetings.
- Uses the lightweight **Express.js** web framework.
- Easy to run and deploy.

Example:

```
http://localhost:3000/hello?name=Elvis
```

Response:

```json
{
  "message": "Hello, Elvis! Welcome to my Node.js app."
}
```

If no name is provided:

```json
{
  "message": "Hello, Guest! Welcome to my Node.js app."
}
```

---

## ⚙️ Installation and Running the App

Follow these steps to set up and run the project on your local computer.

### 1. Clone the repository

```bash
git clone https://github.com/ElvisKemoi/Github-And-Version-Control.git
```

### 2. Navigate into the project folder

```bash
cd Github-And-Version-Control
```

### 3. Install dependencies

Make sure Node.js and npm are installed on your computer, then run:

```bash
npm install
```

### 4. Start the application

```bash
npm start
```

### 5. Test the app

Open your browser or Postman and visit:

```
http://localhost:3000/hello?name=YourName
```

You should see a greeting message in JSON format.

---

## 🧩 Project Structure

```
simple-greeting-app/
│
├── package.json          # Project configuration and dependencies
├── server.js             # Main server file (entry point)
├── routes/
│   └── greeting.js       # Route that handles the greeting logic
├── .gitignore            # Files ignored by Git
└── README.md             # Project documentation
```

---

## 💻 Example Output

### Request

```
GET http://localhost:3000/hello?name=Elvis
```

### Response

```json
{
  "message": "Hello, Elvis! Welcome to my Node.js app."
}
```

---

## 🧰 Technologies Used

- **Node.js** – JavaScript runtime environment
- **Express.js** – Fast and minimal web framework for Node.js
- **Git & GitHub** – For version control and code hosting

---

## 🧾 Git Commands Reference

Here are the basic Git commands used in this project:

```bash
# Initialize Git in your project
git init

# Add all files to staging
git add .

# Commit changes
git commit -m "Initial commit - simple greeting app"

# Connect to remote repository
git remote add origin https://github.com/ElvisKemoi/Github-And-Version-Control.git

# Push changes to GitHub
git push -u origin main
```

---

## 🏁 Conclusion

This project demonstrates the fundamentals of **Git version control** and **GitHub repository management** using a simple Node.js example.  
It shows how code can be **tracked**, **committed**, and **shared** effectively.

---

👨‍💻 **Author:** Elvis Kemoi  
📘 **Assignment:** Introduction to GitHub for Version Control  
🗓 **Date:** November 2025
