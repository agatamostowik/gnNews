import { useAppSelector } from "../../redux/store";
import { Language } from "../../types";

const translations: Record<Language, Record<string, string>> = {
  en: {
    visibleArticles: "Visible articles",
    moreInfo: "More Info",
  },
  uk: {
    visibleArticles: "Видимі статті",
    moreInfo: "Більше інформації",
  },
  pl: {
    visibleArticles: "Widoczne artykuły",
    moreInfo: "Więcej informacji",
  },
  de: {
    visibleArticles: "Sichtbare Artikel",
    moreInfo: "Mehr Info",
  },
  fr: {
    visibleArticles: "Articles visibles",
    moreInfo: "Plus d'informations",
  },
};

export const useTranslation = (lang: Language) => {
  return (key: string) => {
    return translations[lang][key];
  };
};
