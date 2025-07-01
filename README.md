
# 🚀 Personal Portfolio

A modern, animated portfolio built with **React**, **Tailwind CSS**, **GSAP**, and **Vite**.

> 🔗 **Live Site**: [kebinmalla.com.np/Portfolio](https://www.kebinmalla.com.np/Portfolio/)

---

## ✨ Features

- ⚡ Smooth transitions and scroll animations using **GSAP**
- 🌙 Light/Dark theme support with custom UI
- 🎨 Unique hand-drawn and doodle-styled components
- 🧩 Modular and component-based architecture (React)
- 🌀 Background particle effects
- 🛠 Built and optimized with **Vite** + **Tailwind CSS**
- 📦 Deployed via **GitHub Pages**

---

## 🛠 Tech Stack

- **React 18**
- **Tailwind CSS**
- **GSAP** (with ScrollTrigger, ScrollSmoother)
- **Vite**
- **TypeScript**
- **Lucide Icons**
- **Google Maps API Loader**
- **Three.js-like rendering (via OGL)**

---

## 🚧 Development

To use this you can fork this project or clone it. Edit the constants.ts file with your own data. Here is a snippet of the code:

```ts
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/kevin272",
    icon: "Github"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/kebinmalla",
    icon: "Linkedin"
  },
  {
    name: "Email",
    url: "mailto:mallakebin@gmail.com",
    icon: "Mail"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/DevilKevin2",
    icon: "Twitter"
  }
];
```
For the Contact form submission to work, you need these enviroment variables which can be generated via [emailjs.com](https://www.emailjs.com): 
- VITE_PUBLIC_KEY
- VITE_SERVICE_ID
- VITE_TEMPLATE_ID

## 🚧 Deployment

Basic use of github pages can be used. I have already implemented deploy commands as below.


```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
````

---
## 📸 Screenshots

### 🔹 Landing Page
![Landing Page](https://i.imgur.com/dVo15Vx.png)

### 🔹 Dark Mode
![Dark_mode](https://i.imgur.com/k7TM6g4.png)


### 🔹 Projects Section
![Projects Section](https://i.imgur.com/KWTeNPC.png)

### 🔹 Contact Form
![Contact Section](https://i.imgur.com/e1vTJ9s.png)


---

## 📜 License

This project is for personal use and not open for commercial redistribution.

---

### 🙏 Credits

* Inspired by modern interactive portfolios and doodle-style web design
* Icons by [Lucide](https://lucide.dev/)
* Special thanks to the open-source community and bolt.new for the doodle css🚀

```


