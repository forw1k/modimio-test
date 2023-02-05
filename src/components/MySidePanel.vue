<template>
  <div class="side-panel">
    <my-category
      :category="category"
      :currentCategory="currentCategory"
      class="side-panel__category"
      @selectCategory="choseCategory"
    />
    <my-filter
      :items="filteredManufacturer"
      :query="manufacturerQuery"
      :isFilterVisible="isBrandFilterVisible"
      :key="updateKey"
      :title="'Производитель'"
      :placeholder="'Поиск...'"
      class="side-panel__filter"
      @filterClick="toggleBrandFilter"
      @setQuery="setManufacturerQuery"
      @setFilter="setBrandFilter"
    />
    <my-filter
      :items="filteredScale"
      :query="scaleQuery"
      :isFilterVisible="isScaleFilterVisible"
      :key="updateKey"
      :title="'Масштаб'"
      :placeholder="'Поиск...'"
      class="side-panel__filter"
      @filterClick="toggleScaleFilter"
      @setQuery="setScaleQuery"
      @setFilter="setScaleFilter"
    />
    <my-range-filter
      :isRangeFilterVisible="isRangeFilterVisible"
      :key="updateKey"
      :initPriceRange="initPriceRange"
      :currentPriceRange="currentPriceRange"
      :title="'Цена'"
      class="side-panel__filter"
      @rangeFilterClick="toggleRangeFilter"
      @changeMin="changePriceMin"
      @changeMax="changePriceMax"
      @changeRange="changePriceRange"
    />
    <my-switch-toggle-filter
      :isSwitchToggleChecked="isSwitchToggleChecked"
      :isSwitchToggleDisabled="isSwitchToggleDisabled"
      class="side-panel__switch-toggle-filter"
      @switchValue="setSwitchToggleValue"
    />
    <my-select-block
      :options="pageSize"
      :selected="itemsPerPage"
      :isFilterVisible="isFilterVisible"
      class="side-panel__select"
      @select="setSelected"
      @openFilter="toggleFilter"
    />
    <v-button class="side-panel__btn btn_outline" @btnClick="clearFilters">
      <span>Сбросить товары</span>
    </v-button>
    <v-button class="btn_ghost">
      <span>Сохранить подборку</span>
      <img
        src="@/assets/icons/heart.svg"
        class="side-panel__icon"
        alt="save select products"
      />
    </v-button>
  </div>
</template>

<script>
import MyCategory from '@/components/MyCategory';
import MyFilter from '@/components/MyFilter';
import MyRangeFilter from '@/components/MyRangeFilter';
import MySwitchToggleFilter from '@/components/MySwitchToggleFilter';
import MySelectBlock from './MySelectBlock.vue';
import VButton from './UI/VButton.vue';
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
  name: 'side-panel',
  components: {
    MyCategory,
    MyFilter,
    MyRangeFilter,
    MySwitchToggleFilter,
    MySelectBlock,
    VButton,
  },
  data() {
    return {
      updateKey: 0,
    };
  },
  computed: {
    ...mapState([
      'category',
      'currentCategory',
      'manufacturer',
      'scale',
      'manufacturerQuery',
      'scaleQuery',
      'pageSize',
      'isFilterVisible',
      'itemsPerPage',
      'scaleFilters',
      'brandFilters',
      'isBrandFilterVisible',
      'isScaleFilterVisible',
      'isRangeFilterVisible',
      'initPriceRange',
      'currentPriceRange',
      'isSwitchToggleChecked',
      'isSwitchToggleDisabled',
    ]),
    ...mapGetters(['filteredManufacturer', 'filteredScale']),
  },
  methods: {
    ...mapMutations([
      'SET_CURRENTCATEGORY',
      'SET_MANUFACTURERQUERY',
      'SET_SCALEQUERY',
      'SET_BRANDQUERY',
      'SET_FILTERVISIBLE',
      'SET_BRANDFILTERS',
      'SET_SCALEFILTERS',
      'REMOVE_SCALEFILTER',
      'REMOVE_BRANDFILTER',
      'SET_SCALEFILTERVISIBLE',
      'SET_BRANDFILTERVISIBLE',
      'SET_RANGEFILTERVISIBLE',
      'SET_EMPTYBRANDFILTERS',
      'SET_EMPTYSCALEFILTERS',
      'SET_CURRENTPRICERANGE',
      'SET_CURRENTPRICEMAX',
      'SET_CURRENTPRICEMIN',
      'SET_SWITCHTOGGLEVALUE',
    ]),
    forceRerender() {
      this.updateKey += 1;
    },
    choseCategory(id) {
      this.$store.commit('SET_CURRENTCATEGORY', id);
    },
    setManufacturerQuery(query) {
      this.$store.commit('SET_MANUFACTURERQUERY', query.toLowerCase());
    },
    setScaleQuery(query) {
      this.$store.commit('SET_SCALEQUERY', query.toLowerCase());
    },
    setSelected(option) {
      this.$store.commit('SET_ITEMSPERPAGE', option);
      this.$store.commit('SET_FILTERVISIBLE', false);
    },
    toggleFilter(value) {
      this.$store.commit('SET_FILTERVISIBLE', value);
    },
    setScaleFilter(item) {
      if (this.scaleFilters.find((i) => i === item.name)) {
        this.$store.commit('REMOVE_SCALEFILTER', item.name);
      } else {
        this.$store.commit('SET_SCALEFILTERS', item.name);
      }
    },
    setBrandFilter(item) {
      if (this.brandFilters.find((i) => i === item.name)) {
        this.$store.commit('REMOVE_BRANDFILTER', item.name);
      } else {
        this.$store.commit('SET_BRANDFILTERS', item.name);
      }
    },
    toggleScaleFilter() {
      this.$store.commit('SET_SCALEFILTERVISIBLE', !this.isScaleFilterVisible);
    },
    toggleBrandFilter() {
      this.$store.commit('SET_BRANDFILTERVISIBLE', !this.isBrandFilterVisible);
    },
    toggleRangeFilter() {
      this.$store.commit('SET_RANGEFILTERVISIBLE', !this.isRangeFilterVisible);
    },
    changePriceMin(val) {
      this.$store.commit('SET_CURRENTPRICEMIN', val);
    },
    changePriceMax(val) {
      this.$store.commit('SET_CURRENTPRICEMAX', val);
    },
    changePriceRange(val) {
      this.$store.commit('SET_CURRENTPRICERANGE', val);
    },
    setSwitchToggleValue() {
      this.$store.commit('SET_SWITCHTOGGLEVALUE', !this.isSwitchToggleChecked);
    },
    clearFilters() {
      this.$store.commit('SET_EMPTYBRANDFILTERS', []);
      this.$store.commit('SET_EMPTYSCALEFILTERS', []);
      this.$store.commit('SET_SCALEQUERY', '');
      this.$store.commit('SET_MANUFACTURERQUERY', '');
      this.$store.commit('SET_CURRENTPRICERANGE', this.initPriceRange);
      this.forceRerender();
    },
  },
};
</script>

<style lang="scss">
.side-panel {
  width: 24rem;
  margin-right: 4.8rem;
  padding: 2.4rem 0.4rem 2.4rem 3.6rem;
  flex-shrink: 0;
  &__btn {
    margin-bottom: 2rem;
  }
  &__category {
    margin-bottom: 2.4rem;
  }
  &__filter {
    margin-bottom: 1.6rem;
  }
  &__switch-toggle-filter {
    margin-bottom: 1.6rem;
  }
  &__select {
    margin-bottom: 1.6rem;
  }
  &__icon {
    margin-left: 1.2rem;
  }
}
</style>
