# EduCase

EduCase is a Node.js backend project (Express + MySQL) for building an education-focused application.

## Project Status

This repository is currently in early setup stage.  
At the moment, only the backend package configuration is present in `backend/`.

## Tech Stack

- Node.js
- Express
- MySQL (`mysql2`)
- Authentication support with `bcrypt`
- Environment configuration with `dotenv`

## Project Structure

```text
educase/
  README.md
  backend/
    package.json
    package-lock.json
    node_modules/
```

## Getting Started

### 1) Open the backend folder

```bash
cd backend
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run the backend

```bash
npm start
```

Current start script:

- `npm start` -> runs `nodemon index.js`

## Notes

- Ensure you have Node.js installed (LTS recommended).
- You will need to add `backend/index.js` (or update the start script) to run the server successfully.
- Add a `.env` file in `backend/` for database and app configuration.

## Next Steps

- Create `backend/index.js` and initialize Express app
- Set up MySQL connection
- Add API routes (auth, users, courses, etc.)
- Add error handling and input validation

