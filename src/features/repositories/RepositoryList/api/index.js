import {combine, createEffect, createEvent, createStore, sample} from 'effector';
import {fetchRepoByNameFx} from "@features/repositories/RepositoryDetails/model/api";

// 🔹 Эффект для загрузки репозиториев
export const fetchRepositoriesFx = createEffect(async ({ query = 'stars:>1', page = 1, perPage = 3 }) => {
  const params = new URLSearchParams({
    q: query,
    page: String(page),
    per_page: String(perPage),
    sort: 'stars',
  });

  const res = await fetch(`https://api.github.com/search/repositories?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch repositories');
  return await res.json();
});


export const $isRepositoriesFetchError = createStore(false)
  .on(fetchRepoByNameFx.fail, () => true)
  .on(fetchRepoByNameFx, () => false)


// 🔹 Хранилище результата
export const $repositories = createStore(null)
  .on(fetchRepositoriesFx.doneData, (_, payload) => payload);

export const $totalCount = createStore(0)
  .on(fetchRepositoriesFx.doneData, (_, payload) => payload.total_count);

// --- Стейты для параметров
export const changeQuery = createEvent();
export const changePage = createEvent();
export const changePerPage = createEvent();

export const $query = createStore('react')
  .on(changeQuery, (_, q) => q);

export const $page = createStore(1)
  .on(changePage, (_, val) => val)
  .on(changeQuery, () => 1);

export const $perPage = createStore(3).on(changePerPage, (_, val) => val);

// --- Объединяем в один стор
const $params = combine({ query: $query, page: $page, perPage: $perPage });

// --- Запуск запроса при любом изменении параметров
sample({
  source: $params,
  target: fetchRepositoriesFx,
});

// 🔹 Хранилище загрузки
export const $isRepositoriesLoading = fetchRepositoriesFx.pending;