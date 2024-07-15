
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmars from './components/Bookmarks/Bookmars'
import Header from './components/Header/Header'

function App() {

  const [bookmars, setBookmarks]=useState([]);
  const [readingTime, setReadingTime]=useState(0);

  const handleAddToBookmark =blog =>{
    if (!bookmars.includes(Blogs)) {
      const newBookmark=[...bookmars,blog];
      setBookmarks(newBookmark);
    }
    
  }

  const handleMarkAsRead=time=>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime);
  }
  console.log(readingTime);
  //console.log('bookmars is '+typeof({bookmars}));
  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-6xl mx-auto'>

      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmars bookmars={bookmars} readingTime={readingTime}></Bookmars>

      </div>
    </>
  )
}

export default App
