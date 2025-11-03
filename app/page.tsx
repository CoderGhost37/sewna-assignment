import { Logo } from '@/components/Logo';
import { WelcomeHero } from '@/components/WelcomeHero';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-8 left-8 z-50">
        <Logo className="text-3xl" />
      </div>
      <WelcomeHero />
    </div>
  );
}
