## 📍 Regions and Cities Explorer
A simple React project to explore regions, their cities, and city-specific details.

## ✨ Features
🗺️ Browse a list of Regions on the Home page.
🏙️ View a list of Cities within a selected Region.
📄 Access a City Detail Page with information about a selected City.
🔎 Search for cities within a region.
🌟 Highlight the active region on city pages.
📱 Responsive design for desktop and mobile screens.

## 🚀 Project Structure
src/
├── components/
│   ├── Footer.jsx
│   ├── Layout.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── Regions.jsx
│   ├── CityPage.jsx
│   ├── CityDetailPage.jsx
├── data/
│   ├── regionsData.json
├── App.jsx
├── index.jsx

Regions: Displays all regions.
CityPage: Displays cities under a selected region + searchable list.
CityDetailPage: Shows details for a specific city.

## 🛠️ Technologies Used
React
React Router (react-router-dom)
Plain CSS

## ⚡ How it Works
1. Home Page
→ Lists all regions.
→ User clicks on a region.

2. City Page
→ Shows cities within the selected region.
→ Includes a search bar to find cities easily.
→ Region names are shown and the selected region is highlighted.

3. City Detail Page
→ Shows specific information about the clicked city.

4. Footer
→ Always visible, and shows the regions list on Home Page.







src/
├── App.js
├── components/
│   ├── Footer.js
│   └── Layout.js
├── pages/
│   ├── HomePage.js
│   ├── Regions.js
│   ├── CityPage.js
│   └── CityDetailPage.js
