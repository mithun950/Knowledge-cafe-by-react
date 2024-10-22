import { FaBookmark } from 'react-icons/fa';
import PropTypes from "prop-types";
const Blog = ({blog,handleBookMarks,handleMarkRead}) => {
    const {id,title,cover,reading_time,author_image,author,posted_date , hashtags} = blog;
    return (
        <div className="mb-20 ">
            <img className="w-full" src={cover} alt={`Cover picture of the title`} />
            <div className="flex justify-between mt-4 items-center space-y-5">
            <div className="flex gap-3 " >
             <img className="rounded-full w-12 h-12 object-cover " src={author_image} alt="" />
             <div>
                <h3 className="text-2xl">{author}</h3>
                <p>{posted_date}</p>
             </div>
            </div>
           
            <div>
            <span>{reading_time} min read</span>
    
            <button className='ml-2' onClick={() => handleBookMarks(blog)}><FaBookmark></FaBookmark></button>
            
            </div>
            </div>
            <h2 className="text-4xl mt-3">{title}</h2>
            <span className=" mt-3">{hashtags}</span>
            <br />
            <button className='mt-5 text-purple-600 underline' onClick={() => handleMarkRead(reading_time,id)}>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func
}
export default Blog;