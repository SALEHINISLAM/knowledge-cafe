import { BsBookmarks } from "react-icons/bs";

import PropTypes from 'prop-types';

const Blog = ({blog , handleAddToBookmark}) => {
    const {title,cover,author,img,reading_time,posted_date,hashtags}=blog;
    return (
        <div className='text-[#111111] mb-16'>
            <img src={cover} alt={`Cover picture title ${title}`} className='w-full mb-8' />
            <div className=" flex justify-between items-center">
                <div className="flex">
                    <img src={img} alt="" className='w-14 h-14 rounded-full'/>
                    <div className="ml-6">
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <h3 className='font-semibold text-base text-[#111111] opacity-60'>{posted_date}</h3>
                    </div>
                </div>
                <div className="items-center flex">
                    <span>{reading_time/60} min read</span>
                    <button 
                        className="ml-2 text-xl"
                        onClick={handleAddToBookmark}
                    ><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">
                {title}
            </h2>
            <p>
                {
                    hashtags.map((hash, index) =><span key={index}>{hash}</span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
}

export default Blog;