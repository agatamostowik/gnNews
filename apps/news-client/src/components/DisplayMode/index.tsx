import { useAppDispatch, useAppSelector } from "../../redux/store";
import { toggleDisplayMode } from "../../redux/slices/app";
import * as Styled from "./styles";

export const DisplayMode = () => {
  const dispatch = useAppDispatch();
  const displayMode = useAppSelector((state) => state.app.displayMode);

  const handleClick = () => {
    const newDisplayMode = displayMode === "list" ? "tile" : "list";

    dispatch(toggleDisplayMode(newDisplayMode));
  };

  return (
    <Styled.Icon onClick={handleClick}>
      {displayMode === "list" ? <Styled.TileIcon /> : <Styled.ListIcon />}
    </Styled.Icon>
  );
};
