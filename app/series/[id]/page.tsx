import Link from "next/link";
import { SetsListGrid } from "@/app/series/[id]/components/SetsListGrid";

export default async function SeriesPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="mx-auto w-full max-w-6xl">
            <div className="mb-6 flex items-center justify-between gap-4">
                <Link href="/" className="text-sm text-blue-600 hover:underline">
                    ← Back to series
                </Link>

                <div className="text-sm text-gray-500">{id}</div>
            </div>

            <h1 className="mb-8 text-center text-2xl font-bold tracking-tight text-gray-900">
                Sets
            </h1>

            <SetsListGrid seriesId={id} />
        </div>
    );
}
