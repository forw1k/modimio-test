<template>
  <div class="select">
    <div
      @click="openFilter"
      :class="{ open: isFilterVisible }"
      class="select__title"
    >
      <div class="select__name">{{ selected }} {{ name }}</div>
      <div :class="{ reverse: isFilterVisible }" class="select__img">
        <img src="@/assets/icons/arrow-down.svg" class="select__icon" />
      </div>
    </div>
    <div v-if="isFilterVisible" class="select__hidden">
      <div
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
        class="select__option"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-select',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Number,
    },
    isFilterVisible: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option);
    },
    openFilter() {
      this.$emit('openFilter', !this.isFilterVisible);
    },
  },
};
</script>

<style lang="scss">
.select {
  cursor: pointer;
  transition: 0.3s;
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1.6rem;
    border: 0.1rem solid var(--light-gray);
    border-radius: 0.9rem;
    font-size: 1.4rem;
    &.open {
      border: 0.2rem solid var(--primary);
    }
  }
  &__name {
    margin-right: 0.5rem;
  }
  &__option {
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
  }
  &__hidden {
    box-shadow: 0.1rem 0.1rem 1.5rem var(--black-transparent);
    border-radius: 0.8rem;
  }
  &__img {
    &.reverse {
      transform: rotate(180deg);
    }
  }
}
</style>
