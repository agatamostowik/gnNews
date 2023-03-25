import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language } from "../../types";

export type State = {
  displayMode: "list" | "tile";
  lang: Language;
  pageSize: number;
  page: number;
};

const sliceCountryCode = (lang: string) => {
  return lang.slice(0, 2);
};

const getLang = () => {
  const langFromURL = new URLSearchParams(window.location.search).get("lang");
  const langFromNavigator = window.navigator.language;
  const lang = langFromURL ?? langFromNavigator;
  const trimmedLang = sliceCountryCode(lang);
  const isLangSupported = ["da", "uk", "en", "pl", "de", "fr"].includes(
    trimmedLang
  );

  return (isLangSupported ? trimmedLang : "en") as Language;
};

const getPage = () => {
  const pageFromURL = new URLSearchParams(window.location.search).get("page");

  return parseInt(pageFromURL ?? "1");
};

const initialState: State = {
  displayMode: "list",
  lang: getLang(),
  page: getPage(),
  pageSize: 10,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDisplayMode: (state, action: PayloadAction<"list" | "tile">) => {
      return { ...state, displayMode: action.payload };
    },
    changeActivePage: (state, action: PayloadAction<number>) => {
      return { ...state, page: action.payload };
    },
    changePageSize: (state, action: PayloadAction<number>) => {
      return { ...state, pageSize: action.payload };
    },
    changeLang: (state, action: PayloadAction<Language>) => {
      return { ...state, lang: action.payload };
    },
    reset: () => {
      return initialState;
    },
  },
});

export const appReducer = appSlice.reducer;
export const {
  changeActivePage,
  changeLang,
  changePageSize,
  reset,
  toggleDisplayMode,
} = appSlice.actions;
