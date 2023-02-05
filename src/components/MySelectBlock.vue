<template>
  <div class="select-block">
    <div class="select-block__title">Показывать на странице</div>
    <v-select
      :options="options"
      :selected="selected"
      :isFilterVisible="isFilterVisible"
      :name="'Товаров'"
      @select="setSelect"
      @openFilter="setOpenFIlter"
    />
  </div>
</template>

<script>
import VSelect from '@/components/UI/VSelect.vue';
export default {
  name: 'select-block',
  components: {
    VSelect,
  },
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
  },
  methods: {
    setSelect(option) {
      this.$emit('select', option);
    },
    setOpenFIlter(value) {
      this.$emit('openFilter', value);
    },
  },
};
</script>

<style lang="scss">
.select-block {
  &__title {
    font-size: 1.2rem;
    color: var(--dark-gray);
    margin-bottom: 0.4rem;
  }
}
</style>
