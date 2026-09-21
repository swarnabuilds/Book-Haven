'use client' ;
import { IBook } from "@/type/books.type";
import { createContext, ReactNode, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export interface IBooksContext {
  readBooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: Dispatch<SetStateAction<IBook[]>>;
}
export const BooksContext = createContext<IBooksContext>({
        readBooks: [],
        setReadBooks: () => {},
        wishlist: [],
        setWishlist: () => {},
})
const BooksProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBooks] = useState<IBook[]>([])
    const [wishlist, setWishlist] = useState<IBook[]>([])

    const shareData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }
    return (
         <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
    );
};

export default BooksProvider;