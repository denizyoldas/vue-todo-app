<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    add() {
      this.addTodo(this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<template>
  <div class="add-wrapper">
    <input type="text" name="title" v-model="newTodo" @keydown.enter="add" />
    <button @click="add" class="success-button">+</button>
  </div>
</template>

<style>
.add-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-wrapper input[type="text"] {
  border-radius: 10px;
  border: 1px solid rgba(228, 221, 221, 0.596);
  padding: 10px;
}

.add-wrapper input[type="text"]:focus {
  border: 1px solid rgba(228, 221, 221, 0.596);
}

.success-button {
  margin-left: 10px;
  background-color: rgb(75, 255, 0);
  border: none;
  font-size: 18px;
  font-weight: bolder;
  height: 30px;
  width: 30px;
  border-radius: 25px;
}
</style>
