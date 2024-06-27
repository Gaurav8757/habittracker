# React album-list
 
1. Clone the repository:
    ```bash
    https://github.com/Gaurav8757/habittracker.git
    cd habittracker
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Install Tailwind CSS:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
3. Run Dev & build Command:
    ```bash
    npm run dev
    npm run build
    ```

# Dependencies
    "@reduxjs/toolkit": "^2.2.5",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.23.1",
    "react-typed": "^2.0.12",
    "redux": "^5.0.1",
    "tailwindcss": "^3.4.4"


# Folder Structures
habit-tracker/
├── public/
│   ├── index.html
│   ├── close.png
│   └── habit.png
│
├── src/
|   ├──assets
│   ├── components/
│   │   ├── Habit/
│   │   │   ├── AddHabits.js
│   │   │   ├── HabitList.js
│   │   │   
│   │   ├── Header.js
│   ├── redux/
│   │   ├── store.js
│   │   ├── habitSlice.js
│   │   
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
