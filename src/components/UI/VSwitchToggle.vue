<template>
  <label
    :class="{ 'switch-toggle_disabled': isSwitchToggleDisabled }"
    class="switch-toggle switch-toggle_round"
  >
    <input
      type="checkbox"
      :checked="isSwitchToggleChecked"
      :disabled="isSwitchToggleDisabled"
      class="switch-toggle__input"
      @change="switchToggle"
    />
    <span
      :class="{ 'switch-toggle__slider_light': isSwitchToggleChecked }"
      class="switch-toggle__slider"
    ></span>
  </label>
</template>

<script>
export default {
  name: 'v-switch-toggle',
  props: {
    isSwitchToggleChecked: {
      type: Boolean,
    },
    isSwitchToggleDisabled: {
      type: Boolean,
    },
  },
  methods: {
    switchToggle() {
      this.$emit('switchToggle');
    },
  },
};
</script>

<style lang="scss">
.switch-toggle {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  width: 4rem;
  height: 2.4rem;
  margin-right: 1rem;
  &__input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .switch-toggle__slider {
      background: var(--blue);
    }
    &:checked + .switch-toggle__slider:before {
      transform: translateX(1.2rem);
    }
  }
  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gray);
    border-radius: 1.2rem;
    transition: 0.3s;
    &_light {
      background: var(--white-light);
    }
    &:before {
      position: absolute;
      content: '';
      height: 1.6rem;
      width: 1.6rem;
      left: 0.6rem;
      bottom: 0.4rem;
      background: var(--white);
      transition: 0.3s;
    }
  }
  &_round {
    .switch-toggle__slider:before {
      border-radius: 50%;
    }
  }
  &_disabled {
    .switch-toggle__slider {
      background: var(--white-light);
    }
    .switch-toggle__input {
      &:checked + .switch-toggle__slider_light {
        background: var(--gray);
      }
      &:not(:checked) + .switch-toggle__slider:before {
        background: var(--gray);
      }
    }
  }
}
</style>
