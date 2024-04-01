import AvatarServices from '@/components/avatar-services';
import CircleImage from '@/components/circle-image';
import TransitionPage from '@/components/transition-page';

const PageServices = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className='grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20'>
        <div className='max-w-[450px]'>
          <h1 className='text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5'>
            Mis <span className='font-bold text-secundary'>servicios</span>
          </h1>
          <p className='mb-3 text-xl text-gray-300'>
            Ofrezco servicios de desarrollo web frontend. Utilizando las últimas
            tecnologías, como HTML, CSS y JavaScript.
          </p>
          <button className='px-3 py-2 rounded-lg bg-secundary hover:bg-secundary/65'>
            Contacta conmigo
          </button>
        </div>
      </div>
    </>
  );
};

export default PageServices;
