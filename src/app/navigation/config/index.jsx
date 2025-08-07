import React from "react";
import NotFound from "../../../pages/NotFound/ui";
import RepositoriesPage from "@pages/Repositories/ui";
import { HomePage } from "@pages/Home/ui";
import RepositoryDetailsPage from "@pages/RepositoryDetailsPage/ui";

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <HomePage />,
    match: /^\/$/,
  },
  {
    path: "/repositories",
    name: "Repositories",
    element: <RepositoriesPage />,
    match: /^\/repositories/,
  },
  {
    path: "/repositories/:owner/:repo",
    element: <RepositoryDetailsPage />,
    match: /^\/repositories/,
  },
  {
    path: "*",
    name: "404",
    element: <NotFound />,
    match: /.*/, // Fallback
  },
];
