import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/type/books.type";

 
const getBooks = async() =>{
     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`)
    if(!res.ok){
        throw new Error('Failed Books data loaded')
    }
    return res.json()
}
const BooksPage = async() => {
    const books = await getBooks()
    return (
       <div className="container mx-auto my-5">
        <h2 className="text-center text-4xl text-[#23BE0A] my-6 font-semibold">Explore All Books</h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                books.map((book:IBook) => <BookCard
                key={book.bookId} 
                book={book}></BookCard>)
            }
        </div>
       </div>
    );
};

export default BooksPage;