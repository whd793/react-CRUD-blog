import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import AddBlogForm from "./AddBlogForm";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Blah Blah!", body: "lorem ipsum...", author: "yoshi", id: 3 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 4
    }
  ]);

  useEffect(() => {
    // Update the document title using the browser API
    // fetch();
    console.log("Re-rendered!!");
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(blogs);
    //     setBlogs(data);
    //   });
  }, []);

  const [formDescription, setFormDescription] = useState("");

  const handleDelete = (id) => {
    console.log(id);
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const handleAdd = () => {
    const addnewBlogs = [
      ...blogs,
      {
        title: "new",
        body: "new body",
        author: "new author",
        id: blogs.length + 1
      }
    ];
    setBlogs(addnewBlogs);
  };

  const handleChange = (e) => {
    console.log(formDescription);
    setFormDescription(e.target.value);
  };

  const handleSubmit = (descr) => {
    if (descr !== "") {
      console.log("submitted");
      const addBlog = [
        ...blogs,
        {
          title: descr,
          body: descr,
          author: "new author",
          id: blogs.length + 1
        }
      ];
      setBlogs(addBlog);
      setFormDescription("");
      console.log(formDescription);
    } else {
      console.log("not submitted bitch!!");
    }
  };

  return (
    <div className="home">
      {/* PUT THIS IN THE BLOGLIST COMPONENT... PASS IS AS A PROP */}
      {/* {blogs.map((blog) => (
          //MUST BE ENCLOSED/IN BETWEEN THE DIV TAG OR IT WILL NOT RENDER!
          <div className="blog-preview" key={blog.id}> 
            <h2> { blog.title }</h2>
            <p> { blog.body }</p>
            <p> written by { blog.author }</p>
          </div>
        ))} */}

      <AddBlogForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formDescription={formDescription}
      />
      <br />
      <br />
      <BlogList
        blogs={blogs}
        title="Newsfeed"
        handleDelete={handleDelete}
        handleAdd={handleAdd}
      />
      <BlogList
        blogs={blogs.filter(
          (blog) => blog.author !== "yoshi"
          // console.log()
        )}
        title="My posts"
        handleDelete={handleDelete}
        handleAdd={handleAdd}
      />
    </div>
  );
};

export default Home;
