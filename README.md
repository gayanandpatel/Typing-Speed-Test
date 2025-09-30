# Project: JumpingFingers - A React Typing Speed Test

**Live Demo:** https://jumpingfingers.vercel.app/
---

## Project Overview 📝

JumpingFingers is an interactive web application built to help users test and improve their typing speed and accuracy. Developed with a modern tech stack using React and Vite, this project provides a clean, minimalist, and real-time typing environment.

The core goal was to create a fluid and responsive user experience where typists receive immediate feedback on their performance. The application presents a random set of words and, upon completion of the test, calculates and displays key performance metrics, including Words Per Minute (WPM), accuracy, and a count of correct and incorrect words.

---

## Key Features 🚀

* **Real-time Typing Test:** The application provides instant visual feedback, highlighting correct and incorrect keystrokes as the user types.
* **Accurate Performance Metrics:** After each test, the user's performance is calculated and displayed, including:
    * **WPM (Words Per Minute):** The standard measure of typing speed.
    * **Accuracy:** The percentage of correctly typed characters.
    * **Correct & Incorrect Words:** A simple count of words typed with and without errors.
* **Randomized Word Generation:** Each time a new test starts, a fresh set of random words is presented to ensure a unique practice session.
* **Interactive User Interface:** The UI is designed to be intuitive, with a clear focus on the text being typed and a countdown timer to create a test-like environment.
* **Responsive Design:** The application is fully responsive, providing a seamless experience whether on a desktop, laptop, or tablet.

---

## Tech Stack & Tools 🛠️

The project was built with a focus on performance and a modern development workflow.

* **Frontend Library:** React.js (for building a fast, component-based user interface)
* **Build Tool:** Vite (for a significantly faster development server and optimized builds)
* **State Management:** React Hooks (`useState`, `useEffect`, `useRef`) for managing component-level state like user input, timer, and test status.
* **Styling:** CSS Modules (to locally scope CSS and create a maintainable and conflict-free styling architecture)
* **Language:** JavaScript (ES6+)

---

## Implementation Details

* **State Management with Hooks:** The application's logic is heavily reliant on React Hooks.
    * `useState` is used to manage the user's current input, the array of words for the test, the active word index, and the final results.
    * `useEffect` is crucial for controlling the timer. It starts the countdown on the first keypress and automatically stops the test when the time runs out.
    * `useRef` is used to maintain a persistent reference to the timer's interval ID, allowing it to be cleared correctly when the component unmounts or the test finishes.

* **WPM & Accuracy Calculation:** The performance metrics are calculated using standard formulas:
    * **WPM:** `(Total Correct Characters / 5) / (Time Elapsed in Minutes)` where one "word" is conventionally defined as 5 characters.
    * **Accuracy:** `(Correct Keystrokes / Total Keystrokes) * 100%`.

* **Real-time Feedback:** The application splits the source text into an array of characters. As the user types, their input is compared against this array. The character's color in the display is updated in real-time based on whether the input is correct, incorrect, or yet to be typed.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
