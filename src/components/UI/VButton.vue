<template>
  <button @click="handleClick" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-button',
  methods: {
    handleClick() {
      this.$emit('btnClick');
    },
  },
};
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 30rem;
  padding: 0.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.42;
  cursor: pointer;
  border: none;
  border-radius: 0.8rem;
  &_blue {
    background: var(--blue);
    color: var(--white);
  }
  &_selected {
    background: var(--lightning-yellow);
    color: var(--black);
  }
  &_outline {
    background: var(--white);
    border: 0.2rem solid var(--gray);
    color: var(--black);
  }
  &_content {
    width: fit-content;
  }
  &_ghost {
    background: transparent;
    border: none;
    color: var(--black);
  }
  &_bg-gray {
    background: var(--gray-transparent);
  }
}
</style>
