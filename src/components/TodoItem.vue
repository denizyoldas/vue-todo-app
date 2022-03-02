<template>
  <div class="item-wrapper" :class="{ shake: removeAnimation }">
    <input type="checkbox" v-model="isDone" @click="doneHand" />
    <span :class="{ done: isDone }" class="item-text">{{ text }}</span>
    <button class="close" @click="remove(id)">X</button>
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
      this.doneTodo({ id: this.id, done: this.isDone });
    },
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
}

.item-wrapper input {
  height: 20px;
  width: 20px;
}

.item-wrapper .item-text {
  font-weight: 500;
  font-size: 18px;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.close {
  background-color: transparent;
  border: none;
  color: red;
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
}

.close:hover {
  /* border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(153, 153, 153, 0.2); */
}

.done {
  text-decoration: line-through;
  text-decoration-color: #ff2123;
}

@media only screen and (max-width: 600px) {
  .item-wrapper {
    width: 250px;
  }
}
</style>
