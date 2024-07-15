
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    //console.log(typeof(bookmark));
    return (
        <div className='bg-white font-semibold p-4 m-4 rounded-xl'>
            <h3 className='text-lg text-black'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes={
    bookmark: PropTypes.object,
}

export default Bookmark;