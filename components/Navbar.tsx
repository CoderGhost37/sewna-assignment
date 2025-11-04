import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
    return (
        <header className="w-full py-4 px-8 bg-white shadow-md flex items-center justify-between">
            <div className="max-w-7xl">
                <Link href="/">
                    <Image src="/logo.png" alt="Sewna Logo" width={150} height={50} className="object-contain" />
                </Link>
            </div>
        </header>
    );
}