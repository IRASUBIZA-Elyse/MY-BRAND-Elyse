const { Provider, useDispatch, useSelector } = ReactRedux;
const { useState, useEffect } = React;
const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);
const initialState = {
  blog: {},
  isLoading: true,
  comments: [],
  like: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BLOG":
      return { ...state, blog: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_COMMENTS":
      return { ...state, comments: action.payload };
    case "SET_LIKE":
      return { ...state, like: action.payload };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

function SingleBlog() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const renderHtmlContent = (htmlContent) => {
    return React.createElement("div", {
      dangerouslySetInnerHTML: { __html: htmlContent },
    });
  };
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);
  const comments = useSelector((state) => state.comments);
  const like = useSelector((state) => state.like);
  const isLoading = useSelector((state) => state.isLoading);

  const getBlog = (blogId) => {
    fetch(`https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}`)
      .then((res) => res.json())
      .then((output) => {
        dispatch({ type: "SET_BLOG", payload: output });
      })
      .catch((error) => console.error("There was a problem:", error))
      .finally(() => {
        dispatch({ type: "SET_IS_LOADING", payload: false });
      });
  };
  const getComments = (blogId) => {
    fetch(`https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}/comments`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_COMMENTS", payload: data });
      })
      .catch((error) => console.error("There was a problem:", error));
  };

  const likeBlog = (blogId) => {
    fetch(`https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_LIKE", payload: data.likes });
      })
      .catch((error) => console.error("There was a problem:", error));
  };
  const handleLike = () => {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const blogId = searchParams.get("id");
    dispatch(likeBlog(blogId));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const blogId = searchParams.get("id");

    // logic

    if (isValid) {
      const newComment = {
        name: formData.name,
        email: formData.email,
        content: formData.message,
      };
      const response = await fetch(
        `https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const responseData = await response.json();
      swal("Success", "Comment created successfully", "success").then(() => {
        location.reload();
      });
    } else {
    }
  };

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const id = searchParams.get("id");
    if (id) {
      getBlog(id);
      getComments(id);
    }
  }, []);

  return (
    <>
      <div className="singleBlog"></div>
      {isLoading ? ( // Conditional rendering of loading indicator
        <Loader />
      ) : (
        <div>
          <div className="titleSingleBlog">
            <div className="BLOGS">
              <span className="text_primary">{blog.title}</span>
            </div>
          </div>
          <div className="single-blog">
            <div className="singleBlog-image">
              <img src={blog.image} alt="blog image" />
            </div>
            <div className="column2">
              <p className="blog-text">{renderHtmlContent(blog.content)}</p>
              <div className="authorDate">
                <p>
                  Date: <span className="date">{blog.date}</span>
                </p>
                <p>
                  Author: <span className="author">Elyse IRASUBIZA</span>
                </p>
                <br />
                <br />
                <div className="feedback likess">
                  <p className="likeAll"></p>
                  <i
                    className="fa-regular fa-thumbs-up"
                    id="singleLike"
                    onClick={handleLike}
                  >
                    {/* {blog.likes} */}
                    {like}
                  </i>
                </div>
              </div>
            </div>
            <div className="comment-section">
              <div className="commentRetrived">
                <p>
                  <span class="text_primary">Comments</span>{" "}
                </p>
                <div className="recent-comment">
                  <div className="CMT">
                    {comments.length === 0 ? (
                      <p>No comments yet</p>
                    ) : (
                      comments.map((comment) => (
                        <div key={comment._id}>
                          <p>{comment.name}</p>
                          <p>{comment.email}</p>
                          <p className="border">{comment.content}</p>
                          <br />
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <div className="leaveA-bottom">
                <p>
                  <span className="text_primary">leave a comment:</span>
                </p>
                <form className="form-SingleBlog" onSubmit={handleSubmit}>
                  <div className="input-blogs">
                    <div className="input-field field">
                      <input
                        type="name"
                        className="itemBlog"
                        id="name-SingleBlog"
                        name="name"
                        placeholder="name"
                        onChange={handleChange}
                      />
                      <div id="name-errorSingleBlog" className="error">
                        {/* {errors.name} */}
                      </div>
                    </div>
                    <div className="input-field field">
                      <input
                        type="email"
                        id="email-SingleBlog"
                        className="itemBlog"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                      />
                      <div id="email-errorSingleBlog" className="error">
                        {/* {errors.email} */}
                      </div>
                    </div>
                  </div>
                  <div className="textarea-field field">
                    <textarea
                      className="itemMessage-blogs"
                      id="message-SingleBlog"
                      name="message"
                      onChange={handleChange}
                    ></textarea>
                    <div id="message-errorSingleBlog" className="message-error">
                      {/* {errors.message} */}
                    </div>
                  </div>
                  <button className="submitbtn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <SingleBlog />
  </Provider>,
  document.querySelector(".singleBlog")
);
document.getElementById("menu-button").addEventListener("click", function () {
  var navList = document.querySelector("#navbar ul");
  navList.style.display = navList.style.display === "block" ? "none" : "block";
  navList.style.width = navList.style.width === "100%" ? "0" : "100%";
});
