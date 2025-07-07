Of course\! Here is a complete `README.md` file for your project. You can copy and paste this directly into the `README.md` file in your GitHub repository.

-----

# My-Blog: A Personal Blog with Next.js

This is a full-featured blog application built with Next.js, demonstrating best practices for server-side rendering, static site generation, and API route handling. The blog fetches posts from local Markdown files and includes a functional contact form that stores messages in a MongoDB database.

-----

## 🚀 Live Demo

Check out the live version of the project deployed on Vercel:

**[https://my-blog-beta-amber.vercel.app/](https://my-blog-beta-amber.vercel.app/)**

-----

## ✨ Features

  * **Homepage:** Displays a hero section and a grid of featured blog posts.
  * **All Posts Page:** Lists all available blog posts with a clean and responsive layout.
  * **Post Detail Page:** Renders individual blog posts from Markdown files.
      * Supports full Markdown syntax.
      * Includes code syntax highlighting for various programming languages.
  * **Contact Form:** A fully functional contact form that:
      * Performs client-side and server-side validation.
      * Sends messages via an API route.
      * Stores messages in a MongoDB database.
      * Provides user feedback with pending, success, and error notifications.
  * **Responsive Design:** The entire application is fully responsive and optimized for mobile, tablet, and desktop devices.
  * **Optimized Performance:** Utilizes Next.js features like Static Site Generation (`getStaticProps`, `getStaticPaths`) for fast page loads and excellent SEO.

-----

## 🛠️ Tech Stack

  * **Framework:** [Next.js](https://nextjs.org/)
  * **Library:** [React](https://reactjs.org/)
  * **Database:** [MongoDB](https://www.mongodb.com/) (via MongoDB Atlas)
  * **Markdown Parsing:** `react-markdown`
  * **Syntax Highlighting:** `react-syntax-highlighter`
  * **Deployment:** [Vercel](https://vercel.com/)

-----

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js installed on your machine.

  * [Node.js](https://nodejs.org/) (v18.x or later recommended)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/amin-kian/My-Blog.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd My-Blog
    ```

3.  **Install NPM packages:**

    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    Create a file named `.env.local` in the root of your project and add your MongoDB connection string:

    ```.env.local
    MONGODB_CONNECTION_STRING=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
    ```

    Replace the placeholders with your actual MongoDB credentials.

### Running the Application

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

-----

## 🚀 Deployment

This project is deployed on **Vercel**. The deployment is automatically triggered upon pushing new commits to the `main` branch of the [GitHub repository](https://github.com/amin-kian/My-Blog).
