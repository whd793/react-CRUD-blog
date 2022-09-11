const AddBlogForm = ({ handleChange, handleSubmit, formDescription }) => {
  //instead of saving it as a variable below, use destructuring!!
  // const blogs = props.blogs;
  // console.log(props.blogs);

  return (
    <div>
      <label>
        Enter post description: <br />
      </label>
      <br />
      <textarea
        type="text"
        value={formDescription}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button
        className="submitBtn"
        onClick={() => handleSubmit(formDescription)}
      >
        Submit{" "}
      </button>
    </div>
  );
};

export default AddBlogForm;
