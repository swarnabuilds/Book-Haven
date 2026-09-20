'use client';

import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/contex/BooksContext";
import { IBook } from "@/type/books.type";
import { useContext, useState } from "react";

const ListedBooksPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  // Sort state
  const [sortBy, setSortBy] = useState<'rating' | 'pages' | 'year'>('rating');

  // Helper function to sort books array safely
  const sortBooks = (books: IBook[] = []) => {
    const sortedBooks = [...books];
    if (sortBy === 'rating') {
      sortedBooks.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'pages') {
      sortedBooks.sort((a, b) => (b.totalPages || 0) - (a.totalPages || 0));
    } else if (sortBy === 'year') {
      sortedBooks.sort((a, b) => (b.yearOfPublishing || 0) - (a.yearOfPublishing || 0));
    }
    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlistBooks = sortBooks(wishlist);

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Dropdown sort Section */}
      <div className="flex justify-center mb-8">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'rating' | 'pages' | 'year')}
          className="select select-success w-full max-w-xs font-semibold"
        >
          <option value="rating">Sort By Rating</option>
          <option value="pages">Sort By Number of Pages</option>
          <option value="year">Sort By Publisher Year</option>
        </select>
      </div>

      {/* Tabs Section */}
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
          {sortedReadBooks.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {sortedReadBooks.map((book: IBook) => (
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
          {sortedWishlistBooks.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {sortedWishlistBooks.map((book: IBook, idx:number) => (
                <ListedBooksCard key={idx} book={book} />
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