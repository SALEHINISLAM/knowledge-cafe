import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmars = ({bookmars, readingTime}) => {
    //console.log(typeof({bookmars}));
    return (
        <div className='w-1/3 m-3'>
            <div className="bg-[#6047ec2d] text-2xl font-bold w-full rounded-xl border-[#6047EC] border-2">
                <h2 className='text-[#6047EC] text-center p-2'>Spent time on Read: 
                    <h1 className='text-3xl text-center'>{parseFloat(readingTime/60).toFixed(0)} min {parseInt(readingTime%60)} sec</h1> 
                </h2>
            </div>
            <div className="bg-[#11111117] p-3 rounded-xl mt-5">
                <h2 className='text-2xl font-bold m-3'>Bookmarked Blog: {bookmars.length} </h2>
                {
                    bookmars.map((bookmark,index)=><Bookmark key={index} bookmark={bookmark}></Bookmark>)
                }
            </div>
            
        </div>
    );
};

Bookmars.propTypes = {
    bookmars: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmars;