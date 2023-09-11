import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-100 ml-4 mt-20 rounded-xl">
      <h2 className="text-2xl text-center bg-gray-200 p-4 rounded-lg m-4">
        Time Spent On Reading: {readingTime} min
      </h2>
      <h2 className="text-3xl text-center mt-8">
        Bookmarks: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
  readingTime: PropTypes.number,
};

export default Bookmarks;
