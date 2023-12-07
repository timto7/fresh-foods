import { create } from 'zustand';
import Product from '../entities/Product';

interface BasketItem {
  product: Product;
  quantity: number;
}

interface BasketStore {
  basket: BasketItem[];
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  clearBasket: () => void;
}

const useBasketStore = create<BasketStore>((set, get) => ({
  basket: [],
  addItem: (product) => {
    const { basket } = get();
    const updatedBasket = addItemSetter(product, basket);
    set({ basket: updatedBasket });
  },
  removeItem: (product) => {
    const { basket } = get();
    const updatedBasket = removeItemSetter(product, basket);
    set({ basket: updatedBasket });
  },
  clearBasket: () => set(() => ({ basket: [] })),
}));

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

export default useBasketStore;
