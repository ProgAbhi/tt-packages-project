# 🧭 Travel Explorer - A React Tourism App

A simple and interactive **React** project to explore Tourism across various **regions** and **cities**, complete with categorized packages like **Tour**, **Family**, **Honeymoon**, and **Holiday** deals.

## 🌍 Project Overview

**Travel Explorer** helps users browse regions and their respective cities, and discover travel packages tailored to different travel styles. It's organized using React components, mock JSON data, and structured UI elements like accordions and draggableScroll for smooth navigation and display.


## ✨ Features
- 🗺 **Region & City Browsing** – Users can navigate from a region to its cities via accordions.
- 🧳 **Package Categories** – View categorized travel packages (Tour, Family, Honeymoon, Holiday).
- 📱 **CSS** - Responsive design for desktop and mobile screens.

## 🚀 Project Structure
tt-packages-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CityAccordion.jsx
│   │   ├── CityAccordion.css
│   │   ├── DraggableScrollContainer.jsx
│   │   ├── DraggableScrollContainer.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Layout.jsx
│   │   └── Layout.css
│   ├── data/
│   │   ├── packagesList.json
│   │   └── regionsData.json
│   ├── pages/
│   │   ├── CityPage.jsx
│   │   ├── CityPage.css
│   │   ├── HomePage.jsx
│   │   └── HomePage.css
│   ├── utils/
│   │   └── formatName.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package-lock.json
├── package.json
└── README.md

## 🛠️ Technologies Used
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/) for client-side routing
- CSS for styling
- JSON for mock data

## ⚡ How it Works
1. Home Page
→ Lists all regions across draggable Footer section.
→ User clicks on a region.

2. City Page
→ Shows cities within the selected region.
→ Tour, Family, Honeymoon, and Holiday packages are categorized across each cities
→ Region names are shown and the selected region is highlighted.