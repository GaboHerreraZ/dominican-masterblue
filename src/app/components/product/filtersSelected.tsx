"use client";
import { useTranslationStore } from "@/store/translationStore";
import { useProductStore } from "@/store/useProductStore";
import React from "react";

export const FiltersSelected = () => {
  const translations = useTranslationStore(
    (state) => state.productTranslations
  );
  const filter = useProductStore((state) => state.filter);

  return (
    <div className="p-5">
      {filter.categories.length === 0 && filter.subcategories.length === 0 && (
        <>{translations?.noNofilterSelected}</>
      )}

      {filter.categories.length > 0 && (
        <React.Fragment>
          <h4 className="text-master-900/70 font-bold inline">
            {translations?.category}
          </h4>
          {filter.categories.map((category, index) => (
            <span key={index} className="text-small capitalize">
              /{category}
            </span>
          ))}
        </React.Fragment>
      )}
      {filter.subcategories.length > 0 && (
        <React.Fragment>
          <h4 className="ml-5 text-master-900/70 font-bold inline">
            {translations?.subcategory}
          </h4>
          {filter.subcategories.map((category, index) => (
            <span key={index} className="text-small capitalize">
              /{category}
            </span>
          ))}
        </React.Fragment>
      )}
    </div>
  );
};
