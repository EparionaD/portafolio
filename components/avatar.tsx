import React from 'react';
// import TransitionComponent from '@/components/transition-component';
import Image from 'next/image';
import TransitionComponent from './transition-component';

const Avatar = () => {
  return (
    <TransitionComponent
      position='bottom'
      className='bottom-0 right-0 hidden md:inline-block md:absolute'
    >
      <Image
        src='/avatar-1.png'
        width={400}
        height={4000}
        alt='Avatar'
        className='w-full h-full'
      />
    </TransitionComponent>
  );
};

export default Avatar;
