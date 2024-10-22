
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import BookMarks from './Components/BookMarks'
import Header from './Components/Header'

function App() {
  
const [bookMarks,setBookMarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);

const handleBookMarks = blog => {
const newBookMarks = [...bookMarks,blog];
setBookMarks(newBookMarks)
  }


  const handleMarkRead = (id,time) => {
     
     setReadingTime(readingTime + time);

     const remainingBookmarks = bookMarks.filter(bookMark => bookMark.id !==id)
     setBookMarks(remainingBookmarks)
     
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-5xl mx-auto gap-4'>
      <Blogs handleBookMarks = {handleBookMarks} handleMarkRead= {handleMarkRead}></Blogs>
      <BookMarks bookMarks ={bookMarks} readingTime={readingTime}></BookMarks>
  
      </div>
    </>
  )
}

export default App
