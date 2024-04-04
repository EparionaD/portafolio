import Image from 'next/image';
import Link from 'next/link';

interface PortfolioBoxProps {
  title: string;
  image: string;
  urlDemo: string;
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { title, image, urlDemo } = props;
  return (
    <div className='p-4 border border-teal-50 rounded-lg'>
      <h3 className='mb-4 text-xl'>{title}</h3>
      <Image
        src={image}
        alt='title'
        width={200}
        height={200}
        className='w-full md:w-[200px] rounded-2xl h-auto'
      />
      <div className='flex gap-5 mt-5'>
        <Link
          href={urlDemo}
          target='_blank'
          className='p-2 transition duration-150 rounded-lg bg-secundary hover:bg-secundary/80'
        >
          Visitar
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox;
