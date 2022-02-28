<template>
  <Layout>
    <h1>Todo App</h1>
    <AddTodo />
    <TodoList />
  </Layout>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";
import Layout from "./components/MainLayout.vue";

export default {
  name: "App",
  components: { TodoList, AddTodo, Layout },
};
</script>

<style>
body {
  margin: 0px;
  background-color: #fbf8f1;
  color: #54bab9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
