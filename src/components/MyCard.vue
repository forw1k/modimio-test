<template>
  <div class="card">
    <div class="card__top">
      <img
        :src="require(`../assets/images/${card.img}`)"
        class="card__img"
        alt="product image"
      />
      <div class="card__hidden">
        <div @click="setToWishList(card)" class="card__like">
          <img
            :src="require(`../assets/icons/${wishIcon}.svg`)"
            alt="add to wishlist button"
          />
        </div>
        <div class="card__preview">
          <v-button class="btn_ghost btn_bg-gray content">
            Быстрый просмотр
          </v-button>
        </div>
      </div>
    </div>
    <div class="card__middle">
      <div class="card__price">{{ card.price }} ₽</div>
      <div class="card__name">
        {{ card.name }}
      </div>
      <div class="card__detail">
        <div class="card__scale">{{ card.scale }}</div>
        <div class="card__brand">{{ card.brand }}</div>
      </div>
      <StarRating
        read-only
        :increment="0.01"
        :rating="card.rating"
        :star-size="16"
        :show-rating="false"
        class="card__rating"
      />
      <div class="card__reviews">{{ card.reviews }} Отзывов</div>
    </div>
    <div class="card__bottom">
      <v-button
        :class="{ btn_selected: isInCart }"
        @btnClick="addToCart(card)"
        class="btn_blue"
        >{{ isInCart ? 'В корзине' : 'В корзину' }}</v-button
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import StarRating from 'vue-star-rating';
import VButton from '@/components/UI/VButton.vue';
export default {
  name: 'my-card',
  components: {
    VButton,
    StarRating,
  },
  props: {
    card: {
      type: Object,
      default: () => {},
      required: true,
    },
    currentViewFormat: {
      type: String,
    },
  },
  computed: {
    ...mapState(['cart', 'wishList']),
    isInCart() {
      return this.cart.includes(this.card.id);
    },
    isInWishList() {
      return this.wishList.includes(this.card.id);
    },
    wishIcon() {
      return this.isInWishList ? 'heart-active' : 'heart';
    },
  },
  methods: {
    ...mapMutations([
      'SET_CART',
      'SET_WISHLIST',
      'REMOVE_WISHLIST',
      'REMOVE_CART',
    ]),
    addToCart(item) {
      if (this.cart.find((i) => i === item.id)) {
        this.$store.commit('REMOVE_CART', item.id);
      } else {
        this.$store.commit('SET_CART', item.id);
      }
    },
    setToWishList(item) {
      if (this.wishList.find((i) => i === item.id)) {
        this.$store.commit('REMOVE_WISHLIST', item.id);
      } else {
        this.$store.commit('SET_WISHLIST', item.id);
      }
    },
  },
};
</script>

<style lang="scss">
.card {
  border-radius: 1.6rem;
  overflow: hidden;
  background: var(--white);
  &:hover {
    filter: drop-shadow(0.1rem 0.1rem 1.5rem var(--black-transparent));
    .card__hidden {
      visibility: visible;
      opacity: 1;
    }
    .card__bottom {
      visibility: visible;
    }
  }
  &__top {
    width: 100%;
    position: relative;
    margin-bottom: 0.4rem;
  }
  &__img {
    width: 100%;
  }
  &__hidden {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    z-index: 11;
  }
  &__like {
    width: fit-content;
    position: absolute;
    right: 2%;
    top: 2%;
  }
  &__preview {
    display: flex;
    justify-content: center;
    transform: translate(-50%, -50%);
    max-width: 80%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &__middle {
    text-align: left;
    padding: 0 0.8rem;
    margin-bottom: 0.8rem;
  }
  &__price {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }
  &__name {
    font-size: 1.2rem;
    line-height: 1.25;
    margin-bottom: 0.4rem;
    min-height: 3.2rem;
  }
  &__detail {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  &__scale {
    background: var(--burnt-sienna);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    margin-right: 0.8rem;
  }
  &__brand {
    font-size: 1.2rem;
  }
  &__reviews {
    font-size: 1.2rem;
    line-height: 1.25;
    color: var(--gray);
  }
  &__button {
    transform: translate(-50%, -50%);
  }
  &__bottom {
    padding: 0 0.8rem 0.8rem 0.8rem;
    visibility: hidden;
  }
  &__like {
    cursor: pointer;
  }
}
</style>
