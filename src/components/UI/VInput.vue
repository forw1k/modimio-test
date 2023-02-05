<template>
  <div class="search">
    <input
      :value="query"
      :placeholder="placeholder"
      type="text"
      class="search__input"
      @input="setSearchQuery($event.target.value)"
    />
    <div @click="setQuery" class="search__icon">
      <img src="@/assets/icons/search.svg" alt="search button" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-input',
  props: {
    placeholder: {
      type: String,
    },
    query: {
      type: String,
    },
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    setSearchQuery(str) {
      this.searchQuery = str;
    },
    setQuery() {
      this.$emit('setQuery', this.searchQuery);
    },
  },
};
</script>

<style lang="scss">
.search {
  position: relative;
  box-sizing: border-box;
  &:hover {
    .search__input {
      border: 0.2rem solid var(--primary);
      padding: 0.7rem 1.1rem;
    }
  }
  &__input {
    width: 100%;
    height: 3.6rem;
    border: 0.1rem solid var(--light-gray);
    border-radius: 0.9rem;
    padding: 0.8rem 1.2rem;
    color: var(--primary);
  }
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    right: 5%;
    cursor: pointer;
  }
}
</style>
