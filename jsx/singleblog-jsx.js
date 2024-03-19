const { useState, useEffect } = React;
//import "../css/style";
const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);
function SingleBlog() {
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [like, setLike] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const renderHtmlContent = (htmlContent) => {
    return React.createElement("div", {
      dangerouslySetInnerHTML: { __html: htmlContent },
    });
  };
  const getId = () => {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const blogId = searchParams.get("id");
    console.log(blogId);
    return blogId;
  };
  const getBlog = (blogId) => {
    fetch(`https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}`)
      .then((res) => res.json())
      .then((output) => {
        setBlog(output);
        setLike(output.likes);
      })
      .catch((error) => console.error("There was a problem:", error))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const getComment = (blogId) => {
    fetch(`https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const id = searchParams.get("id");
    if (id) {
      getComment(id);
      getBlog(id);
      getId(id);
    }
  }, []);
  // const currentUrl = new URL(window.location.href);
  // const searchParams = new URLSearchParams(currentUrl.search);
  // const blogId = searchParams.get("id");
  // console.log(blogId);
  // fetch(`https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}`)
  //   .then((res) => res.json())
  //   .then((output) => {
  //     setBlog(output);
  //     setLike(output.likes);
  //   })
  //   .catch((error) => console.error("There was a problem:", error))
  //   .finally(() => {
  //     setIsLoading(false);
  //   });

  // fetch(`https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}/comments`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setComments(data);
  //   });
  // }, []);

  const currentUrl = new URL(window.location.href);
  const searchParams = new URLSearchParams(currentUrl.search);
  const blogId = searchParams.get("id");
  const handleLike = () => {
    fetch(`https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.likes);
        setLike(data.likes);
      })
      .catch((error) => console.error("There was a problem:", error));
  };

  const handleCommentSubmit = async (e, blogId) => {
    e.preventDefault();
    let isValid = true;
    let email_checkSingleBlog = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation logic
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
      try {
        const currentUrl = new URL(window.location.href);
        const searchParams = new URLSearchParams(currentUrl.search);
        const blogId = searchParams.get("id");
        const response = await fetch(
          `https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}/comments`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, content: message }),
          }
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        swal("Comment created successfully").then(() => {
          location.reload();
        });
      } catch (error) {
        console.error("Error creating comment:", error);
      }
    }
  };

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
                    {like}
                  </i>
                </div>
              </div>
            </div>
            <div className="comment-section">
              <div className="commentRetrived">
                <p>
                  <span class="text_primary">Comments</span>
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
                  <div class="textarea-field field">
                    <textarea
                      className="itemMessage-blogs"
                      id="message-SingleBlog"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div id="message-errorSingleBlog" class="message-error">
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
}

ReactDOM.render(<SingleBlog />, document.querySelector(".singleBlog"));
