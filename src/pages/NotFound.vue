<template>
  <div class="page-not-found">
    <h1>404</h1>
    <p>Page not found</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style lang="scss">
.page-not-found {
  color: #fff;
  background-color: rgba(4, 13, 33, .7);
  padding: 2rem;
  border-radius: 25px;

  & h1 {
    font-size: 3rem;
    margin: 0;
  }

  & p {
    margin: 0;
  }
}
</style>