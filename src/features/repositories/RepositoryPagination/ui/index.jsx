import React from 'react';
import { Pagination } from "@widgets/pagination/ui";
import { $page, changePage, $totalCount } from "@features/repositories/RepositoryList/api";
import { useUnit } from "effector-react";

const RepositoryPagination = () => {
  const [page, totalCount] = useUnit([
    $page,
    $totalCount
  ]);

  const setPage = (val) => changePage(val);

  return (
      <Pagination page={page} totalCount={totalCount} setPage={setPage}/>
  );
};

export default RepositoryPagination;