import { changePageSize } from "../../redux/slices/app";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Select } from "../Select";
import { Option } from "../Select/types";
import { useTranslation } from "../Translate";
import * as Styled from "./styles";

const options: Option[] = [
  {
    label: "6",
    value: 6,
  },
  {
    label: "10",
    value: 10,
  },
  {
    label: "16",
    value: 16,
  },
];

export const PageSizeSelect = () => {
  const dispatch = useAppDispatch();
  const pageSize = useAppSelector((state) => state.app.pageSize);
  const lang = useAppSelector((state) => state.app.lang);
  const translation = useTranslation(lang);
  const value = options.find((option) => option.value === pageSize) ?? null;

  const handleChange = (value: unknown) => {
    dispatch(changePageSize(value as number));
  };

  return (
    <Styled.Container>
      <span>{translation("visibleArticles")}:</span>
      <Select value={value} onChange={handleChange} options={options} />
    </Styled.Container>
  );
};
