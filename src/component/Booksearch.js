import { useState } from "react";
import Book from "./Book";
import './Booksearch.css'
const Booksearch =()=>{
    const [inputValue, setInputValue] = useState('')
    const [fetchData, setFetchData] = useState([]);
    const submitfunction =(e)=>{
        e.preventDefault() 
        console.log('function is working')
        // console.log(inputValue)
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data.items)
            setFetchData(data.items)
            console.log(fetchData)
        })
    }
    return (
        <>
        <div className="mainContainer">
            <dvi className='headding'>
                <h1>
                    BOOK SEARCH
                </h1>
            </dvi>

            <div className="search-bar">
                <form onSubmit={submitfunction}>
                <input type='text' onChange={(e)=>setInputValue(e.target.value)} />
                <input type='submit' />
                </form>
                
            </div>

            <div className="display">
           { fetchData[0] ? <Book data = {fetchData[0]}/>: <></>}
           

            </div>

        </div>
        </>
    )
}

export default Booksearch;