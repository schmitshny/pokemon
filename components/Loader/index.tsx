import Image from "next/image";

export function Loader() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 py-12 text-center height-full">
			<div className="relative h-16 w-16 animate-spin-slow">
				<Image
					src="/pokeball.png"
					alt="Loading"
					fill
					className="object-contain"
					priority
				/>
			</div>
		</div>
	);
}
