<template>
  <div class="filter">
    <div @click="handleClick" class="filter__head">
      <div class="filter__title">{{ title }}</div>
      <div :class="{ rotate: isFilterVisible }" class="filter__expand">
        <img
          src="@/assets/icons/arrow-down.svg"
          class="filter__img"
          alt="toggle size filter"
        />
      </div>
    </div>
    <div v-if="isFilterVisible" class="filter__body">
      <v-input
        :query="query"
        :placeholder="placeholder"
        class="filter__input"
        @setQuery="setFilterQuery"
      />
      <div class="filter__list">
        <v-checkbox
          v-for="item in items"
          :key="item.id"
          :item="item"
          class="filter__checkbox"
          @checkItem="setChecked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VCheckbox from '@/components/UI/VCheckbox.vue';
import VInput from '@/components/UI/VInput';
import { mapState } from 'vuex';
export default {
  name: 'my-filter',
  props: {
    title: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    items: {
      type: Array,
      default: () => [],
    },
    query: {
      type: String,
    },
    isFilterVisible: {
      type: Boolean,
    },
  },
  components: {
    VCheckbox,
    VInput,
  },
  computed: {
    ...mapState(['filters']),
  },
  methods: {
    setChecked(item) {
      this.$emit('setFilter', item);
    },
    setFilterQuery(query) {
      this.$emit('setQuery', query);
    },
    handleClick() {
      this.$emit('filterClick');
    },
  },
};
</script>

<style lang="scss">
.filter {
  font-size: 1.4rem;
  text-align: left;
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.5;
    margin-bottom: 0.8rem;
    cursor: pointer;
  }
  &__title {
    font-size: 1.6rem;
    color: var(--primary);
    font-weight: 500;
  }
  &__list {
    max-height: 19rem;
    min-height: 3rem;
    overflow-y: scroll;
  }
  &__input {
    margin-bottom: 8px;
  }
  &__expand {
    &.rotate {
      transform: rotate(180deg);
    }
  }
  &__checkbox {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
}
.filter__list {
  scrollbar-width: thin;
}
.filter__list::-webkit-scrollbar {
  width: 0.4rem;
}
.filter__list::-webkit-scrollbar-thumb {
  background: var(--light-gray);
  border-right: none;
  border-left: none;
}
</style>
