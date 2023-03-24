import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout";
import "sanitize.css";
import { Articles } from "./components/Articles";

const AllArticles = () => {
  // fetch
  const articles: unknown[] = [];

  return <Articles articles={articles} />;
};

const CountryArticles = () => {
  // fetch
  const articles: unknown[] = [];

  return <Articles articles={articles} />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/articles" replace={true} />} />
      <Route path="articles" element={<Outlet />}>
        <Route index element={<AllArticles />} />
        <Route path="country/:id" element={<CountryArticles />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);

// <React.StrictMode>
// </React.StrictMode>,
