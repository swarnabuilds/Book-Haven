'use client'
import { BooksContext } from "@/contex/BooksContext";
import { useContext } from "react";

 

const ListedBooksPage = () => {
    const {readBooks} = useContext(BooksContext)
    console.log(readBooks)
    return (
        <div>
            listyed books 
        </div>
    );
};

export default ListedBooksPage;