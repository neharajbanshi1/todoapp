import sql from "../db";
export default defineEventHandler(async (event) => {
  const tasks = await sql`select * from todolist ;`
  return tasks;
})
