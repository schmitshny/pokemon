"use client";

import { Loader } from "@/components/Loader";
import { useSet } from "@/app/lib/tcgdex/series/useSet";
import { TCGCardImage } from "../TCGCardImage";

export function CardsGrid({ setId }: { setId: string }) {
    const { data, isLoading, isError, error } = useSet(setId);

    if (isLoading) return <Loader />;

    if (isError) {
        return (
            <div className="text-sm text-red-600">
                Failed: {error?.message ?? "Unknown error"}
            </div>
        );
    }

    const cards = data?.cards ?? [];

    if (cards.length === 0) {
        return <div className="text-sm text-gray-600">No cards available.</div>;
    }

    return (
        <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cards.map((card) => (
                <li key={card.id}>
                    <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
                        <div className="relative mx-auto aspect-[63/88] w-full max-w-[180px] overflow-visible rounded-lg bg-gray-100">
                            <TCGCardImage
                                baseUrl={card.image}
                                alt={card.name}
                                className="object-contain"
                            />
                        </div>

                        <div className="mt-2 text-xs text-gray-500">#{card.localId}</div>
                        <div className="text-sm font-semibold text-gray-900">{card.name}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
