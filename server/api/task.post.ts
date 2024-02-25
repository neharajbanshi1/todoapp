import sql from "../db";
export default defineEventHandler(async (event) => {
    const input=await readBody(event)
  console.log(input)
  const date = new Date();
const formatted = date.toISOString().slice(0,10);

console.log(formatted); // e.g. 2023-02-25

let command;
let result;
  try {
  command= `INSERT INTO todolist(is_done,name,create_time) VALUES(false,'${input.taskValue}','${new Date()}');`
   result= await sql`${command}`

  }
  catch(error){
      console.log(error);    
  }
  return {

    rsult:formatted,
    result:result,
    sult:command
  };
})
