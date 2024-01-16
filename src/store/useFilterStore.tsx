import { Filter, OrderBy } from "@/domain/model/filter";
import { Category, SubCategory } from "@/utils/const";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FilterState {
  filter: Filter;
  setCategory: (category: Category) => void;
  setSubCategory: (subcategory: SubCategory[]) => void;
  setPrice: (price: number[]) => void;
  setOrder: (order: OrderBy) => void;
  reset: () => void;
}

export const useFilterStore = create(
  persist<FilterState>(
    (set) => {
      return {
        filter: {
          category: {
            key: "",
            englishLabel: null,
            spanishLabel: null,
          },
          subcategories: [],
          price: [0, 10000],
          orderBy: "asc",
        },
        setCategory: (category: Category) => {
          set((state) => ({
            filter: {
              ...state.filter,
              subcategories: [],
              category: category,
            },
          }));
        },
        setSubCategory: (subcategory: SubCategory[]) => {
          set((state) => ({
            filter: {
              ...state.filter,
              subcategories: subcategory,
            },
          }));
        },
        setPrice: (price: number[]) => {
          set((state) => ({
            filter: {
              ...state.filter,
              price: price,
            },
          }));
        },
        setOrder: (order: OrderBy) => {
          set((state) => ({
            filter: {
              ...state.filter,
              orderBy: order,
            },
          }));
        },
        reset: () => {
          set(() => ({
            filter: {
              category: {
                key: "",
                englishLabel: null,
                spanishLabel: null,
              },
              subcategories: [],
              price: [0, 10000],
              orderBy: "asc",
            },
          }));
        },
      };
    },
    {
      name: "filter-storage",
    }
  )
);
