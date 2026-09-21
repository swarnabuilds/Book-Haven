'use client';
import { BooksContext } from "@/contex/BooksContext";
import { IBook } from "@/type/books.type";
import { useContext } from "react";
import { toast } from 'react-toastify';

const ReadBtn = ({ book }: {book:IBook}) => {
    const {readBooks, setReadBooks} = useContext(BooksContext)
    const handelRead = () => {
        setReadBooks([...readBooks, book])
        toast.success(`you have read "${book.bookName}"`)
    }
    return (
            <button onClick={() => handelRead()} className="border border-gray-300 bg-white text-black font-semibold text-lg px-7 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                Read
            </button>
    );
};

export default ReadBtn;