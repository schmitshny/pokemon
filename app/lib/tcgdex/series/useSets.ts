import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export type CardCount = { total: number; official: number };

export type TCGDexSetListItem = {
    id: string;
    name: string;
    logo?: string;
    symbol?: string;
    cardCount?: CardCount;
};

export type TCGDexSeries = {
    id: string;
    name: string;
    logo?: string;
    sets?: TCGDexSetListItem[];
};

export async function getSets(id: string): Promise<TCGDexSeries> {
    const res = await fetch(`https://api.tcgdex.net/v2/en/series/${id}`);

    if (!res.ok) throw new Error("Failed to fetch series from TCGdex");
    return res.json();
}

export function useSeriesSets(id: string): UseQueryResult<TCGDexSeries, Error> {
    console.log("useSeriesSets called with id:", id);
    return useQuery<TCGDexSeries, Error>({
        queryKey: ["tcgdex", "series", id],
        queryFn: () => getSets(id),
        enabled: Boolean(id),
    });
}