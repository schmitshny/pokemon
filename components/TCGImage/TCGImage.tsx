import Image from "next/image";

type TCGImageProps = {
	baseUrl?: string;
	extension?: "webp" | "png" | "jpg";
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
};

export const TCGImage = ({
	baseUrl,
	extension = "webp",
	alt = "",
	width,
	height,
	className,
}: TCGImageProps) => {
	if (!baseUrl) return (
        <div className="h-full w-full rounded-lg bg-gray-200" />
    );

	const hasExtension = /\.[a-z0-9]+$/i.test(baseUrl);
	const finalUrl = hasExtension ? baseUrl : `${baseUrl}.${extension}`;

	return (
		<Image
			src={finalUrl}
			alt={alt}
			width={width}
			height={height}
			className={className}
			unoptimized
		/>
	);
};
