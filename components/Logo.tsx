import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
    return (
        <Image src="/logo.png" alt="Sewna Logo" width={150} height={50} className={className} />
    );
}