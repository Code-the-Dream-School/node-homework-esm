import {config} from "dotenv";
config();
process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;
process.env.RECAPTCHA_BYPASS = process.env.JWT_SECRET;