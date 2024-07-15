
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmars from './components/Bookmarks/Bookmars'
import Header from './components/Header/Header'

function App() {

  const [bookmars, setBookmarks]=useState([]);

  const handleAddToBookmark =blog =>{
    const newBookmark=[...bookmars,blog];
    setBookmarks(newBookmark);
  }
  //console.log('bookmars is '+typeof({bookmars}));
  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-6xl mx-auto'>

      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmars bookmars={bookmars}></Bookmars>

      </div>
    </>
  )
}

export default App
