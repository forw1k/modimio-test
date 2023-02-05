<template>
  <div v-if="totalPages > 1" class="pagination">
    <button
      :disabled="minPage"
      class="pagination__btn pagination__btn_prev"
      @click="setPrevPage"
    >
      <img
        src="@/assets/icons/arrow-left.svg"
        class="pagination__arrow"
        alt="previous page button"
      />
      Предыдущая
    </button>
    <div
      v-for="page in pageNums"
      :key="page"
      :class="{
        active: currentPage === page,
      }"
      class="pagination__item"
      @click="setCurrentPage(page)"
    >
      {{ page }}
    </div>
    <button
      :disabled="maxPage"
      class="pagination__btn pagination__btn_next"
      @click="setNextPage"
    >
      Следующая
      <img
        src="@/assets/icons/arrow-right.svg"
        class="pagination__arrow"
        alt="next page button"
      />
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
  name: 'my-pagination',
  computed: {
    ...mapState(['itemsPerPage', 'currentPage']),
    ...mapGetters(['sortedCards', 'totalPages', 'paginatedCards']),
    maxPage() {
      return this.currentPage === this.totalPages;
    },
    minPage() {
      return this.currentPage === 1;
    },
    pageNums() {
      return this.paginate(this.currentPage, this.totalPages, 4);
    },
  },
  methods: {
    ...mapMutations(['SET_CURRENTPAGE']),
    setCurrentPage(val) {
      if (val !== '...') {
        this.$store.commit('SET_CURRENTPAGE', val);
      }
    },
    setNextPage() {
      this.$store.commit('SET_CURRENTPAGE', this.currentPage + 1);
    },
    setPrevPage() {
      this.$store.commit('SET_CURRENTPAGE', this.currentPage - 1);
    },
    paginate(currentPage, totalPages, onSides = 3) {
      let pages = [];
      for (let i = 1; i <= totalPages; i++) {
        let offset = i == 1 || totalPages ? onSides + 1 : onSides;
        if (
          i == 1 ||
          (currentPage - offset <= i && currentPage + offset >= i) ||
          i == currentPage ||
          i == totalPages
        ) {
          pages.push(i);
        } else if (
          i == currentPage - (offset + 1) ||
          i == currentPage + (offset + 1)
        ) {
          pages.push('...');
        }
      }
      return pages;
    },
  },
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  &__item {
    color: var(--black);
    padding: 0.4rem 1rem;
    cursor: pointer;
    border-radius: 0.7rem;
    font-size: 1.6rem;
    &:hover:not(.active) {
      transition: 0.3s;
      background: var(--white-light);
    }
    &.active {
      background: var(--blue);
      border-radius: 0.7rem;
      color: var(--white);
    }
  }
  &__btn {
    display: flex;
    align-items: center;
    background: none;
    cursor: pointer;
    font-size: 1.6rem;
    border: none;
    outline: none;
    &_next {
      margin-left: 1.6rem;
      .pagination__arrow {
        margin-left: 1rem;
      }
    }
    &_prev {
      margin-right: 1.6rem;
      .pagination__arrow {
        margin-right: 1rem;
      }
    }
    &:disabled {
      color: var(--primary);
    }
  }
}
</style>
