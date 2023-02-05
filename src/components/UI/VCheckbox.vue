<template>
  <label class="checkbox">
    <input @change="checkItem(item)" type="checkbox" class="checkbox__input" />
    <div class="checkbox__name">{{ item.name }}</div>
    <div class="checkbox__quantity">{{ item.available }}</div>
    <span class="checkbox__checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'v-checkbox',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    checkItem(item) {
      this.$emit('checkItem', item);
    },
  },
};
</script>

<style lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 3rem;
  cursor: pointer;
  user-select: none;
  &__input {
    margin-right: 1rem;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ .checkbox__checkmark {
      background: var(--blue);
      &:hover {
        background: var(--dark-blue);
      }
    }
    &:checked ~ .checkbox__checkmark:after {
      display: block;
    }
    &:not(:checked) ~ .checkbox__checkmark {
      border: 0.2rem solid var(--light-gray);
      &:hover {
        border: 2px solid var(--primary);
      }
    }
  }
  &__quantity {
    font-size: 1.2rem;
    line-height: 1.25;
    color: var(--gray);
  }
  &__name {
    max-width: 12.4rem;
    color: var(--primary);
    margin-right: 0.6rem;
    line-height: 1.42;
  }
  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    width: 2rem;
    background: var(--white);
    border-radius: 0.4rem;
    &:after {
      content: '';
      position: absolute;
      display: none;
      left: 0.8rem;
      top: 0.4rem;
      width: 0.3rem;
      height: 0.7rem;
      border: solid var(--white);
      border-width: 0 0.2rem 0.2rem 0;
      transform: rotate(45deg);
    }
  }
}
</style>
