<template>
  <div class="list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :text="todo.text"
      :id="todo.id"
      :done="todo.done"
      @removeTodo="(e) => removeTodo(e)"
    />
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
  padding-top: 15px;
  height: 260px;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
}

.list TodoItem {
  scroll-snap-align: start;
}

.list::-webkit-scrollbar {
  width: 2px;
  background-color: transparent;
  border-radius: 0;
}

.list::-webkit-scrollbar-thumb {
  width: 10px;
  border-radius: 6px;
  background-color: #54bab9;
}
</style>
