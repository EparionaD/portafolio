import CoverParticles from '@/components/cover-particles';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-[100dvh] h-full bg-no-repeat bg-gradient-cover'>
      <h1>Probando</h1>
      <CoverParticles />
    </main>
  );
}
