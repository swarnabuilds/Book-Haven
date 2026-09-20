import { IBook } from '@/type/books.type';
import Image from 'next/image';
import Link from 'next/link';
 

interface IBookProps {
    book : IBook
}
const BookCard = ({ book }:IBookProps) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
   <div className="border border-gray-200 rounded-3xl p-6 bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full">
  <div>
    {/* Image Container */}
    <div className="bg-[#f3f3f3] rounded-2xl py-8 px-4 flex justify-center items-center h-60">
      <Image
        src={image}
        alt={bookName}
        width={130}
        height={166}
        className="object-contain max-h-48 drop-shadow-md"
      />
    </div>

    {/* Tags */}
    <div className="flex gap-3 mt-6 mb-4 flex-wrap">
      {tags?.map((tag, index) => (
        <span
          key={index}
          className="bg-[#23BE0A0D] text-[#23BE0A] font-medium text-sm px-4 py-1.5 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Book Title & Author */}
    <h2 className="text-2xl font-bold text-[#131313] font-serif line-clamp-1 mb-2">
      {bookName}
    </h2>
    <p className="text-[#131313CC] font-medium text-base mb-4">
      By : {author}
    </p>
  </div>

  {/* Divider & Footer Details */}
  <div>
    <div className="border-t border-dashed border-gray-300 my-4"></div>

    <div className="flex justify-between items-center text-[#131313CC] font-medium text-base mb-4">
      <span>{category}</span>
      <div>
        Rating : {rating}
      </div>
    </div>

    {/* View Details Button */}
    <Link href={`/books/${bookId}`}>
      <button className="w-full bg-[#23BE0A] text-white font-semibold py-2.5 rounded-xl hover:bg-[#1fa109] transition-colors duration-200">
      View Details
    </button>
    </Link>
  </div>
</div>
  );
};

export default BookCard;