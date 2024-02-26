<template>
  <div>
    <h1>All tasks</h1>
    <form @submit="addTask">
      <label>What do you want?????🗡️</label>
      <textarea name="name" id="1" cols="30" rows="10" v-model="taskValue">
      </textarea>
      <button>PRESS ME</button>
    </form>
    <ul>
      <li v-for="task in tasks">
        <h2>{{ task.name }}</h2>
        <p>{{ task.is_done }}</p>
        <p>{{ task.create_time }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
const { data: tasks, refresh } = await useFetch("/api/task");

console.log(tasks);
async function addTask(event) {
  event.preventDefault();
  console.log(taskValue.value);
  console.log(
    `insert into TODOLIST(name,is_done,create_time)Values(${
      taskValue.value
    },false,${new Date().toISOString()}`
  );
  await useFetch("/api/task", {
    method: "POST",
    body: { taskValue: taskValue.value },
  });

  refresh();
}
const taskValue = ref("");
</script>
