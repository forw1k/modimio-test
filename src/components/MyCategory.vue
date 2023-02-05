<template>
  <div class="category">
    <div class="category__title">Категории</div>
    <div class="category__list">
      <div
        v-for="item in category"
        :key="item.id"
        :class="{ active: item.id === currentCategory }"
        class="category__item"
        @click="selectCategory(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-category',
  props: {
    category: {
      type: Array,
      default: () => [],
    },
    currentCategory: {
      type: Number,
    },
  },
  methods: {
    selectCategory(item) {
      this.$emit('selectCategory', item.id);
    },
  },
};
</script>

<style lang="scss">
.category {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  text-align: left;
  &__title {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--primary);
    margin-bottom: 2.8rem;
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  &__item {
    font-size: 1.4rem;
    line-height: 1.42;
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 1.6rem;
    }
    &.active {
      color: var(--scooter);
    }
  }
}
</style>
