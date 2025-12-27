import Image from "next/image";

type TCGCardImageProps = {
    baseUrl?: string; // eg. https://assets.tcgdex.net/en/swsh/swsh3/136
    quality?: "high" | "low";
    extension?: "webp" | "png" | "jpg";
    alt?: string;
    /** className dla <img> */
    className?: string;
    /** className dla wrappera z efektem 3D */
    containerClassName?: string;
    priority?: boolean;
};

export function TCGCardImage({
    baseUrl,
    quality = "high",
    extension = "webp",
    alt = "",
    className,
    containerClassName,
    priority = false,
}: TCGCardImageProps) {
    if (!baseUrl) {
        return <div className="absolute inset-0 rounded-lg bg-gray-200" />;
    }

    const finalUrl = `${baseUrl}/${quality}.${extension}`;

    return (
        <div className={`tcg-card-3d absolute inset-0 ${containerClassName ?? ""}`}>
            <Image
                src={finalUrl}
                alt={alt}
                fill
                sizes="160px"
                className={className}
                priority={priority}
                unoptimized
            />
        </div>
    );
}
