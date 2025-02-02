import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

import PropTypes from 'prop-types';
const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res=>{
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`)
            }
            return res.json();
        })
        .then(data=>setBlogs(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div className='md:w-2/3 mt-8'>
            {/* <h1 className="text-4xl">
                Blogs: {blogs.length}
            </h1> */}
            {
                blogs.map(blog => <Blog 
                    blog={blog} 
                    key={blog.id}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}

export default Blogs;