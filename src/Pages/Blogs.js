import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogsData } from "../Data/Page Data/BlogsPageData";
import ReactPaginate from "react-paginate";
import { BlogsPageSEO } from "../Data/AllPageSEOs";

const BlogPost = ({ image, title, description }) => {
  return (
    <div
      className="m-3 shadow-sm"
      style={{ width: "22rem" }}
      data-aos="zoom-in"
    >
      {BlogsPageSEO}
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "45%" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link
          to={`/blogs/${title.split(" ").join("-").toLowerCase()}`}
          className="btn btn-warning mt-auto"
        >
          Read More <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 9;
  const offset = currentPage * blogsPerPage;
  const currentBlogs = BlogsData.slice(offset, offset + blogsPerPage);

  const pageCount = Math.ceil(BlogsData.length / blogsPerPage);

  // Handle page click
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="blogs-main-cotainer-img d-flex align-items-center justify-content-center flex-column">
        <h3 className="text-center text-warning">Future Technologies Blogs</h3>
        <p className="text-center text-white">
          " Drive your startup's growth by publishing a blog that covers the
          best development and design techniques. "
        </p>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-info">
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              Blogs
            </li>
          </ol>
        </nav>
      </div>

      {/* Blogs Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="mb-4 section-heading">Our Blogs</h2>
              <p className="">
                Keep up with the latest trends, ideas, and insights from our
                experienced team.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          {currentBlogs.map((post, index) => (
            <BlogPost
              key={index}
              image={post.image}
              title={post.title}
              description={post.smallDescription}
            />
          ))}
        </div>
        {/* React Paginate component */}
        <div className="pagination-controls d-flex justify-content-center mt-4">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </section>
    </div>
  );
};

export default Blogs;
