import React from "react";
import RepositoriesList from "@features/repositories/RepositoryList/ui";
import { RepositoriesSearch } from "@features/repositories/RepositorySearch/ui";
import RepositoryPagination from "@features/repositories/RepositoryPagination/ui";

function RepositoriesPage() {
  return (
    <div>
      <RepositoriesSearch />
      <RepositoriesList />
      <RepositoryPagination />
    </div>
  );
}

export default RepositoriesPage;
