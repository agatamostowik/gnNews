import { useCallback } from "react";
import { changeActivePage } from "../../redux/slices/app";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import * as Styled from "./styles";

const Page = (props: { pageNumber: number; isActive: boolean }) => {
  const { pageNumber, isActive } = props;
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(changeActivePage(pageNumber));
  }, [pageNumber]);

  return (
    <Styled.Page isActive={isActive} onClick={handleClick}>
      {pageNumber}
    </Styled.Page>
  );
};

export const Pagination = (props: { totalResults: number }) => {
  const { totalResults } = props;

  const activePage = useAppSelector((state) => state.app.page);
  const pageSize = useAppSelector((state) => state.app.pageSize);
  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <Styled.Container>
      <Styled.Pages>
        {[...Array(totalPages).keys()].map((page) => {
          const pageNumber = page + 1;
          const isActive = activePage === pageNumber;

          return (
            <Page key={page} isActive={isActive} pageNumber={pageNumber} />
          );
        })}
      </Styled.Pages>
    </Styled.Container>
  );
};
