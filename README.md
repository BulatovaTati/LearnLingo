# Online Language Tutoring Platform

## Project Description

An interactive web application that connects students with professional language tutors from around the world.

## Main Features

Home Page

Brief overview of platform benefits

Call-to-action button leading to Teachers page

Teachers Page

Paginated display with "Load More" button (4 per batch)

Filtering by language, level, and hourly rate

Detailed teacher cards with ratings, reviews, and bio

"Read More" toggles full description

Favorites Page

Private route (accessible only when logged in)

List of saved teachers (persisted via localStorage / Firebase)

## Technologies Used

React 18 + Vite

Redux

Firebase (Realtime Database + Authentication)

React Router v6

React Hook Form + Yup

Axios

SCSS Modules

ESLint & Prettier

## Pages and Routes

-   `/` — Home page
-   `/teachers` — Browse & filter tutors
-   `/favorites` — Saved tutors (protected route)

## Installation and Running

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

## Backend Integration

The application uses Firebase for backend functionality:

Authentication:

Email/password login & registration

Auth state persistence

Protected routes via React Router

Realtime Database:

Stores user favorites and teacher data

Reads teacher profiles with filters & pagination

Syncs favorites with both localStorage and Firebase

## About the Author

Hi 👋, I'm **Tati** A Front-End Developer committed to building responsive and user-friendly websites. GitHub: [bulatovatati](https://github.com/bulatovatati)

🌱 Currently improving skills in JavaScript, React.js, and Node.js 📝 Regularly write articles on LinkedIn 📫 Contact me at: [kohodatat@gmail.com](mailto:kohodatat@gmail.com)

I am a dedicated technology leader with over 5 years of experience as the Head of Neural System at Imperial Holding 😊. Now I’m seeking new opportunities as a Front-End Developer. Throughout my
career, I’ve led teams to build innovative websites and successfully managed projects from concept to completion three times.

Let’s connect! I’m excited to collaborate, share insights, and contribute to innovative frontend development and AI technology projects 🤝.

## Deployment

The project is deployed at: [https://learn-lingo-fawn.vercel.app/](https://learn-lingo-fawn.vercel.app/)
