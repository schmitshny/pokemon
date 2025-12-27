"use client";

import { TCGImage } from "@/components/TCGImage/TCGImage";
import { useSeriesSets } from "@/app/lib/tcgdex/series/useSets";
import { Loader } from "@/components/Loader";
import Link from "next/dist/client/link";

export function SetsListGrid({ seriesId }: { seriesId: string }) {
    const { data, isLoading, isError, error } = useSeriesSets(seriesId);

    if (isLoading) return <Loader />;

    if (isError) {
        return (
            <div className="text-sm text-red-600">
                Failed: {error?.message ?? "Unknown error"}
            </div>
        );
    }

    const sets = data?.sets ?? [];

    if (sets.length === 0) {
        return <div className="text-sm text-gray-600">No sets available.</div>;
    }

    return (
        <ul className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {sets.map((set) => (
                <li
                    key={set.id}
                    className="flex flex-col items-center gap-3 rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5"
                >
                    <Link
                        href={`/series/${seriesId}/sets/${set.id}`}
                        className="group flex h-full flex-col items-center gap-3 rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                    <div className="flex h-20 w-[140px] items-center justify-center rounded-lg bg-gray-100">
                        {set.logo ? (
                            <TCGImage
                                baseUrl={set.logo}
                                width={140}
                                height={80}
                                alt={set.name}
                                className="h-full w-full object-contain"
                            />
                        ) : (
                            <div className="h-full w-full rounded-lg bg-gray-200" />
                        )}
                    </div>

                    <div className="text-base font-semibold text-gray-900">{set.name}</div>
                    <div className="text-xs text-gray-500">
                        {set.cardCount?.total ?? "?"} cards
                    </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}