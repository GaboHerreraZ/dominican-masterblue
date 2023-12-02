"use client";
import { use, useRef } from "react";
import { Translations, useTranslationStore } from "@/store/translationStore";
export function TranslationStoreInitializer({
  translations,
}: {
  translations: Translations;
}) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useTranslationStore.setState({
      lng: translations.lng,
      productTranslations: translations.productTranslations,
      dashboardTranslations: translations.dashboardTranslations,
    });
    initialized.current = true;
  }

  return null;
}
