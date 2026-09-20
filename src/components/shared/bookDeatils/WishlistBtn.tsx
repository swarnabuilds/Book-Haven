'use client'

import { BooksContext } from "@/contex/BooksContext";
import { IBook } from "@/type/books.type";
import { useContext } from "react";
import { toast } from 'react-toastify';


const WishlistBtn = ({ book }: {book:IBook}) => {
    const {wishlist, setWishlist} = useContext(BooksContext)
    const handelWishlist = () => {
        setWishlist([...wishlist, book])
        toast(`You Have Added "${book.bookName}" To Your Wishlist`)

    }
    return (
        <button onClick={() => handelWishlist()} className="bg-[#50B1C9] text-white font-semibold text-lg px-7 py-3 rounded-xl hover:bg-[#3ea0b7] transition-colors">
            Wishlist
        </button>
    );
};

export default WishlistBtn;