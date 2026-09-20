'use client';

import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/contex/BooksContext";
import { IBook } from "@/type/books.type";
import { useContext } from "react";

const ListedBooksPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="tabs tabs-lift">
        {/* Read Books Tab */}
        <input 
          type="radio" 
          name="listed_books_tabs" 
          className="tab" 
          aria-label={`Read Books (${readBooks?.length || 0})`} 
          defaultChecked 
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 rounded-box">
          {readBooks && readBooks.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {readBooks.map((book: IBook) => (
                <ListedBooksCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-4">No read books found.</p>
          )}
        </div>

        {/* Wishlist Tab */}
        <input 
          type="radio" 
          name="listed_books_tabs" 
          className="tab" 
          aria-label={`Wishlist Books (${wishlist?.length || 0})`} 
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 rounded-box">
          {wishlist && wishlist.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {wishlist.map((book: IBook) => (
                <ListedBooksCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-4">No wishlist books found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;