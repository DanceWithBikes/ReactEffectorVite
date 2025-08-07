import {createEffect, createStore, sample} from 'effector';
import { RepositoryDetailsGate } from "@features/repositories/RepositoryDetails/model/gates";

// --- Эффект и стора для конкретного репозитория
export const fetchRepoByNameFx = createEffect(async ({ owner, repo }) => {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (!res.ok) throw new Error('Failed to fetch repository');
  return await res.json();
});

export const $selectedRepository = createStore(null)
  .on(fetchRepoByNameFx.doneData, (_, payload) => payload)

export const $isRepositoryError = createStore(false)
  .on(fetchRepoByNameFx.fail, () => true)
  .on(fetchRepoByNameFx, () => false);

export const $isRepoLoading = fetchRepoByNameFx.pending;

sample({
  source: RepositoryDetailsGate.state, // или другой store
  fn: ({ owner, repo }) => ({ owner, repo }),
  target: fetchRepoByNameFx,
});