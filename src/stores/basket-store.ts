import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import Product from '../entities/Product';

interface BasketItem {
  product: Product;
  quantity: number;
}

interface BasketStore {
  basket: BasketItem[];
  totalPrice?: string;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  removeAllOfItem: (product: Product) => void;
  clearBasket: () => void;
}

const useBasketStore = create<BasketStore>()(
  persist(
    (set, get) => {
      const updateBasket = (
        product: Product,
        func: (product: Product, basket: BasketItem[]) => BasketItem[]
      ) => {
        const { basket } = get();

        const updatedBasket = func(product, basket);

        const newTotalPrice = updatedBasket
          .reduce(
            (accumulator, basketItem) =>
              accumulator + basketItem.product.price * basketItem.quantity,
            0
          )
          .toFixed(2);

        set({ basket: updatedBasket, totalPrice: newTotalPrice });
      };

      return {
        basket: [],
        addItem: (product) => updateBasket(product, addItemSetter),
        removeItem: (product) => updateBasket(product, removeItemSetter),
        removeAllOfItem: (product) =>
          updateBasket(product, removeAllOfItemSetter),
        clearBasket: () => set(() => ({ basket: [], totalPrice: '0.00' })),
      };
    },
    {
      name: 'basket-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

const findBasketItem = (product: Product, basket: BasketItem[]) =>
  basket.find((basketItem) => basketItem.product.id === product.id);

const addItemSetter = (product: Product, basket: BasketItem[]) => {
  const existingItem = findBasketItem(product, basket);

  if (existingItem) {
    return basket.map((basketItem) => {
      if (basketItem.product.id === product.id) {
        return { ...basketItem, quantity: basketItem.quantity + 1 };
      }

      return basketItem;
    });
  }

  return [...basket, { product, quantity: 1 }];
};

const removeItemSetter = (product: Product, basket: BasketItem[]) => {
  return basket
    .map((basketItem) => {
      if (basketItem.product.id === product.id) {
        return { ...basketItem, quantity: basketItem.quantity - 1 };
      }

      return basketItem;
    })
    .filter(({ quantity }) => quantity);
};

const removeAllOfItemSetter = (product: Product, basket: BasketItem[]) => {
  return basket.filter((basketItem) => basketItem.product.id !== product.id);
};

export default useBasketStore;
