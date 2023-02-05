import { createStore } from 'vuex';
import { INIT_PRICE_RANGE, PAGE_SIZE } from '@/constants/basic';

export default createStore({
  state: {
    cards: [
      {
        id: '34af98c0-a3d0-11ed-a8fc-0242ac120002',
        img: 'img2.jpg',
        price: 6499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:2',
        brand: 'AVD',
        reviews: 11,
        rating: 3.25,
        discount: 4,
        available: 5,
      },
      {
        id: '34afa2ca-a3d0-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 124,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Advanced Modeling',
        reviews: 22,
        rating: 4.8,
        discount: 11,
        available: 4,
      },
      {
        id: '34afa446-a3d0-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 2599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Start Scale Models (SSM)',
        reviews: 21,
        rating: 3.5,
        discount: 22,
        available: 0,
      },
      {
        id: '34afa590-a3d0-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 2499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Edmon Studia',
        reviews: 3,
        rating: 2.5,
        discount: 2,
        available: 0,
      },
      {
        id: '34afa6d0-a3d0-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 3499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Modelcollect',
        reviews: 5,
        rating: 3.2,
        discount: 16,
        available: 1,
      },
      {
        id: '34afa824-a3d0-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Modelcollect',
        reviews: 29,
        rating: 1.5,
        discount: 22,
        available: 51,
      },
      {
        id: '34afab8a-a3d0-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 1299,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'AVD',
        reviews: 12,
        rating: 3.5,
        discount: 5,
        available: 8,
      },
      {
        id: '34afacd4-a3d0-11ed-a8fc-0242ac120002',
        img: 'img2.jpg',
        price: 249,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Advanced Modeling',
        reviews: 22,
        rating: 3.2,
        discount: 11,
        available: 6,
      },
      {
        id: '34afae0a-a3d0-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 2529,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Start Scale Models (SSM)',
        reviews: 21,
        rating: 5,
        discount: 22,
        available: 12,
      },
      {
        id: '34afaf40-a3d0-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 2499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Edmon Studia',
        reviews: 3,
        rating: 1.4,
        discount: 2,
        available: 25,
      },
      {
        id: '34afb076-a3d0-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 1459,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Modelcollect',
        reviews: 2,
        rating: 1.2,
        discount: 56,
        available: 13,
      },
      {
        id: '34afb1b6-a3d0-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:12',
        brand: 'ModelGun',
        reviews: 4,
        rating: 1.25,
        discount: 0,
        available: 44,
      },
      {
        id: '34afb2e2-a3d0-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 1499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'AVD',
        reviews: 12,
        rating: 3.5,
        discount: 5,
        available: 14,
      },
      {
        id: '34afb472-a3d0-11ed-a8fc-0242ac120002',
        img: 'img2.jpg',
        price: 249,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:24',
        brand: 'Advanced Modeling',
        reviews: 22,
        rating: 2.9,
        discount: 11,
        available: 10,
      },
      {
        id: '34afb904-a3d0-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 2599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:12',
        brand: 'Start Scale Models (SSM)',
        reviews: 21,
        rating: 3.5,
        discount: 22,
        available: 0,
      },
      {
        id: '34afbada-a3d0-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 2499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:6',
        brand: 'Edmon Studia',
        reviews: 3,
        rating: 3.5,
        discount: 2,
        available: 4,
      },
      {
        id: '34afbcf6-a3d0-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 3499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:9',
        brand: 'Modelcollect',
        reviews: 5,
        rating: 3.2,
        discount: 16,
        available: 8,
      },
      {
        id: '34afbe86-a3d0-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:32',
        brand: 'Modelcollect',
        reviews: 29,
        rating: 1.5,
        discount: 22,
        available: 9,
      },
      {
        id: '34afc03e-a3d0-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 1299,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:35',
        brand: 'AVD',
        reviews: 121,
        rating: 3.5,
        discount: 5,
        available: 1,
      },
      {
        id: '34afc200-a3d0-11ed-a8fc-0242ac120002',
        img: 'img2.jpg',
        price: 249,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Advanced Modeling',
        reviews: 212,
        rating: 1.5,
        discount: 12,
        available: 0,
      },
      {
        id: '34afc372-a3d0-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 2529,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:6',
        brand: 'Start Scale Models (SSM)',
        reviews: 66,
        rating: 4.1,
        discount: 1,
        available: 3,
      },
      {
        id: '34afc4c6-a3d0-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 2499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:32',
        brand: 'Edmon Studia',
        reviews: 5,
        rating: 3.5,
        discount: 0,
        available: 0,
      },
      {
        id: '34afc8c2-a3d0-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 1459,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:2',
        brand: 'Modelcollect',
        reviews: 2,
        rating: 4.5,
        discount: 16,
        available: 1,
      },
      {
        id: '34afca66-a3d0-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:55',
        brand: 'ModelGun',
        reviews: 9,
        rating: 3.25,
        discount: 0,
        available: 555,
      },
      {
        id: '89d10da0-a2f1-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 1499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'AVD',
        reviews: 12,
        rating: 3.5,
        discount: 5,
        available: 3,
      },
      {
        id: '89d11106-a2f1-11ed-a8fc-0242ac120002',
        img: 'img2.jpg',
        price: 249,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Advanced Modeling',
        reviews: 22,
        rating: 3,
        discount: 11,
        available: 5,
      },
      {
        id: '89d11642-a2f1-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 2599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Start Scale Models (SSM)',
        reviews: 21,
        rating: 3.5,
        discount: 22,
        available: 2,
      },
      {
        id: '89d11796-a2f1-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 2499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Edmon Studia',
        reviews: 3,
        rating: 3.5,
        discount: 2,
        available: 3,
      },
      {
        id: '89d118cc-a2f1-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 3499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Modelcollect',
        reviews: 5,
        rating: 3.2,
        discount: 16,
        available: 7,
      },
      {
        id: '89d119ee-a2f1-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Modelcollect',
        reviews: 29,
        rating: 1.5,
        discount: 22,
        available: 61,
      },
      {
        id: '89d125a6-a2f1-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 1299,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'AVD',
        reviews: 12,
        rating: 3.5,
        discount: 5,
        available: 25,
      },
      {
        id: '89d12402-a2f1-11ed-a8fc-0242ac120002',
        img: 'img2.jpg',
        price: 249,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Advanced Modeling',
        reviews: 22,
        rating: 2.5,
        discount: 11,
        available: 37,
      },
      {
        id: '89d12146-a2f1-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 2529,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Start Scale Models (SSM)',
        reviews: 21,
        rating: 1.5,
        discount: 22,
        available: 19,
      },
      {
        id: '89d11d36-a2f1-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 2499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Edmon Studia',
        reviews: 3,
        rating: 3.3,
        discount: 2,
        available: 38,
      },
      {
        id: '89d11c1e-a2f1-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 1459,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Modelcollect',
        reviews: 2,
        rating: 1.2,
        discount: 56,
        available: 12,
      },
      {
        id: '89d11b06-a2f1-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:12',
        brand: 'ModelGun',
        reviews: 4,
        rating: 1.25,
        discount: 0,
        available: 0,
      },
      {
        id: '6ba5556a-a2f2-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 1499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'AVD',
        reviews: 12,
        rating: 3.5,
        discount: 5,
        available: 22,
      },
      {
        id: '6ba55844-a2f2-11ed-a8fc-0242ac120002',
        img: 'img2.jpg',
        price: 249,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:24',
        brand: 'Advanced Modeling',
        reviews: 22,
        rating: 5,
        discount: 11,
        available: 11,
      },
      {
        id: '6ba559f2-a2f2-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 2599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:12',
        brand: 'Start Scale Models (SSM)',
        reviews: 21,
        rating: 3.5,
        discount: 22,
        available: 9,
      },
      {
        id: '6ba55b6e-a2f2-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 2499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:6',
        brand: 'Edmon Studia',
        reviews: 3,
        rating: 3.5,
        discount: 2,
        available: 123,
      },
      {
        id: '6ba55cd6-a2f2-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 3499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:9',
        brand: 'Modelcollect',
        reviews: 5,
        rating: 3.2,
        discount: 16,
        available: 51,
      },
      {
        id: '6ba55e48-a2f2-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:32',
        brand: 'Modelcollect',
        reviews: 29,
        rating: 1.5,
        discount: 22,
        available: 3,
      },
      {
        id: '6ba55fba-a2f2-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 1299,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:35',
        brand: 'AVD',
        reviews: 121,
        rating: 3.5,
        discount: 5,
        available: 2,
      },
      {
        id: '6ba5641a-a2f2-11ed-a8fc-0242ac120002',
        img: 'img2.jpg',
        price: 249,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:43',
        brand: 'Advanced Modeling',
        reviews: 212,
        rating: 2.7,
        discount: 12,
        available: 4,
      },
      {
        id: '6ba56582-a2f2-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 2529,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:6',
        brand: 'Start Scale Models (SSM)',
        reviews: 66,
        rating: 4.1,
        discount: 1,
        available: 2,
      },
      {
        id: '6ba566e0-a2f2-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 2499,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:32',
        brand: 'Edmon Studia',
        reviews: 5,
        rating: 3.5,
        discount: 0,
        available: 23,
      },
      {
        id: '6ba56834-a2f2-11ed-a8fc-0242ac120002',
        img: 'img1.jpg',
        price: 1459,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:2',
        brand: 'Modelcollect',
        reviews: 2,
        rating: 4.5,
        discount: 16,
        available: 91,
      },
      {
        id: '6ba56992-a2f2-11ed-a8fc-0242ac120002',
        img: 'img3.jpg',
        price: 599,
        name: 'Сборная модель Экскаватор UDS-114 Tatra',
        scale: '1:55',
        brand: 'ModelGun',
        reviews: 9,
        rating: 3.25,
        discount: 0,
        available: 0,
      },
    ],
    sortColumn: [
      { id: 1, value: 'reviews', title: 'Популярности' },
      { id: 2, value: 'rating', title: 'Рейтингу' },
      { id: 3, value: 'price', title: 'Цене' },
      { id: 4, value: 'discount', title: 'Скидке' },
      { id: 5, value: 'update', title: 'Обновлению' },
    ],
    category: [
      { id: 1, name: 'Авиация' },
      { id: 2, name: 'Автомобили и мотоциклы' },
      { id: 3, name: 'Аэрографы и компрессоры' },
      { id: 4, name: 'Военная техника' },
      { id: 5, name: 'Доработка моделей' },
      { id: 6, name: 'Железная дорога' },
      { id: 7, name: 'Инструмент' },
      { id: 8, name: 'Клей' },
      { id: 9, name: 'Краска' },
      { id: 10, name: 'Литература' },
      { id: 11, name: 'Миниатюра и диорама' },
      { id: 12, name: 'Модели для детей' },
      { id: 13, name: 'Модельная химия' },
      { id: 14, name: 'Печатная продукция' },
      { id: 15, name: 'Флот' },
      { id: 16, name: 'Футляры и подставки' },
    ],
    manufacturer: [
      { id: 1, name: 'AVD', available: 124, category: 'manufacturer' },
      {
        id: 2,
        name: 'Advanced Modeling',
        available: 67,
        category: 'manufacturer',
      },
      {
        id: 3,
        name: 'Start Scale Models (SSM)',
        available: 1224,
        category: 'manufacturer',
      },
      { id: 4, name: 'Edmon Studia', available: 6, category: 'manufacturer' },
      { id: 5, name: 'Modelcollect', available: 424, category: 'manufacturer' },
      { id: 6, name: 'ModelGun', available: 671, category: 'manufacturer' },
      {
        id: 7,
        name: 'Восточный Экспресс',
        available: 34,
        category: 'manufacturer',
      },
      {
        id: 8,
        name: 'Modeling',
        available: 7,
        category: 'manufacturer',
      },
      { id: 9, name: 'Lorem asasd', available: 122, category: 'manufacturer' },
      { id: 10, name: 'Quadsj', available: 61, category: 'manufacturer' },
      { id: 11, name: 'Qdjsjiaud', available: 34, category: 'manufacturer' },
      { id: 12, name: '123456777', available: 671, category: 'manufacturer' },
    ],
    scale: [
      { id: 1, name: '1:24', available: 124, category: 'scale' },
      { id: 2, name: '1:6', available: 67, category: 'scale' },
      { id: 3, name: '1:12', available: 123, category: 'scale' },
      { id: 4, name: '1:9', available: 423, category: 'scale' },
      { id: 5, name: '1:32', available: 654, category: 'scale' },
      { id: 6, name: '1:35', available: 23, category: 'scale' },
      { id: 7, name: '1:43', available: 443, category: 'scale' },
      { id: 8, name: '1:16', available: 224, category: 'scale' },
      { id: 9, name: '1:12', available: 122, category: 'scale' },
      { id: 10, name: '1:33', available: 11, category: 'scale' },
      { id: 11, name: '1:2', available: 888, category: 'scale' },
      { id: 12, name: '1:55', available: 1, category: 'scale' },
    ],
    cart: [],
    wishList: [],
    initPriceRange: INIT_PRICE_RANGE,
    currentPriceRange: INIT_PRICE_RANGE,
    pageSize: PAGE_SIZE,
    itemsPerPage: 20,
    currentPage: 1,
    brandFilters: [],
    scaleFilters: [],
    currentSortDir: 'asc',
    currentSort: '',
    currentViewFormat: 'thick',
    currentCategory: null,
    manufacturerQuery: '',
    scaleQuery: '',
    isFilterVisible: false,
    isBrandFilterVisible: true,
    isScaleFilterVisible: true,
    isRangeFilterVisible: true,
    isSwitchToggleChecked: true,
    isSwitchToggleDisabled: false,
  },
  getters: {
    filteredCards(state) {
      return [...state.cards]
        .filter((item) => {
          if (state.isSwitchToggleChecked) {
            return item.available > 0;
          }
          return state.cards;
        })
        .filter((item) => {
          if (state.brandFilters.length !== 0) {
            return state.brandFilters.includes(item.brand);
          }
          return state.cards;
        })
        .filter((item) => {
          if (state.scaleFilters.length !== 0) {
            return state.scaleFilters.includes(item.scale);
          }
          return state.cards;
        })
        .filter((item) => {
          return (
            item.price >= state.currentPriceRange[0] &&
            item.price <= state.currentPriceRange[1]
          );
        });
    },
    sortedCards(state, getters) {
      return [...getters.filteredCards].sort((a, b) => {
        if (typeof a[state.currentSort] === Number) {
          return a - b;
        } else {
          let modifier = 1;
          if (state.currentSortDir === 'desc') modifier = -1;
          if (a[state.currentSort] < b[state.currentSort]) return -1 * modifier;
          if (a[state.currentSort] > b[state.currentSort]) return 1 * modifier;
        }
        return 0;
      });
    },
    paginatedCards(state, getters) {
      return [...getters.sortedCards].slice(
        (state.currentPage - 1) * state.itemsPerPage,
        state.currentPage * state.itemsPerPage
      );
    },
    filteredManufacturer(state) {
      return state.manufacturer.filter((item) =>
        item.name.toLowerCase().includes(state.manufacturerQuery)
      );
    },
    filteredScale(state) {
      return state.scale.filter((item) =>
        item.name.toLowerCase().includes(state.scaleQuery)
      );
    },
    totalPages(state, getters) {
      return Math.ceil(getters.filteredCards.length / state.itemsPerPage);
    },
  },
  mutations: {
    SET_CURRENTSORT(state, payload) {
      state.currentSort = payload;
    },
    SET_CURRENTSORTDIR(state, payload) {
      state.currentSortDir = payload;
    },
    SET_CURRENTVIEWFORMAT(state, payload) {
      state.currentViewFormat = payload;
    },
    SET_CURRENTCATEGORY(state, payload) {
      state.currentCategory = payload;
    },
    SET_SCALEFILTERS(state, payload) {
      state.scaleFilters.push(payload);
    },
    SET_BRANDFILTERS(state, payload) {
      state.brandFilters.push(payload);
    },
    SET_EMPTYSCALEFILTERS(state, payload) {
      state.scaleFilters = payload;
    },
    SET_EMPTYBRANDFILTERS(state, payload) {
      state.brandFilters = payload;
    },
    SET_MANUFACTURERQUERY(state, payload) {
      state.manufacturerQuery = payload;
    },
    SET_SCALEQUERY(state, payload) {
      state.scaleQuery = payload;
    },
    SET_ITEMSPERPAGE(state, payload) {
      state.itemsPerPage = payload;
    },
    SET_FILTERVISIBLE(state, payload) {
      state.isFilterVisible = payload;
    },
    SET_CART(state, payload) {
      state.cart.push(payload);
    },
    SET_CURRENTPAGE(state, payload) {
      state.currentPage = payload;
    },
    REMOVE_SCALEFILTER(state, payload) {
      state.scaleFilters = state.scaleFilters.filter((item) => {
        return item !== payload;
      });
    },
    REMOVE_BRANDFILTER(state, payload) {
      state.brandFilters = state.brandFilters.filter((item) => {
        return item !== payload;
      });
    },
    REMOVE_WISHLIST(state, payload) {
      state.wishList = state.wishList.filter((item) => {
        return item !== payload;
      });
    },
    REMOVE_CART(state, payload) {
      state.cart = state.cart.filter((item) => {
        return item !== payload;
      });
    },
    SET_WISHLIST(state, payload) {
      state.wishList.push(payload);
    },
    SET_BRANDFILTERVISIBLE(state, payload) {
      state.isBrandFilterVisible = payload;
    },
    SET_SCALEFILTERVISIBLE(state, payload) {
      state.isScaleFilterVisible = payload;
    },
    SET_RANGEFILTERVISIBLE(state, payload) {
      state.isRangeFilterVisible = payload;
    },
    SET_CURRENTPRICERANGE(state, payload) {
      state.currentPriceRange = payload;
    },
    SET_CURRENTPRICEMIN(state, payload) {
      state.currentPriceRange.splice(0, 1, payload);
    },
    SET_CURRENTPRICEMAX(state, payload) {
      state.currentPriceRange.splice(1, 1, payload);
    },
    SET_SWITCHTOGGLEVALUE(state, payload) {
      state.isSwitchToggleChecked = payload;
    },
  },
  actions: {},
  modules: {},
});
