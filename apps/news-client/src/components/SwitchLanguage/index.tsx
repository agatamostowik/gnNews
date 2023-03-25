import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { changeLang } from "../../redux/slices/app";
import { Select } from "../Select";
import { countries, Language } from "../../types";
import * as Styled from "./styles";

export const SwitchLanguage = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.app.lang);
  let [searchParams, setSearchParams] = useSearchParams();

  const options = countries.map((country) => ({
    label: <Styled.Label>{country.flag}</Styled.Label>,
    value: country.countryCode,
  }));

  const value = options.find((option) => option.value === lang) ?? options[0];

  const handleChange = (value: unknown) => {
    const newValue = value as Language;
    dispatch(changeLang(newValue));
    setSearchParams(new URLSearchParams({ lang: newValue }));
  };

  return <Select value={value} options={options} onChange={handleChange} />;
};
