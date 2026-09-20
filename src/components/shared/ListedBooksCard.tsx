import { IBook } from "@/type/books.type";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiUsers, FiFileText } from "react-icons/fi";

interface IBookProps {
  book: IBook;
}

const ListedBooksCard = ({ book }: IBookProps) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="card card-side bg-base-100 border border-base-200 p-6 shadow-sm rounded-2xl flex-col md:flex-row gap-6 items-center">
      {/* Book Image Section */}
      <figure className="bg-base-200/60 p-8 rounded-2xl w-full md:w-60 h-56 flex items-center justify-center shrink-0">
        <Image
          src={image}
          alt={bookName}
          width={130}
          height={170}
          className="object-contain h-full drop-shadow-md"
        />
      </figure>

      {/* Book Details Section */}
      <div className="flex-1 space-y-4 w-full">
        <div>
          <h2 className="card-title text-2xl font-bold font-serif text-base-content">
            {bookName}
          </h2>
          <p className="text-sm font-medium text-base-content/70 mt-2">
            By : {author}
          </p>
        </div>

        {/* Tags & Year */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base-content">Tag</span>
            {tags?.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="badge badge-lg bg-emerald-50 text-emerald-600 border-none font-medium px-3 py-3"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-base-content/70">
            <FiMapPin className="text-base" />
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
        </div>

        {/* Publisher & Pages */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-base-content/70">
          <div className="flex items-center gap-2">
            <FiUsers className="text-base" />
            <span>Publisher: {publisher}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiFileText className="text-base" />
            <span>Page {totalPages}</span>
          </div>
        </div>

        <div className="divider my-2"></div>

        {/* Badges & Action Button */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="badge badge-lg bg-sky-100 text-sky-600 border-none font-medium px-4 py-3">
            Category: {category}
          </span>
          <span className="badge badge-lg bg-amber-100 text-amber-600 border-none font-medium px-4 py-3">
            Rating: {rating}
          </span>
          <Link
            href={`/books/${bookId}`}
            className="btn btn-sm btn-success text-white rounded-full px-5 hover:bg-emerald-600 normal-case"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;