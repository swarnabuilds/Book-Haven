import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/type/books.type";

 
const getBooks = async() =>{
    const res = await fetch('http://localhost:3000/booksData.json')
    if(!res.ok){
        throw new Error('Failed Books data loaded')
    }
    return res.json()
}
const BooksPage = async() => {
    const books = await getBooks()
    return (

       <div className="container mx-auto my-12">
        <h2 className="text-center text-4xl text-[#23BE0A] my-6 font-semibold">Explore Popular Books</h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                books.slice(0,6).map((book:IBook) => <BookCard
                key={book.bookId} 
                book={book}></BookCard>)
            }
        </div>
       </div>
    );
};

export default BooksPage;