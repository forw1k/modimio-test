<template>
  <div class="range-filter">
    <div @click="handleClick" class="range-filter__head">
      <div class="range-filter__title">{{ title }}</div>
      <div
        :class="{ rotate: isRangeFilterVisible }"
        class="range-filter__expand"
      >
        <img
          src="@/assets/icons/arrow-top.svg"
          class="range-filter__img"
          alt="toggle size range-filter"
        />
      </div>
    </div>
    <div v-if="isRangeFilterVisible" class="range-filter__body">
      <div class="range-filter__values">
        <div class="range-filter__block">
          <div class="range-filter__from">От</div>
          <input
            :disabled="false"
            :value="currentPriceRange[0]"
            class="range-filter__input"
            @blur="changePriceMin($event.target.value)"
          />
        </div>
        <div class="range-filter__block">
          <div class="range-filter__from">До</div>
          <input
            :disabled="false"
            :value="currentPriceRange[1]"
            class="range-filter__input"
            @blur="changePriceMax($event.target.value)"
          />
        </div>
      </div>
    </div>
    <Slider
      :max="initPriceRange[1]"
      :tooltips="false"
      :value="currentPriceRange"
      class="range-filter__slider"
      @change="changePriceRange"
    />
  </div>
</template>

<script>
import Slider from '@vueform/slider';
export default {
  name: 'my-range-filter',
  components: {
    Slider,
  },
  props: {
    title: {
      type: String,
    },
    isRangeFilterVisible: {
      type: Boolean,
    },
    initPriceRange: {
      type: Array,
      default: () => [],
    },
    currentPriceRange: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changePriceMin(val) {
      this.$emit('changeMin', parseInt(val));
    },
    changePriceMax(val) {
      this.$emit('changeMax', parseInt(val));
    },
    changePriceRange(val) {
      this.$emit('changeRange', val);
    },
    handleClick() {
      this.$emit('rangeFilterClick');
    },
  },
};
</script>

<style lang="scss">
.range-filter {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    cursor: pointer;
  }
  &__img {
    &.rotate {
      transform: rotate(180deg);
    }
  }
  &__title {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.5;
  }
  &__slider {
    margin-top: 1.6rem;
  }
  &__values {
    display: flex;
  }
  &__inputs {
    margin-bottom: 10rem;
  }
  &__block {
    width: 9.8rem;
    text-align: left;
    &:first-child {
      margin-right: 1.2rem;
    }
  }
  &__from {
    color: var(--dark-gray);
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }
  &__input {
    border: 0.1rem solid var(--light-gray);
    border-radius: 0.9rem;
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
    color: var(--primary);
    width: 100%;
    box-sizing: border-box;
  }
}
.slider-connect {
  background: var(--blue) !important;
}
.slider-touch-area {
  background: var(--blue);
  border-radius: 50%;
}
</style>
