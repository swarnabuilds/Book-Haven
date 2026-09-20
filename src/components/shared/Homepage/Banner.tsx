import Image from 'next/image';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <div className="bg-[#1313130d] rounded-3xl container mx-auto md:p-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8 my-6 p-6">
      {/* Text Content */}
      <div className="space-y-8 text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-[#131313]">
          Books to freshen up your bookshelf
        </h1>
        <div>
          <button className="bg-[#23BE0A] text-white font-semibold text-lg px-7 py-4 rounded-xl hover:bg-[#1fa109] transition-colors">
            View The List
          </button>
        </div>
      </div>

      {/* Book Image */}
      <div className="flex justify-center items-center">
        <Image
          src={bannerImg}  
          alt="banner image"
          width={318}
          height={450}
          className="object-contain max-h-[300px] md:max-h-[400px] w-auto"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;