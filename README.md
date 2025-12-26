# Backend Repository

A curated collection of projects and exercises from top-tier learning platforms, documenting my journey to becoming a full-stack developer.

It maps my progression from backend basics to integrated full-stack applications. The goals are:

1.  **Solidify Fundamentals:** Master asynchronous programming, RESTful API design, and data modeling.
2.  **Connect the Stack:** Build seamless interactions between React frontends and Node/Express backends.
3.  **Adopt Best Practices:** Implement testing, error handling, security basics, and deployment.

## Learning Paths Included

Practical work from three comprehensive curricula:

| Platform             | Focus Area                   | Key Skills Practiced                                               |
| :------------------- | :--------------------------- | :----------------------------------------------------------------- |
| **FreeCodeCamp**     | Backend Development & APIs   | Node.js, Express, MongoDB, Mongoose, API testing, security basics. |
| **Fullstack Open**   | Modern JavaScript Full-Stack | React, Node.js, Express, GraphQL, TypeScript, CI/CD.               |
| **The Odin Project** | Full-Stack Ruby on Rails     | MVC architecture, database relations, authentication, deployment.  |

## Technologies & Tools

- **Languages:** JavaScript, Node.js, (Ruby, SQL)
- **Runtimes & Frameworks:** Express.js, React, (Ruby on Rails)
- **Databases:** MongoDB, Mongoose ODM, (PostgreSQL)
- **APIs:** REST, (GraphQL)
- **Development:** Git, npm, (Webpack, Babel)
- **Testing:** Jest, Supertest, (RSpec)

## Project Highlights & Features

### `freecodecamp/` - Microservices & APIs

A suite of functional microservices, each solving a specific backend challenge:

- **Timestamp Microservice:** API parses and formats dates.
- **Request Header Parser:** Extracts client system info from HTTP headers.
- **URL Shortener:** Implements persistent URL-to-shortcode mapping.
- **Exercise Tracker:** Full CRUD application with user and exercise log management.

### `fullstackopen/` - Modern Full-Stack Applications

A progressive deep dive into connected frontend and backend development:

- **Parts 0-5:** From React fundamentals to testing a custom Express backend.
- **Part 6 & 7:** Advanced state management with Redux and React Router.
- **Part 8:** GraphQL APIs, replacing REST.
- **Part 9:** TypeScript for end-to-end type safety.
- **Bloglist App:** A full-featured blog application with user authentication, testing, and deployment.

### `odin-project/` - Foundational Projects

Projects emphasizing foundational programming concepts and full-stack architecture with Rails.

## How to Run Projects Locally

Most projects are self-contained.

1.  **Clone and navigate:**

    ```bash
    git clone https://github.com/Aishat02/backend-devspace.git
    cd backend-devspace
    ```

2.  **Navigate to a specific project** (e.g., a freeCodeCamp microservice):

    ```bash
    cd freecodecamp/timestamp-microservice
    ```

3.  **Install dependencies and run:**
    ```bash
    npm install
    npm start
    ```
    _Check the individual project folder for any specific environment variables (`.env` file) or database requirements._

**Acknowledgements**

A huge thanks to [The Odin Project](https://www.theodinproject.com/), [Fullstack Open](https://fullstackopen.com/en/), and [freeCodeCamp](https://www.freecodecamp.org/) for providing these incredible, project-based curricula.
