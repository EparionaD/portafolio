'use client';

import Image from 'next/image';
import TransitionComponent from './transition-component';

const AvatarServices = () => {
  return (
    <TransitionComponent
      position='right'
      className='bottom-0 left-0 hidden md:inline-block md:absolute'
    >
      <Image
        src='/services.png'
        width={300}
        height={300}
        className='w-[350px] h-full'
        alt='Avatar'
      />
    </TransitionComponent>
  );
};

export default AvatarServices;
