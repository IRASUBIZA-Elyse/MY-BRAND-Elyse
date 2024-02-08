window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
    document.querySelector(".footer2").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
    document.querySelector(".footer2").style.opacity = 0.9;
  }
});

// for the navbar menu
document.getElementById("menu-button").addEventListener("click", function () {
  var navList = document.querySelector("#navbar ul");
  navList.style.display = navList.style.display === "block" ? "none" : "block";
  navList.style.width = navList.style.width === "100%" ? "0" : "100%";
});

// displaying
const currentUrl = new URL(window.location.href);
const searchParams = new URLSearchParams(currentUrl.search);
const blogId = searchParams.get("id");
const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
const choosenBlog = allBlogs.find((blg) => blg.id == blogId);
console.log(choosenBlog);
const single = document.querySelector(".singleBlog");
single.innerHTML = `<h2 class="BLOGS">
<span class="text_primary">${choosenBlog.title}</span>
</h2>
<div class="single-blog">
  <div class="singleBlog-image">
    <img src="${choosenBlog.img}" alt="blog image" />
  </div>
  <div class="column2">
    <p class="blog-text">
      ${choosenBlog.content}
    </p>
    <div class="authorDate">
      <p>Date: <span class="date">${choosenBlog.date}</span></p>
      <p>Author: <span class="author">${choosenBlog.author}</span></p>
      <br><br>
      <div class="feedback likes"><p>34</p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
        <g clip-path="url(#clip0_2457_55)">
          <path d="M13.2131 2.21302C13.3246 1.65237 13.6172 1.29238 14.0174 1.10943C14.3419 0.959921 14.7221 0.94615 15.1163 1.04844C15.4587 1.13697 15.8191 1.31795 16.1635 1.57762C17.0972 2.2799 17.9711 3.60382 18.0826 5.25822C18.1165 5.76772 18.1065 6.31067 18.0587 6.88902C18.0269 7.27065 17.9771 7.67196 17.9094 8.089H21.8811L21.899 8.09097C22.544 8.11655 23.1692 8.27195 23.6967 8.54342C24.1526 8.77949 24.5368 9.10211 24.8036 9.50341C25.0783 9.91652 25.2277 10.4083 25.2058 10.9709C25.1898 11.388 25.0764 11.8404 24.8454 12.3224C24.9768 12.8653 25.0385 13.4476 24.9529 13.9591C24.8813 14.3938 24.71 14.7794 24.4035 15.0666C24.4194 15.7846 24.3218 16.3866 24.1267 16.9079C23.9257 17.443 23.6251 17.8876 23.2388 18.281C23.205 18.6253 23.1492 18.9538 23.0617 19.2607C22.9522 19.6462 22.7909 20.0003 22.5659 20.3131C21.8891 21.2573 21.3476 21.2357 20.4895 21.2003C20.3701 21.1964 20.2427 21.1905 20.0436 21.1905H12.2734C11.5747 21.1905 11.0252 21.0901 10.5235 20.8423C10.0278 20.5964 9.60376 20.2187 9.15184 19.66L9.03638 19.3334V10.3827L9.43056 10.2785C10.4319 10.0109 11.2203 9.16505 11.8335 8.15195C12.4626 7.10935 12.9045 5.88969 13.2071 4.90413V2.31334L13.2131 2.21302ZM1.54097 9.44636H7.33025C7.76823 9.44636 8.12658 9.80046 8.12658 10.2332V20.6928C8.12658 21.1255 7.76823 21.4796 7.33025 21.4796H1.54097C1.10299 21.4796 0.744644 21.1255 0.744644 20.6928V10.2332C0.744644 9.80046 1.10299 9.44636 1.54097 9.44636ZM14.4613 2.06155C14.3757 2.10089 14.3061 2.19925 14.2643 2.36843V4.97691L14.2404 5.12642C13.9198 6.1828 13.442 7.52049 12.7373 8.68703C12.0744 9.78275 11.2143 10.725 10.0955 11.1598V19.1485C10.4021 19.5085 10.6848 19.7525 10.9953 19.9059C11.3378 20.0751 11.7399 20.142 12.2734 20.142H20.0436C20.1829 20.142 20.3621 20.1498 20.5313 20.1557C21.041 20.1754 21.3615 20.1892 21.7059 19.7092V19.7072C21.8552 19.4987 21.9647 19.2528 22.0424 18.9774C22.126 18.6843 22.1757 18.3577 22.1996 18.0095L22.3629 17.6653C22.7053 17.3446 22.9661 16.9846 23.1333 16.542C23.3045 16.0856 23.3782 15.5368 23.3364 14.8483L23.3185 14.5374L23.5852 14.3742C23.7684 14.262 23.8679 14.0496 23.9097 13.7899C23.9774 13.3768 23.9058 12.8712 23.7764 12.4011L23.8182 12.0214C24.0332 11.6142 24.1367 11.2503 24.1506 10.9316C24.1626 10.6011 24.077 10.3139 23.9177 10.0759C23.7505 9.82603 23.5056 9.62144 23.209 9.468C22.8267 9.26932 22.3649 9.15522 21.8831 9.13555V9.13751H16.6433L16.7607 8.51785C16.8742 7.91786 16.9558 7.34541 17.0036 6.80246C17.0494 6.27132 17.0574 5.77756 17.0275 5.32904C16.9379 4.00709 16.2531 2.96055 15.5224 2.4117C15.2895 2.23662 15.0586 2.11663 14.8495 2.06351C14.6883 2.02023 14.5569 2.01827 14.4613 2.06155Z" fill="#A6A001"/>
        </g>
        <defs>
          <clipPath id="clip0_2457_55">
            <rect width="24.4631" height="20.4961" fill="white" transform="translate(0.744644 0.983521)"/>
          </clipPath>
        </defs>
      </svg></div>
    </div>
  </div>
  <div class="comment-section">
    <p><span class="text_primary">Recent comments</span></p>

    <div class="recent-comment">
      <p>Syed Zubaear</p>
      <br />
      <p><span class="text_primary">11/jan/2023</span></p>
      <p>
        In the ever-evolving landscape of web design, responsiveness has
        become a key consideration. As a beginner, you may have heard of
        media queries as the go-to solution for achieving
        responsiveness. However, there's an emerging technique that
        offers a more streamlined approach: clamp.
      </p>
    </div>
    <div class="recent-comment">
      <p>Syed Zubaear</p>
      <br />
      <p><span class="text_primary">11/jan/2023</span></p>
      <p>
        In the ever-evolving landscape of web design, responsiveness has
        become a key consideration. As a beginner, you may have heard of
        media queries as the go-to solution for achieving
        responsiveness. However, there's an emerging technique that
        offers a more streamlined approach: clamp.
      </p>
    </div>
    <div class="leaveA-comment">
      <p><span class="text_primary">leave a comment:</span></p>
      <form action="#" id="form-SingleBlog">
        <div class="input-blogs">
          <div class="input-field field">
            <input
              type="text"
              name=""
              id="name-SingleBlog"
              class="itemBlog"
              placeholder="name"
            />
            <div class="error" id="name-errorSingleBlog"></div>
          </div>
          <div class="input-field field">
            <input
              type="email"
              name=""
              id="email-SingleBlog"
              class="itemBlog"
              placeholder="Email"
            />
            <div class="error" id="email-errorSingleBlog"></div>
          </div>
        </div>
        <div class="textarea-field field">
          <textarea
            name=""
            id="message-SingleBlog"
            cols="30"
            rows="10"
            placeholder="Your Message"
            class="itemMessage-blogs"
          
          ></textarea>
          <div class="message-error" id="message-errorSingleBlog"></div>
        </div>
        <button class="submitbtn" type="submit">Submitt</button>
      </form>
    </div>
  </div>
</div>`;

const formSingleBlog = document.querySelector("#form-SingleBlog");
const nameSingleBlog = document.querySelector("#name-SingleBlog");
const emailSingleBlog = document.querySelector("#email-SingleBlog");
const messageSingleBlog = document.querySelector("#message-SingleBlog");

const nameErrorSingleBlog = document.querySelector("#name-errorSingleBlog");
const emailErrorSingleBlog = document.querySelector("#email-errorSingleBlog");
const messageErrorSingleBlog = document.querySelector(
  "#message-errorSingleBlog"
);
if (nameSingleBlog) {
  nameSingleBlog.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (nameSingleBlog.value === "") {
      nameErrorSingleBlog.innerHTML = "Please enter your name";
      isValid = false;
    } else if (nameSingleBlog.value.length < 3) {
      nameErrorSingleBlog.innerHTML = "enter atleast 3 characters";
    } else {
      nameErrorSingleBlog.innerHTML = "";
    }
  });
}
if (emailSingleBlog) {
  emailSingleBlog.addEventListener("keyup", (e) => {
    let email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailSingleBlog.value === "" || emailSingleBlog.value == null) {
      isValid = false;
      emailErrorSingleBlog.innerHTML = "";
    } else if (!emailSingleBlog.value.match(email_check)) {
      isValid = false;
      emailErrorSingleBlog.innerHTML = "valid email is required";
    } else {
      emailErrorSingleBlog.innerHTML = "";
    }
  });
}
if (formSingleBlog) {
  formSingleBlog.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e);
    e.stopPropagation();
    let isValid = true;
    let email_checkSingleBlog = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameSingleBlog.value === "") {
      e.preventDefault();
      nameErrorSingleBlog.innerHTML = "Please enter your name";
      console.log("Please enter your name");
      isValid = false;
    } else {
      nameErrorSingleBlog.innerHTML = "";
    }

    if (emailSingleBlog.value.trim() === "") {
      e.preventDefault();
      emailErrorSingleBlog.textContent = "Email is required";
      isValid = false;
    } else if (!emailSingleBlog.value.match(email_checkSingleBlog)) {
      e.preventDefault();
      emailErrorSingleBlog.textContent = "Enter a valid email";
      isValid = false;
    } else {
      emailErrorSingleBlog.textContent = "";
    }

    if (messageSingleBlog.value === "" || messageSingleBlog.value == null) {
      e.preventDefault();
      messageErrorSingleBlog.innerHTML = "Enter your message";
      isValid = false;
    } else if (messageSingleBlog.value.length < 10) {
      e.preventDefault();
      messageErrorSingleBlog.innerHTML =
        "Your message should be at least 10 characters";
      isValid = false;
    } else {
      messageErrorSingleBlog.innerHTML = "";
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
}
