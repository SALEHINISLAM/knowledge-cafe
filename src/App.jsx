
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmars from './components/Bookmarks/Bookmars'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks]=useState([]);

  const handleAddToBookmark =blog =>{
    const newBookmark=[...bookmarks,blog];
    setBookmarks(newBookmark);
  }
  
  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-6xl mx-auto'>

      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmars bookmarks={bookmarks}></Bookmars>

      </div>
    </>
  )
}

export default App
