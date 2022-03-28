import { writable } from 'svelte/store';
import { http } from '$helpers/api';

const initState = {
	page: 1,
	list: [],
	fetching: false
};
function createSlice() {
	const { subscribe, set, update } = writable(initState);

	const handleLoadMore = async (page) => {
    update((pre) => ({
      ...pre,
      fetching: true,
    }))
		const res = await http({ url: 'tv/popular', params: { page } });

    update((pre) => ({
      ...pre,
			page,
      fetching: false,
			list: [...new Set([...(pre.list || []), ...(res.data.results || [])])]
		}));
	};

	return {
		subscribe,
		reset: () => set(initState),
		loadMore: (page) => handleLoadMore(page),
		setMovies: (list) => set({ ...initState, list })
	};
}

export const popularTV = createSlice();
