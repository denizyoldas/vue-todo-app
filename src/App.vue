<template>
  <Layout>
    <h1>Todo App</h1>
    <AddTodo />
    <div class="line"></div>
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
@import "./styles/normalize.css";

body {
  margin: 0px;
  background-color: #3f72af;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.line {
  padding: 0 15px;
  width: 500px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
}

@media only screen and (max-width: 600px) {
  .line {
    width: 285px;
  }

  #app {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
