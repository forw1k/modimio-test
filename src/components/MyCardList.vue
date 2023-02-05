<template>
  <div :class="{ thin: currentViewFormat === 'thin' }" class="card-list">
    <my-card v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import MyCard from '@/components/MyCard';
export default {
  name: 'card-list',
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
    currentViewFormat: {
      type: String,
    },
  },
  components: {
    MyCard,
  },
};
</script>

<style lang="scss">
.card-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3.2rem;
  width: 100%;
  &.thin {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
