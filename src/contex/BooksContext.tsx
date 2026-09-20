'use client' ;
import { createContext, ReactNode, useState } from "react";
 
export const BooksContext = createContext({})
const BooksProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setRedBooks] = useState([])
    const [wishlist, setWishlist] = useState([])

    const shareData = {
        readBooks,
        setRedBooks,
        wishlist,
        setWishlist
    }
    return (
         <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
    );
};

export default BooksProvider;