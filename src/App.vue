<template>
  <div class="wrapper">
    <my-header />
    <div class="container">
      <div class="content">
        <my-side-panel />
        <div class="main">
          <my-sort :sortColumn="sortColumn" class="main__sort" />
          <my-card-list
            :currentViewFormat="currentViewFormat"
            :cards="paginatedCards"
            class="main__cards-list"
          />
          <my-pagination />
        </div>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import MyFooter from '@/components/MyFooter';
import MyCardList from '@/components/MyCardList';
import MySort from '@/components/MySort';
import MySidePanel from '@/components/MySidePanel';
import MyPagination from '@/components/MyPagination';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyCardList,
    MySort,
    MySidePanel,
    MyPagination,
  },
  computed: {
    ...mapState(['sortColumn', 'currentViewFormat']),
    ...mapGetters(['paginatedCards']),
  },
};
</script>

<style lang="scss">

.main {
  margin-bottom: 6.4rem;
  &__cards-list {
    margin-bottom: 6.4rem;
  }
  &__sort {
    margin-bottom: 3.2rem;
  }
}
.content {
  display: flex;
}
</style>
