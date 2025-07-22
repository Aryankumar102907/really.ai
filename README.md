# ✨ really.ai ✨

This project is a functional clone of the popular code generation tool [bolt.new](https://bolt.new), built with Next.js and Convex. It serves as a portfolio piece to showcase the implementation of industry-standard web development practices and a deep understanding of modern frontend and backend technologies.

## 📝 Overview

Really AI is a web application that allows users to interact with a generative AI to create code and chat. It features a user-friendly interface with a sidebar for navigation, a chat view for interacting with the AI, and a code view for displaying the generated code.

## 🌟 Features

*   **🤖 AI Chat:** Users can chat with a generative AI to get help with coding problems, ask questions, and get feedback on their code.
*   **💻 Code Generation:** The AI can generate code snippets in various languages based on user prompts.
*   **📜 Workspace History:** Users can view their past conversations and generated code in the workspace history.
*   **🔒 Google Authentication:** Users can sign in with their Google account to save their work and access their history.

## 🛠️ Tech Stack

*   **Frontend:**
    *   [Next.js](https://nextjs.org/) - React framework for building server-side rendered and static web applications.
    *   [React](https://reactjs.org/) - JavaScript library for building user interfaces.
    *   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
    *   [Shadcn UI](https://ui.shadcn.com/) - A collection of re-usable components built using Radix UI and Tailwind CSS.
*   **Backend:**
    *   [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - For creating API endpoints.
    *   [Convex](https://www.convex.dev/) - A backend platform for building web applications.
*   **AI:**
    *   [Google Generative AI](https://ai.google/) - For providing the generative AI capabilities.

## 🧠 Key Learnings & Implementation

This project demonstrates a strong understanding of the following concepts and technologies:

*   **🚀 Full-Stack Development:** Building a complete web application from the ground up, including both frontend and backend development.
*   **🧱 Component-Based Architecture:** Creating a modular and reusable component library with React and Shadcn UI.
*   **🔄 State Management:** Managing application state effectively using React Hooks and Context API.
*   **🔌 API Integration:** Integrating with external APIs like Google Authentication and Google Generative AI.
*   **🗃️ Database Management:** Using Convex to manage and query the application's data.
*   **🔐 Authentication & Authorization:** Implementing secure user authentication with Google OAuth.
*   **📱 Responsive Design:** Creating a responsive user interface that works on all screen sizes.

## ⚙️ Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/really-ai.git
    ```

2.  **Install dependencies:**

    ```bash
    cd really-ai
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project and add the following environment variables:

    ```
    NEXT_PUBLIC_CONVEX_URL=""
    NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY=""
    NEXT_PUBLIC_GEMINI_API_KEY=""
    ```

    You will need to get these API keys from their respective services:

    *   `NEXT_PUBLIC_CONVEX_URL`: Get this from your Convex project settings.
    *   `NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY`: Get this from the Google API Console.
    *   `NEXT_PUBLIC_GEMINI_API_KEY`: Get this from the Google AI Platform.

4.  **Run the development servers:**

    You will need to run both the frontend and backend development servers in separate terminals.

    **Terminal 1: Run the Convex backend server:**
    ```bash
    npx convex dev
    ```

    **Terminal 2: Run the Next.js frontend server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ☁️ Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
