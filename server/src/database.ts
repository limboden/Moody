import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const env = process.env;

export const seq = env.DB_URL
	? new Sequelize(env.DB_URL)
	: new Sequelize({
			host: "localhost",
			dialect: "postgres",
			username: env.DB_USER || "postgres",
			password: env.DB_PASS || "rootroot",
			database: env.DB_DATABASE,
	  });