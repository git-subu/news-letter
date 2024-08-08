const NewsItem = ({ title, desc, src, url, author, source }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <h6 className="card-text mb-2">Source: {source}</h6>
      <img
        style={{ height: "200px", width: "360px" }}
        src={src}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {desc
            ? desc.slice(0, 90)
            : "Desc: Currently we are facing network issues. Please try again later"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
        <h5 className="card-text">Author: {author}</h5>
      </div>
    </div>
  );
};

export default NewsItem;
