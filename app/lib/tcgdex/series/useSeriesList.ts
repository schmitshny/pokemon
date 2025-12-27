import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export type TCGDexSeriesListItem = {
	id: string;
	name: string;
	logo?: string;
};

export async function getSeriesList(): Promise<TCGDexSeriesListItem[]> {
	const res = await fetch("https://api.tcgdex.net/v2/en/series");

	if (!res.ok) throw new Error("Failed to fetch series from TCGdex");
	return res.json();
}

export function useSeriesList(): UseQueryResult<TCGDexSeriesListItem[], Error> {
    return useQuery<TCGDexSeriesListItem[], Error>({
        queryKey: ["tcgdex", "series"],
        queryFn: getSeriesList,
    });
}
