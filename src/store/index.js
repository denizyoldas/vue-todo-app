import { createStore } from "vuex";

let id = 4;

export default createStore({
  state: {
    todos: [
      { id: 1, text: "Learn HTML", done: false },
      { id: 2, text: "Learn JavaScript", done: false },
      { id: 3, text: "Learn Vue", done: true },
    ],
  },
  getters: {},
  mutations: {
    addTodoItem(state, todo) {
      state.todos.push({ id: id++, text: todo, done: false });
    },
    removeTodoItem(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    doneTodoItem(state, { id, done }) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos[index].done = done;
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("addTodoItem", todo);
    },
    removeTodo({ commit }, id) {
      commit("removeTodoItem", id);
    },
    doneTodo({ commit }, payload) {
      commit("doneTodoItem", payload);
    },
  },
});
