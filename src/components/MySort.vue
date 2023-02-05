<template>
  <div class="sort">
    <div class="sort__block">
      <div class="sort__title">Сортировать по:</div>
      <div
        v-for="column in sortColumn"
        :key="column.id"
        :class="{ selected: column.value === this.currentSort }"
        class="sort__item"
        @click="sort(column.value)"
      >
        {{ column.title }}
        <div
          :class="{ reverse: this.currentSortDir === 'desc' }"
          class="sort__icon"
        >
          <img
            src="../assets/icons/sort-arrow-top.svg"
            alt="sort by property"
          />
        </div>
      </div>
    </div>
    <div class="sort__block">
      <div class="sort__view" @click="changeViewFormat('thin')">
        <img
          :src="require(`@/assets/icons/${viewFormatThin}.svg`)"
          class="sort__pic"
          alt="change cards format to thin"
        />
      </div>
      <div @click="changeViewFormat('thick')" class="sort__view">
        <img
          :src="require(`@/assets/icons/${viewFormatThick}.svg`)"
          class="sort__pic"
          alt="change cards format to thick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'v-sort',
  props: {
    sortColumn: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState(['currentSort', 'currentSortDir', 'currentViewFormat']),
    viewFormatThin() {
      return this.currentViewFormat === 'thin' ? 'thin-active' : 'thin';
    },
    viewFormatThick() {
      return this.currentViewFormat === 'thick' ? 'thick-active' : 'thick';
    },
  },
  methods: {
    ...mapMutations([
      'SET_CURRENTSORTDIR',
      'SET_CURRENTSORT',
      'SET_CURRENTVIEWFORMAT',
    ]),
    sort(direction) {
      if (direction === this.currentSort) {
        this.$store.commit(
          'SET_CURRENTSORTDIR',
          this.currentSortDir === 'asc' ? 'desc' : 'asc'
        );
      }
      this.$store.commit('SET_CURRENTSORT', direction);
    },
    changeViewFormat(name) {
      this.$store.commit('SET_CURRENTVIEWFORMAT', name);
    },
  },
};
</script>

<style lang="scss">
.sort {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  line-height: 1.5;
  &__block {
    display: flex;
    align-items: center;
  }
  &__title {
    color: var(--gray);
    margin-right: 1.6rem;
  }
  &__item {
    display: flex;
    align-items: center;
    margin-right: 1.2rem;
    cursor: pointer;
    .sort__icon {
      opacity: 0;
      visibility: hidden;
    }
    &.selected {
      color: var(--blue);
      .sort__icon {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &__icon {
    margin-left: 0.5rem;
    &.reverse {
      transform: rotate(180deg);
    }
  }
  &__view {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &__pic {
    width: 100%;
    height: 100%;
  }
}
</style>
