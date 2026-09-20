import ReadBtn from "@/components/shared/bookDeatils/ReadBtn";
import WishlistBtn from "@/components/shared/bookDeatils/WishlistBtn";
import { IBook } from "@/type/books.type"
import Image from "next/image";

interface IBookDetailsProps {
    params: {
        bookId: string
    }
}

const getBooks = async() =>{
    const res = await fetch('http://localhost:3000/booksData.json')
    if(!res.ok){
        throw new Error('Failed Books data loaded')
    }
    return res.json()
}

const BookDetailsPage = async( {params}:IBookDetailsProps ) => {
    const {bookId} = await params;
    const booksData = await getBooks()
    const book = booksData.find((book:IBook) => String(book.bookId) === String(bookId))

    if (!book) {
        return <div className="container mx-auto my-20 text-center text-2xl font-bold">Book Not Found!</div>;
    }

    return (
        <div className="container mx-auto my-10 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Image Container */}
                <div className="bg-[#1313130D] rounded-3xl p-12 flex justify-center items-center min-h-[550px]">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={320}
                        height={460}
                        className="object-contain max-h-[460px] drop-shadow-xl"
                        priority
                    />
                </div>

                {/* Right Side: Details Content */}
                <div className="space-y-4 text-[#131313]">
                    <h1 className="text-4xl font-bold font-serif">{book.bookName}</h1>
                    <p className="text-lg font-medium text-[#131313CC]">By : {book.author}</p>

                    <hr className="border-gray-200 my-4" />

                    <p className="text-lg font-medium text-[#131313CC]">{book.category}</p>

                    <hr className="border-gray-200 my-4" />

                    <p className="text-[#131313B3] leading-relaxed">
                        <span className="font-bold text-[#131313]">Review : </span>
                        {book.review}
                    </p>

                    <div className="flex items-center gap-4 py-2">
                        <span className="font-bold">Tag</span>
                        <div className="flex gap-3 flex-wrap">
                            {book.tags?.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="bg-[#23BE0A0D] text-[#23BE0A] font-semibold text-sm px-4 py-1.5 rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-200 my-4" />

                    <div className="space-y-3 max-w-sm text-base">
                        <div className="flex justify-between">
                            <span className="text-[#131313B3]">Number of Pages:</span>
                            <span className="font-bold">{book.totalPages}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#131313B3]">Publisher:</span>
                            <span className="font-bold">{book.publisher}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#131313B3]">Year of Publishing:</span>
                            <span className="font-bold">{book.yearOfPublishing}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#131313B3]">Rating:</span>
                            <span className="font-bold">{book.rating}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <ReadBtn book={book}></ReadBtn>
                        <WishlistBtn book={book}></WishlistBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;