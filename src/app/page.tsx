'use client';

import Image from 'next/image';
import LandingPageInteractive from './landing-page/components/LandingPageInteractive';

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      {/* Background image with overlay - Optimisé avec Next.js Image */}
      <div className="fixed inset-0 z-0 section-bg-image">
        <Image
          src="/assets/images/galerie-4.jpg"
          alt="Champs de blé doré"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/70 to-white/75 backdrop-blur-[0.5px]"></div>
      </div>
      <div className="relative z-10">
        <LandingPageInteractive />
      </div>
    </main>
  );
}

