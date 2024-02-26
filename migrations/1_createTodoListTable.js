import sql from "../server/db.js";

const tags = [];
const migrate = async (client) => {
  await sql`
        CREATE TABLE todolist(
            id SERIAL PRIMARY KEY, 
            is_done boolean, 
            name varchar(255), 
            create_time timestamp
        );`;
};

const rollback = async (client) => {
  await sql`
        DROP TABLE todolist;`;
};

export { tags, migrate, rollback };
