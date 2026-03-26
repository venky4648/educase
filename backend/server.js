import expresss from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import schoolRoutes from './routes/schoolRoutes.js';
import db from './config/db.js';

db.sync().then(() => console.log("DB Synced")).catch((err) => console.log("DB Sync Error: ", err));

const app = expresss();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.use("/api/school",schoolRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
