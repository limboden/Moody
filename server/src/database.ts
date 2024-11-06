import dotenv from "dotenv";
dotenv.config({path:'env/.env'});
import { Sequelize } from "sequelize";

const env = process.env;

export const seq = env.DB_URL
	? new Sequelize(env.DB_URL)
	: new Sequelize({
			host: "localhost",
			dialect: "postgres",
			dialectOptions: {
				decimalNumbers: true,
			},
			username: env.DB_USER || "postgres",
			password: env.DB_PASS || "rootroot",
			database: env.DB_DATABASE,
	  });
