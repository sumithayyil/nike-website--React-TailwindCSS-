tailwind version 3.4.17

install with react and normal javascript inside the nike folder run

npm create vite@latest ./ -- --template react

npm install -D tailwindcss@3 postcss autoprefixer

npx tailwindcss init -p

in tailwind.config.js copy

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

inside index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

in main.jsx make sure index.css is connected

npm run dev
