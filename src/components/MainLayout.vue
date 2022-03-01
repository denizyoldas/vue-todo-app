<template>
  <div class="content">
    <div class="card">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* .card {
  background-color: #f7ecde;
  border-radius: 15px;
  border: 1px solid #e9dac1;
  width: 400px;
  height: 320px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
} */

.card {
  background-color: #f9f7f7;
  border-radius: 15px;
  border: 1px solid #f9f7f7;
  width: 600px;
  height: 450px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
