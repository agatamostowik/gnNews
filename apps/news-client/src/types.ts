export const countries = [
  {
    name: "United States",
    language: "English",
    countryCode: "en",
    id: "us",
    flag: "🇺🇸",
  },
  {
    name: "Ukraine",
    language: "Українська",
    countryCode: "uk",
    id: "ua",
    flag: "🇺🇦",
  },
  {
    name: "Poland",
    language: "Polski",
    countryCode: "pl",
    id: "pl",
    flag: "🇵🇱",
  },
  {
    name: "Germany",
    language: "Deutsch",
    countryCode: "de",
    id: "de",
    flag: "🇩🇪",
  },
  {
    name: "France",
    language: "Français",
    countryCode: "fr",
    id: "fr",
    flag: "🇫🇷",
  },
] as const;

export const languages = countries.map((country) => country.countryCode);

export type Language = (typeof languages)[number];

export const countryId = countries.map((country) => country.id);
export type Code = (typeof countryId)[number];

export enum LanguageCode {
  "pl-PL" = "pl",
  "en-EN" = "en",
  "de-DE" = "de",
  "en-GB" = "uk",
  "en-US" = "us",
  "fr-FR" = "fr",
}

export enum CountryFlag {
  pl = "🇵🇱",
  de = "🇩🇪",
  uk = "🇬🇧",
  us = "🇺🇸",
  fr = "🇫🇷",
}

export enum CountryName {
  Poland = "Poland",
  Germany = "Germany",
  France = "France",
  UnitedKingdom = "United Kingdom",
  UnitedStates = "United States",
}
