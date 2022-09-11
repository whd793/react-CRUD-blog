const BlogList = ({ blogs, title, handleDelete, handleAdd }) => {
  //instead of saving it as a variable below, use destructuring!!
  // const blogs = props.blogs;
  // console.log(props.blogs);

  return (
    <div className="blog-list">
      <h2> {title} </h2>

      {blogs.map((blog, index) => (
        //MUST BE ENCLOSED/IN BETWEEN THE DIV TAG OR IT WILL NOT RENDER!
        <div className="blog-preview" key={index}>
          <h2> {blog.title}</h2>
          <p> {blog.body}</p>
          <p> written by {blog.author}</p>
          <br />
          <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete
          </button>

          <button
            onClick={() => {
              handleAdd();
            }}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
