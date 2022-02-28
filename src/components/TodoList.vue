<template>
  <div class="list">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <TodoItem
          :text="todo.text"
          :id="todo.id"
          :done="todo.done"
          @removeTodo="(e) => removeTodo(e)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
  data() {
    return {
      newTodo: "",
    };
  },
  computed: { ...mapState(["todos"]) },
};
</script>

<style scoped>
.list {
  padding: 0px 20px;
}

.list ul {
  height: 150px;
  overflow-y: auto;
  text-decoration: none;
  scroll-snap-type: y mandatory;
  list-style: none;
}

.list ul li {
  scroll-snap-align: start;
}

.list ul::-webkit-scrollbar {
  width: 2px;
  background-color: transparent;
  border-radius: 0;
}

.list ul::-webkit-scrollbar-thumb {
  width: 10px;
  border-radius: 6px;
  background-color: #54bab9;
}
</style>
