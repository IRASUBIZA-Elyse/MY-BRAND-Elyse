const { useState, useEffect } = React;
const { createStore, applyMiddleware } = Redux;
const { Provider, useDispatch, useSelector } = ReactRedux;
const thunk = ReduxThunk.default;

//Action types
const FETCH_BLOG = "FETCH_BLOG";
const FETCH_COMMENTS = "FETCH_COMMENTS";
const LIKE_BLOG = "LIKE_BLOG";
const ADD_COMMENT = "ADD_COMMENT";

const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);

//Action creators
const fetchBlog = (blogId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_BLOG });
    try {
      const response = await fetch(
        `https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}`
      );
      const data = await response.json();
      dispatch({ type: FETCH_BLOG, payload: data });
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };
};

const fetchComments = (blogId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_COMMENTS });
    try {
      const response = await fetch(
        `https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}/comments`
      );
      const data = await response.json();
      dispatch({ type: FETCH_COMMENTS, payload: data });
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
};

const likeBlog = (blogId) => {
  return async (dispatch) => {
    dispatch({ type: LIKE_BLOG });
    try {
      const response = await fetch(
        `https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      dispatch({ type: LIKE_BLOG, payload: data.likes });
    } catch (error) {
      console.error("Error liking blog:", error);
    }
  };
};

const addComment = (blogId, name, email, content) => {
  return async (dispatch) => {
    dispatch({ type: ADD_COMMENT });
    try {
      const response = await fetch(
        `https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, content }),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      dispatch({ type: ADD_COMMENT });
      swal("Comment created successfully").then(() => {
        location.reload();
      });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
};

const initialState = {
  blog: {},
  comments: [],
  like: "",
  isLoading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG:
      return { ...state, blog: action.payload, isLoading: false };
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload, isLoading: false };
    case LIKE_BLOG:
      return { ...state, like: action.payload, isLoading: false };
    case ADD_COMMENT:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

//Redux store
const store = createStore(reducer, applyMiddleware(thunk));

//React component
const SingleBlog = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);
  const comments = useSelector((state) => state.comments);
  const like = useSelector((state) => state.like);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const blogId = searchParams.get("id");
    if (blogId) {
      dispatch(fetchBlog(blogId));
      dispatch(fetchComments(blogId));
    }
  }, [dispatch]);

  const handleLike = () => {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const blogId = searchParams.get("id");
    dispatch(likeBlog(blogId));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const blogId = searchParams.get("id");
    e.preventDefault();
    let isValid = true;
    let email_checkSingleBlog = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }
    if (email === "") {
      setEmailError("Email is required");
    } else if (!email.match(email_checkSingleBlog)) {
      setEmailError("Enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (message === "" || message == null) {
      setMessageError("Enter your message");
      isValid = false;
    } else if (message.length < 3) {
      setMessageError("Please enter a message of atleast 3 characters");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      dispatch(addComment(blogId, name, email, message));
    }
  };

  return (
    <>
      <div className="singleBlog"></div>
      {isLoading ? (
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
                        <div key={comment.id}>
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
                <form
                  className="form-SingleBlog"
                  onSubmit={handleCommentSubmit}
                >
                  <div className="input-blogs">
                    <div className="input-field field">
                      <input
                        type="text"
                        className="itemBlog"
                        id="name-SingleBlog"
                        value={name}
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div id="name-errorSingleBlog" className="error">
                        {nameError}
                      </div>
                    </div>
                    <div className="input-field field">
                      <input
                        type="email"
                        id="email-SingleBlog"
                        className="itemBlog"
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div id="email-errorSingleBlog" className="error">
                        {emailError}
                      </div>
                    </div>
                  </div>
                  <div className="textarea-field field">
                    <textarea
                      className="itemMessage-blogs"
                      id="message-SingleBlog"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div id="message-errorSingleBlog" className="message-error">
                      {messageError}
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
};

//Render the app
ReactDOM.render(
  <Provider store={store}>
    <SingleBlog />
  </Provider>,
  document.querySelector(".singleBlog")
);
