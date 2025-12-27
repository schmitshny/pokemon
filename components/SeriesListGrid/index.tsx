"use client";

import Link from "next/link";
import { useSeriesList } from "@/app/lib/tcgdex/series/useSeriesList";
import { TCGImage } from "../TCGImage/TCGImage";
import { Loader } from "../Loader";

export function SeriesGrid() {
    const { data: series, isLoading, isError, error } = useSeriesList();

    if (isLoading) return <Loader />;

    if (isError) {
        return (
            <div className="text-sm text-red-600">
                Failed: {error?.message ?? "Unknown error"}
            </div>
        );
    }

    if (!series || series.length === 0) {
        return <div className="text-sm text-gray-600">No series available.</div>;
    }

    return (
        <ul className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {series.map(({ id, logo, name }) => (
                <li key={id}>
                    <Link
                        href={`/series/${id}`}
                        className="group flex h-full flex-col items-center gap-3 rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                        <div className="flex h-20 w-[140px] items-center justify-center rounded-lg bg-gray-100">
                            {logo ? (
                                <TCGImage
                                    baseUrl={logo}
                                    width={140}
                                    height={80}
                                    alt={name}
                                    className="h-full w-full object-contain"
                                />
                            ) : (
                                <div className="h-full w-full rounded-lg bg-gray-200" />
                            )}
                        </div>

                        <div className="text-base font-semibold text-gray-900 group-hover:text-gray-950">
                            {name}
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
