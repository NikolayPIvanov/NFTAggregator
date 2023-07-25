import { config } from "dotenv";

import { api } from "./api";

config();

console.log(process.env.HELLO);

api.setup();