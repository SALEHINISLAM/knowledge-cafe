import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmars = ({bookmars}) => {
    //console.log(typeof({bookmars}));
    return (
        <div className='w-1/3'>
            <h2 className='text-3xl'>Bookmarked Blog: {bookmars.length} </h2>
            {
                bookmars.map((bookmark,index)=><Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmars.propTypes = {
    bookmars: PropTypes.array,
}

export default Bookmars;