import sql from "../db";
export default defineEventHandler(async (event) => {
  const input = await readBody(event);
  console.log(input);
  const date = new Date();
  const formatted = date.toISOString().slice(0, 10);

  console.log(formatted); // e.g. 2023-02-25

  let command;
  let result;
  try {
    result = await sql`
    INSERT INTO todolist
        (name, is_done, create_time) 
      VALUES
        (${input.taskValue}, false, ${formatted})
        returning is_done, name
    `;
  } catch (error) {
    console.log(error);
  }
  return {
    rsult: formatted,
    result: result,
  };
});
