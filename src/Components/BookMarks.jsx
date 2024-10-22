

import PropTypes from 'prop-types'
import BookMark from './BookMark'

const BookMarks = ({bookMarks,readingTime}) => {
  return (
    <div className="md:1/3 mb-3 bg-gray-300">
        <h3 className='text-4xl'>Reading Time : {readingTime}</h3>
            <h2 className="text-3xl mt-3 text-center ">Book Marks:{bookMarks.length} </h2>
            {
                bookMarks.map((bookMark) => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }

        </div>
  )
}

BookMarks.propTypes = {
   bookMarks:PropTypes.array,
   readingTime: PropTypes.number
}

export default BookMarks
