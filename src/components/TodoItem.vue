<template>
  <div class="item-wrapper" :class="{ remove: removeAnimation }">
    <input type="checkbox" v-model="isDone" @click="doneHand" />
    <span :class="{ done: isDone }" class="item-text">{{ text }}</span>
    <div class="btn-wrapper">
      <button class="btn btn-edit" @click="edit()">
        <f-icon icon="pen-to-square" />
      </button>
      <button class="btn btn-close" @click="remove(id)">
        <f-icon icon="trash" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  emits: ["removeTodo", "doneTodo"],
  props: {
    text: String,
    id: Number,
    done: Boolean,
  },
  data() {
    return { isDone: this.done, removeAnimation: false };
  },
  methods: {
    ...mapActions(["removeTodo", "doneTodo"]),
    remove(id) {
      this.removeAnimation = true;
      setTimeout(() => {
        this.removeAnimation = false;
        this.removeTodo(id);
      }, 500);
    },
    doneHand() {
      this.doneTodo({ id: this.id, done: !this.isDone });
    },
    edit() {},
  },
};
</script>

<style scoped>
.item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 490px;
  height: 55px;
  border-radius: 5px;
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: #dbe2ef;
  padding: 5px 10px;
  margin-bottom: 5px;
  word-break: break-all;
  position: relative;
}

/* .item-wrapper:hover {
  opacity: 0.6;
} */

.item-wrapper input {
  height: 20px;
  width: 20px;
}

.item-wrapper .item-text {
  font-weight: 500;
  font-size: 18px;
}

.remove {
  animation: remove 1s ease;
  transition: 1s;
}

@keyframes remove {
  from {
    left: 0px;
    opacity: 1;
  }
  to {
    left: 200px;
    opacity: 0;
  }
}

.btn {
  background-color: transparent;
  border: none;
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
}

.btn-close {
  color: red;
}

.btn-edit {
  color: green;
}

.btn-close:hover,
.btn-edit:hover {
  opacity: 0.5;
}

.done {
  text-decoration: line-through;
  text-decoration-color: black;
  color: rgba(129, 129, 129, 0.6);
}

@media only screen and (max-width: 600px) {
  .item-wrapper {
    width: 250px;
  }
}
</style>
