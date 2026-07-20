import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BlogsData } from "../Data/Page Data/BlogsPageData";
import { Helmet } from "react-helmet";

function BlogDetail() {
  const [blog, setBlog] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  let blogTitle = blog.length !== 0 ? blog[0].title : "";

  const getBlog = async () => {
    const titleParam = params.title.split("-").join(" ");
    const data = await BlogsData.filter((each) => {
      return each.title.toLocaleLowerCase() === titleParam;
    });
    if (data.length === 0) {
      return navigate("/blogs");
    }
    setBlog(data);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getBlog();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Helmet>
        <title>
          {blogTitle} | NexGen Web Designs Blog | Hyderabad & Andhra Pradesh
        </title>
        <meta
          name="description"
          content={`Read ${blogTitle} on NexGen Web Designs’ blog. Discover expert insights on web design, development, SEO, and digital marketing tailored for businesses in Hyderabad and Andhra Pradesh. Stay updated with the latest trends and tips to grow your online presence.`}
        />
        <meta
          name="keywords"
          content="web design tips Hyderabad, web development insights Andhra Pradesh, SEO strategies Hyderabad, digital marketing blog AP, responsive design blog, website optimization tips, NexGen Web Designs blog"
        />
      </Helmet>

      {blog.length !== 0 && (
        <div>
          <div className="blog-detail-main-img d-flex align-items-center justify-content-center flex-column gap-3 p-4">
            <h3
              className="text-center text-warning"
              style={{ marginTop: "4rem" }}
            >
              Blog - {blog[0].title}
            </h3>
            <p className="text-center text-white">{blog[0].smallDescription}</p>
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
                  <Link to={"/blogs"} className="text-info">
                    Blogs
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  Blog Post
                </li>
              </ol>
            </nav>
          </div>

          <div className="container my-5">
            <div className="text-center">
              {blog[0].image && (
                <img
                  src={blog[0].image}
                  alt={blog[0].sectionTitle}
                  className="img-fluid my-3"
                />
              )}
            </div>
            <div className="">
              {blog[0].content?.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-5">
                  <h4 className="">{section.sectionTitle}</h4>
                  <div className="text-center">
                    {section.image && (
                      <img
                        src={section.image}
                        alt={section.sectionTitle}
                        className="img-fluid my-3"
                      />
                    )}
                  </div>
                  <p>{section.text}</p>
                  {section.subSections?.map((subSection, subIndex) => (
                    <div key={subIndex} className="mb-3">
                      {subSection.image && (
                        <img
                          src={subSection.image}
                          alt={subSection.subTitle}
                          className="img-fluid my-2"
                        />
                      )}
                      <h5 className="sub-section-title">
                        {subSection.subTitle}
                      </h5>
                      <p>{subSection.text}</p>
                    </div>
                  ))}
                  <p>
                    Keywords :{" "}
                    {section.seoKeywords &&
                      section.seoKeywords.map((each, index) => {
                        return (
                          <span key={index} style={{ fontWeight: "600" }}>
                            {each},{" "}
                          </span>
                        );
                      })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogDetail;
