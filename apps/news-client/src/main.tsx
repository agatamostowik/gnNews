import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Layout } from "./components/Layout";
import { store, useAppSelector } from "./redux/store";
import { CountryArticles } from "./components/CountryArticles";
import "sanitize.css";

const Routers = () => {
  const lang = useAppSelector((state) => state.app.lang);

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Navigate replace to={`country/pl?lang=${lang}`} />}
            />
            <Route path="country/:countryCode" element={<Outlet />}>
              <Route index element={<CountryArticles />} />
            </Route>
          </Route>
        )
      )}
    />
  );
};

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
  </StrictMode>
);
