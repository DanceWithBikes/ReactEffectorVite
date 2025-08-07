import React, {useEffect} from "react";
import { useUnit } from 'effector-react';
import SafeList from "@shared/helpers/SafeList";
import { Box } from "@mui/material";
import RepoCard from "@features/repositories/RepositoryCard/ui";
import {
  $isRepositoriesFetchError,
  $isRepositoriesLoading,
  $repositories,
  fetchRepositoriesFx
} from "@features/repositories/RepositoryList/api";

const ReposList = () => {
  const [repositories, isLoading, error] = useUnit([$repositories, $isRepositoriesLoading, $isRepositoriesFetchError]);

  useEffect(() => {
    fetchRepositoriesFx({query: 'react', page: 1, perPage: 3});
  }, []);


  return (
    <Box sx={{p: 2}}>
      <SafeList
        data={repositories?.items}
        isLoading={isLoading}
        error={error}
        renderItem={(repo) => <RepoCard repo={repo}/>}
        keyExtractor={(repo) => repo.id}
      />
    </Box>
  )
};

export default ReposList;
