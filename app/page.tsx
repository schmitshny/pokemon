import { SeriesGrid } from "../components/SeriesListGrid";

export default function HomePage() {
    return (
        <div className="mx-auto w-full max-w-6xl">
            <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-[#ffcb05] [text-shadow:1px_1px_2px_#3b4cca]">
                Pokemon TCG Series
            </h1>

            <SeriesGrid />
        </div>
    );
}