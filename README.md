# EduCase - School Management Backend API

EduCase is a Node.js/Express backend API for managing schools in an education platform.  
Key features: Add schools (name, address, GPS coordinates), list all schools, distance calculations.

## Status

Development stage: Backend API with Sequelize/MySQL integration.

## Tech Stack

- **Runtime**: Node.js, Express.js
- **Database**: MySQL (mysql2, Sequelize ORM)
- **Utilities**: dotenv, cors, body-parser, bcrypt, nodemon
- **API**: RESTful endpoints for school CRUD

## Project Structure

```text
educase/
├── README.md
└── backend/
    ├── package.json
    ├── server.js (Express app)
    ├── config/
    │   └── db.js (Sequelize config)
    ├── controllers/
    │   └── schoolController.js
    ├── models/
    │   └── SchoolModel.js
    ├── routes/
    │   └── schoolRoutes.js
    └── utills/
        └── distance.js (Haversine formula)
```

## Getting Started

### Prerequisites

- Node.js (LTS)
- MySQL server running
- Create `.env` in `backend/` with: `PORT=5000`, `DB_HOST=localhost`, `DB_USER=youruser`, `DB_PASS=yourpass`, `DB_NAME=educase`

### Setup

```bash
cd backend
npm install
npx sequelize-cli db:migrate  # If models/migrations added
npm start
```

**Start script**: `nodemon server.js` (dev server on port 5000 or env PORT)

## API Endpoints

| Method | Endpoint           | Description     | Body                                                           |
| ------ | ------------------ | --------------- | -------------------------------------------------------------- |
| POST   | `/api/school/add`  | Add new school  | `{ "name": "", "address": "", "latitude": 0, "longitude": 0 }` |
| GET    | `/api/school/list` | Get all schools | -                                                              |

## School Model

```js
{
  id: INTEGER (PK, auto),
  name: STRING (req),
  address: STRING (req),
  latitude: FLOAT (req),
  longitude: FLOAT (req)
}
```

## Notes

- Typo fixes needed: `server.js` ('expresss' → 'express'), `package.json` ('body-parse' → 'body-parser').
- Uses Haversine distance util (not yet integrated in controllers).

## Next Steps

- Fix noted typos (server.js, package.json).
- Add auth (JWT/bcrypt login/register).
- Expand models/routes (users, courses).
- Frontend integration (React/Vue).
- Deploy (Vercel/Heroku, RDS).
- Tests (Jest/Supertest).
- Distance filtering in list endpoint.
