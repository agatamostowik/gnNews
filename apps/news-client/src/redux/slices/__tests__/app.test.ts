import {
  State,
  appReducer,
  changeActivePage,
  changeLang,
  changePageSize,
  reset,
  toggleDisplayMode,
} from "../app";

const initialState: State = {
  displayMode: "list",
  lang: "en",
  pageSize: 6,
  page: 1,
};

describe("appSlice", () => {
  it("toggleDisplayMode - should toggle display mode from list to tile", () => {
    // when:
    const newState = appReducer(initialState, toggleDisplayMode("tile"));

    // then:
    expect(newState.displayMode).toEqual("tile");
    expect(newState).not.toEqual(initialState);
  });

  it("changeActivePage - should change active page to 2", () => {
    // when
    const newState = appReducer(initialState, changeActivePage(2));

    // then
    expect(newState.page).toEqual(2);
    expect(newState).not.toEqual(initialState);
  });

  it("changePageSize - should change page size to 9", () => {
    // when
    const newState = appReducer(initialState, changePageSize(9));

    // then
    expect(newState.pageSize).toEqual(9);
    expect(newState).not.toEqual(initialState);
  });

  it("changeLang - should change language to 'pl'", () => {
    // when
    const newState = appReducer(initialState, changeLang("pl"));

    // then
    expect(newState.lang).toEqual("pl");
    expect(newState).not.toEqual(initialState);
  });
  it("reset - should reset state to initial value", () => {
    // when
    const newState = appReducer(initialState, reset());

    // then
    expect(newState).toEqual(initialState);
  });
});
