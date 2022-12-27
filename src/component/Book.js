import { useState } from "react";

import "./Book.css"


const Book=(props)=>{
  console.log(props.data)

  const [hoverclass , sethoverClass] = useState(false)
  const hoverFun = ()=>{
    // console.log('hoverrrr')
    // sethoverClass('sethover')
  }
    
    return (
        <div className='book-container'>
       <div className="bookImage-title" 
            // onMouseOver={hoverFun} 
            onMouseEnter={()=>{sethoverClass(true)}}
            onMouseLeave={()=>{sethoverClass(false)}}
            style={{backgroundImage : `url(${props.data.volumeInfo.imageLinks.smallThumbnail})`}}
        >
            <h6>{props.data.volumeInfo.title}</h6>
        </div>
        <h1>{hoverclass}</h1>


        <div style={{display: !hoverclass ? "none":""}}>
            

        <div 
        className="hover" 
        style={{backgroundImage : `url(${props.data.volumeInfo.imageLinks.thumbnail})`}}
        >
            <div className="detailes-div">
            <h5>{props.data.volumeInfo.title}</h5>
            <h3>{props.data.volumeInfo.authors[0]}</h3>
            <h5>{props.data.volumeInfo.pageCount}</h5>

            <h5>{props.data.volumeInfo.ratingsCount}</h5>
            </div>


        </div>
        </div>

    
        </div>
    )
}

export default Book;