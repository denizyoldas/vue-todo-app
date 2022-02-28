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

.card {
  background-color: #f7ecde;
  border-radius: 15px;
  border: 1px solid #e9dac1;
  width: 400px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
