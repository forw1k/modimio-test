<template>
  <header class="header">
    <div class="header__top"></div>
    <div class="header__bottom"></div>
  </header>
</template>

<script>
export default {
  name: 'my-header',
};
</script>

<style lang="scss">
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  &__top {
    height: 8rem;
    background: linear-gradient(90deg, #1bb69b 0%, #269fb8 100.7%);
  }
  &__bottom {
    height: 8rem;
    background: var(--white-light);
  }
}
</style>
