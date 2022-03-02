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
      const checkString = this.newTodo.replace(/\s/g, "").length;
      if (!checkString) {
        alert("this is not empty");
        return;
      }

      if (checkString > 25) {
        alert("too many " + checkString + " characters");
        return;
      }

      this.addTodo(this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<template>
  <div class="add-wrapper">
    <input
      type="text"
      name="title"
      v-model="newTodo"
      @keydown.enter="add"
      placeholder="some words..."
    />
    <button @click="add" class="success-button">+</button>
  </div>
</template>

<style>
.add-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
}

.add-wrapper input[type="text"] {
  border-radius: 5px;
  border: 1px solid rgba(177, 177, 177, 0.4);
  padding: 10px;
  width: 250px;
  height: 32px;
  background-color: #dbe2ef;
}

.add-wrapper input[type="text"]:focus {
  border: 1px solid rgba(228, 221, 221, 0.596);
}

.success-button {
  background-color: #3f72af;
  color: #fff;
  border: none;
  font-size: 40px;
  position: absolute;
  width: 55px;
  height: 54px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  left: 850.69px;
  top: 139.6px;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .success-button {
    left: 265px;
  }
}
</style>
