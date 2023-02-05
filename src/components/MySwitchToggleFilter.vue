<template>
  <div class="switch-toggle-filter">
    <v-switch-toggle
      :isSwitchToggleChecked="isSwitchToggleChecked"
      :isSwitchToggleDisabled="isSwitchToggleDisabled"
      @switchToggle="switchToggleValue"
    />
    <div
      :class="{
        'switch-toggle-filter__title_disabled': isSwitchToggleDisabled,
      }"
      class="switch-toggle-filter__title"
    >
      Только товары в наличии
    </div>
  </div>
</template>

<script>
import VSwitchToggle from './UI/VSwitchToggle.vue';
export default {
  name: 'my-switch-toggle-filter',
  components: {
    VSwitchToggle,
  },
  props: {
    isSwitchToggleChecked: {
      type: Boolean,
    },
    isSwitchToggleDisabled: {
      type: Boolean,
    },
  },
  methods: {
    switchToggleValue() {
      this.$emit('switchValue');
    },
  },
};
</script>

<style lang="scss">
.switch-toggle-filter {
  display: flex;
  align-items: center;
  &__title {
    font-size: 1.6rem;
    line-height: 1.5;
    &_disabled {
      color: var(--gray);
    }
  }
}
</style>
