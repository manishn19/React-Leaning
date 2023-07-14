import React, { useState } from "react";
import Video from "../components/Video";

const videosArr = [
  {
    id: 1,
    title: "The Great Gatsby",
    url: "https://example.com/video",
    author: "F. Scott Fitzgerald",
    like: false,
  },
  {
    id: 2,
    title: "The Catcher in the Rye",
    url: "https://example.com/video",
    author: ". D. Salinger.",
    like: false,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    url: "https://example.com/video",
    author: "Harper Lee",
    like: true,
  },
  {
    id: 4,
    title: "The Lord of the Rings",
    url: "https://example.com/video",
    author: "John Ronald Reuel Tolkien",
    like: false,
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    url: "https://example.com/video",
    author: "Jane Austen",
    like: false,
  },
  {
    id: 6,
    title: "The Little Prince",
    url: "https://example.com/video",
    author: "Antoine de Saint-Exupéry",
    like: false,
  },
  {
    id: 7,
    title: "Harry Potter",
    url: "https://example.com/video",
    author: "J. K. Rowling",
    like: false,
  },
  {
    id: 8,
    title: "Brave New World",
    url: "https://example.com/video",
    author: "Aldous Huxley",
    like: false,
  },
  {
    id: 9,
    title: "Lord of the Flies",
    url: "https://example.com/video",
    author: "William Golding",
    like: false,
  },
];
const emptyHeading = "";

const VideoList = () => {
  const [videos, setVideos] = useState(videosArr);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 4;
  let heading = emptyHeading;

  const handleUpdateLike = (like) => {
    setVideos([...videos], like);
  };

  //handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the starting and ending indexes of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // search in table
  const filterData = videos.filter((item) => {
    const { title, author } = item;
    const searchQuery = search.toLowerCase();
    return (
        author.toLowerCase().includes(searchQuery) || 
        title.toLowerCase().includes(searchQuery),
    );
  });
  const count = filterData.length;
  const currentVideos = filterData.slice(startIndex, endIndex);
  // calculate the total number of pages
  const totalPages = Math.ceil(filterData.length / itemsPerPage);

  if (count > 0) {
    const noun = count > 1 ? "Books" : "Book";
    heading = count + " " + noun;
  }
  return (
    <div className="container">
      <div className="page-content">
        <label htmlFor="search">
          <input
            id="search"
            type="text"
            placeholder="Search.."
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
          />
        </label>
        <h2 className="heading">{heading}</h2>
        {currentVideos.map((video, index) => (
          <Video key={index} video={video} updateLike={handleUpdateLike} />
        ))}
        {currentVideos.length == 0 && <p>No records found!</p>}
        {count > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{currentPage}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default VideoList;
