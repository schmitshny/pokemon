import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export type TCGDexCardListItem = {
    id: string;
    localId: string;
    name: string;
    image: string;
};

export type TCGDexSet = {
    id: string;
    name: string;
    logo?: string;
    symbol?: string;
    releaseDate?: string;
    cardCount?: {
        total: number;
        official: number;
        normal?: number;
        reverse?: number;
        holo?: number;
        firstEd?: number;
    };
    cards?: TCGDexCardListItem[];
    serie?: { id: string; name: string };
};

export async function getSet(setId: string): Promise<TCGDexSet> {
    const res = await fetch(`https://api.tcgdex.net/v2/en/sets/${setId}`);

    if (!res.ok) throw new Error("Failed to fetch set from TCGdex");
    return res.json();
}

export function useSet(setId: string): UseQueryResult<TCGDexSet, Error> {
    return useQuery<TCGDexSet, Error>({
        queryKey: ["tcgdex", "sets", setId],
        queryFn: () => getSet(setId),
        enabled: Boolean(setId),
    });
}
