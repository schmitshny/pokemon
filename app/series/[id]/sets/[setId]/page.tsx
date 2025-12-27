import Link from "next/link";
import { CardsGrid } from "./components/CardsGrid";

export default async function SetPage({
    params,
}: {
    params: Promise<{ id: string; setId: string }>;
}) {
    const { id: seriesId, setId } = await params;

    return (
        <div className="mx-auto w-full max-w-6xl">
            <div className="mb-6 flex items-center justify-between gap-4">
                <Link
                    href={`/series/${seriesId}`}
                    className="text-sm text-blue-600 hover:underline"
                >
                    ← Back to sets
                </Link>

                <div className="text-sm text-gray-500">{setId}</div>
            </div>

            <h1 className="mb-6 text-center text-2xl font-bold tracking-tight text-gray-900">
                Cards
            </h1>

            <CardsGrid setId={setId} />
        </div>
    );
}