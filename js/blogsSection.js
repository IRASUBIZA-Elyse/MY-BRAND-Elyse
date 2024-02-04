const container = document.querySelector(".blogs");
const sameBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
let blogshtml = "";
sameBlogs.forEach((blog) => {
  blogshtml += `<div class="blog">
  <a href="singleBlogPage.html">
  <div class="blogImg">
    <img src="./img/blogpic 1.png" alt="blog img" />
  </div>
  <div class="blog-title">
    <p class="blogTitle"><b>${blog.title}</b></p>
  </div>
  <div class="blog-summary">
    <p class="blogSummary">
      ${blog.content}
    </p>
  </div>
  <div class="svgForBlogs">
    <div class="feedback comment"><p class="commentNumber">${blog.comments.length}</p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
      <path d="M25.0871 8.31886L24.8907 13.835C24.8728 14.3367 24.766 14.8026 24.5699 15.2328C24.374 15.662 24.0913 16.048 23.7206 16.3913C23.5601 16.5392 23.3922 16.6708 23.2175 16.7858C23.0379 16.9039 22.8551 17.003 22.6693 17.0832C22.6595 17.0874 22.6495 17.0915 22.6395 17.095C22.4017 17.1951 22.1552 17.2679 21.9001 17.3138C21.6357 17.3613 21.3629 17.3802 21.0821 17.3703L19.4302 17.3121L19.4269 17.3119L19.4236 17.3118L19.4201 17.3117L19.4168 17.3116L19.3287 17.3085C19.3597 17.4207 19.3923 17.5321 19.4263 17.6425C19.5227 17.9547 19.6327 18.2628 19.7565 18.5655L19.7583 18.5696L19.7585 18.5694C19.8697 18.849 20.0222 19.1231 20.2149 19.3919C20.4135 19.669 20.6586 19.9454 20.9491 20.2206C21.1568 20.4171 21.1653 20.7441 20.9678 20.9507C20.8289 21.0963 20.6249 21.1434 20.4437 21.09C19.8051 20.9011 19.2043 20.672 18.64 20.4033C18.0756 20.1345 17.5452 19.8239 17.0484 19.4726L17.0473 19.4741C16.5538 19.1274 16.0941 18.7406 15.6694 18.3143C15.3096 17.953 14.9752 17.563 14.6672 17.144L14.4917 17.1378L14.4884 17.1377L14.4851 17.1375L14.4816 17.1374L14.4783 17.1373L12.8266 17.0791C12.4826 17.0669 12.1549 17.0126 11.8435 16.9171C11.5317 16.8213 11.2362 16.682 10.9578 16.5C10.7182 16.3438 10.6512 16.0239 10.808 15.7854C10.965 15.5469 11.2864 15.4804 11.5261 15.6366C11.717 15.7612 11.9242 15.8581 12.1476 15.9268C12.3698 15.995 12.6084 16.034 12.8637 16.043L14.5154 16.1012L14.5187 16.1013L14.5222 16.1015L14.5255 16.1016L14.5288 16.1017L14.9584 16.1168L14.9583 16.119C15.1157 16.1245 15.2688 16.2014 15.3659 16.3398C15.6781 16.787 16.0257 17.2026 16.4083 17.5866C16.7861 17.9657 17.1998 18.3132 17.648 18.628L17.6468 18.6295L17.6479 18.6301C18.0735 18.9312 18.532 19.2012 19.0234 19.4395C18.9349 19.2771 18.8577 19.1135 18.7921 18.9488C18.6611 18.6275 18.5417 18.2921 18.4343 17.9439C18.3321 17.6128 18.2421 17.2731 18.1643 16.9259C18.1461 16.87 18.1372 16.8099 18.1395 16.7478C18.1496 16.4617 18.3911 16.2381 18.6784 16.2482L19.4539 16.2755L19.4572 16.2756L19.4607 16.2758L19.464 16.2759L19.4673 16.276L21.1192 16.3342C21.3284 16.3416 21.5275 16.3284 21.7165 16.2944C21.8963 16.2622 22.0681 16.2118 22.2314 16.1438C22.2393 16.1401 22.2473 16.1363 22.2556 16.1325C22.3936 16.0731 22.5237 16.0031 22.646 15.9228C22.7733 15.8391 22.8965 15.7427 23.0152 15.6332C23.2835 15.3845 23.4865 15.1091 23.6245 14.8069C23.7618 14.5058 23.8369 14.1696 23.8501 13.7987L24.0465 8.28256C24.0596 7.91373 24.0086 7.57442 23.893 7.26482C23.7769 6.95404 23.5939 6.66499 23.344 6.39804L23.342 6.39604C23.0921 6.1289 22.8153 5.92707 22.5121 5.78982C22.21 5.65318 21.8735 5.57852 21.5028 5.56545L20.0137 5.51295L18.9286 5.4747C18.6411 5.46456 18.4162 5.22431 18.4263 4.93821C18.4365 4.65211 18.678 4.4283 18.9655 4.43843L20.0505 4.47669L21.5397 4.52919C22.0418 4.54689 22.5087 4.65312 22.9406 4.84846C23.3704 5.04297 23.7578 5.32363 24.1021 5.69138L24.1033 5.69238L24.1042 5.69338L24.1046 5.69378C24.4486 6.06171 24.7024 6.46577 24.8669 6.90597C25.0314 7.34791 25.1049 7.819 25.0871 8.31886ZM10.8946 1.99439L7.78845 1.88488L5.21403 1.79412C4.84338 1.78105 4.5024 1.83183 4.19127 1.94685C3.87896 2.06241 3.58848 2.24442 3.32022 2.4931L3.31821 2.49515C3.04975 2.74383 2.84693 3.01928 2.709 3.3211C2.57169 3.62179 2.49665 3.95665 2.48352 4.32548L2.28713 9.84158C2.27392 10.2127 2.32491 10.5532 2.44047 10.8634C2.55657 11.1747 2.73949 11.4638 2.9894 11.7305C3.24086 11.9973 3.51899 12.2002 3.82363 12.3382C4.12541 12.4749 4.46112 12.5503 4.83061 12.5633L7.27085 12.6493C7.55836 12.6595 7.78328 12.8995 7.7731 13.1856C7.77089 13.2478 7.75774 13.307 7.73567 13.3615C7.63352 13.7022 7.51946 14.0349 7.39393 14.358C7.26181 14.6978 7.11913 15.0241 6.96538 15.3352C6.88826 15.4948 6.79978 15.6526 6.69977 15.8084C7.20704 15.6053 7.68339 15.3682 8.12956 15.0978L8.13055 15.0973L8.12964 15.0957C8.59908 14.8133 9.03628 14.496 9.44025 14.144C9.8492 13.7882 10.2255 13.3977 10.5687 12.974C10.6752 12.8426 10.8334 12.7769 10.991 12.7822L10.9911 12.7803L13.0856 12.8541C13.4551 12.8672 13.7953 12.8156 14.1061 12.7006C14.4198 12.5843 14.7116 12.4015 14.9816 12.1531C15.2499 11.9044 15.4529 11.629 15.5908 11.3268C15.728 11.0255 15.8031 10.6895 15.8163 10.3184L16.0127 4.80226C16.0258 4.43343 15.9748 4.09412 15.8594 3.78452C15.7432 3.47374 15.5603 3.18469 15.3104 2.91774L15.3084 2.91555C15.0583 2.64859 14.7817 2.44659 14.4784 2.30933C14.1762 2.17269 13.8397 2.09802 13.469 2.08496L10.8946 1.99439ZM7.82535 0.848618L10.9315 0.958124L13.5057 1.04888C14.0078 1.06658 14.4749 1.17282 14.9068 1.36816C15.3364 1.56247 15.7237 1.84312 16.068 2.21068L16.0683 2.21089L16.0693 2.21207L16.0704 2.21308C16.4144 2.58121 16.6684 2.98527 16.8329 3.42586C16.9984 3.86841 17.0716 4.33949 17.0538 4.83896L16.8574 10.3551C16.8396 10.8568 16.7328 11.3227 16.5365 11.7531C16.3407 12.1823 16.0579 12.5681 15.6874 12.9116C15.3173 13.2522 14.9102 13.5054 14.4665 13.6697C14.0227 13.834 13.5501 13.9079 13.0485 13.8902L11.208 13.8253C10.8708 14.2214 10.5097 14.5873 10.1252 14.9222C9.67104 15.3177 9.18513 15.6712 8.66801 15.9822L8.66729 15.9806C8.14653 16.2961 7.59555 16.5685 7.01342 16.7969C6.43149 17.0252 5.81582 17.2116 5.16547 17.3551C4.98109 17.3956 4.78078 17.334 4.65234 17.1791C4.47027 16.9588 4.5018 16.6332 4.72313 16.452C5.03263 16.198 5.2966 15.9396 5.51463 15.6772C5.72599 15.4228 5.89738 15.16 6.02841 14.8889L6.02861 14.8889L6.03049 14.8849C6.17548 14.5916 6.30714 14.2921 6.42542 13.9877C6.4672 13.8799 6.50766 13.7711 6.54661 13.6612L4.79353 13.5994C4.29199 13.5817 3.82576 13.4745 3.39499 13.2796C2.96385 13.0843 2.57584 12.803 2.23111 12.4374C1.8859 12.0686 1.63122 11.664 1.46652 11.222C1.30129 10.7789 1.22789 10.3066 1.24576 9.80486L1.44215 4.28877C1.45994 3.78911 1.5667 3.32437 1.763 2.89476C1.95846 2.46725 2.2403 2.08188 2.60968 1.7391L2.61008 1.73873L2.61108 1.7378L2.61209 1.73668C2.98184 1.39429 3.38808 1.14161 3.83065 0.977868C4.27558 0.813242 4.74899 0.740161 5.25092 0.757857L7.82535 0.848618Z" fill="#A6A001"/>
     </svg>
    </div>
    <div class="feedback likes"><p class="likesNumber">${blog.likes}</p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
      <g clip-path="url(#clip0_2457_55)">
        <path d="M13.2131 2.21302C13.3246 1.65237 13.6172 1.29238 14.0174 1.10943C14.3419 0.959921 14.7221 0.94615 15.1163 1.04844C15.4587 1.13697 15.8191 1.31795 16.1635 1.57762C17.0972 2.2799 17.9711 3.60382 18.0826 5.25822C18.1165 5.76772 18.1065 6.31067 18.0587 6.88902C18.0269 7.27065 17.9771 7.67196 17.9094 8.089H21.8811L21.899 8.09097C22.544 8.11655 23.1692 8.27195 23.6967 8.54342C24.1526 8.77949 24.5368 9.10211 24.8036 9.50341C25.0783 9.91652 25.2277 10.4083 25.2058 10.9709C25.1898 11.388 25.0764 11.8404 24.8454 12.3224C24.9768 12.8653 25.0385 13.4476 24.9529 13.9591C24.8813 14.3938 24.71 14.7794 24.4035 15.0666C24.4194 15.7846 24.3218 16.3866 24.1267 16.9079C23.9257 17.443 23.6251 17.8876 23.2388 18.281C23.205 18.6253 23.1492 18.9538 23.0617 19.2607C22.9522 19.6462 22.7909 20.0003 22.5659 20.3131C21.8891 21.2573 21.3476 21.2357 20.4895 21.2003C20.3701 21.1964 20.2427 21.1905 20.0436 21.1905H12.2734C11.5747 21.1905 11.0252 21.0901 10.5235 20.8423C10.0278 20.5964 9.60376 20.2187 9.15184 19.66L9.03638 19.3334V10.3827L9.43056 10.2785C10.4319 10.0109 11.2203 9.16505 11.8335 8.15195C12.4626 7.10935 12.9045 5.88969 13.2071 4.90413V2.31334L13.2131 2.21302ZM1.54097 9.44636H7.33025C7.76823 9.44636 8.12658 9.80046 8.12658 10.2332V20.6928C8.12658 21.1255 7.76823 21.4796 7.33025 21.4796H1.54097C1.10299 21.4796 0.744644 21.1255 0.744644 20.6928V10.2332C0.744644 9.80046 1.10299 9.44636 1.54097 9.44636ZM14.4613 2.06155C14.3757 2.10089 14.3061 2.19925 14.2643 2.36843V4.97691L14.2404 5.12642C13.9198 6.1828 13.442 7.52049 12.7373 8.68703C12.0744 9.78275 11.2143 10.725 10.0955 11.1598V19.1485C10.4021 19.5085 10.6848 19.7525 10.9953 19.9059C11.3378 20.0751 11.7399 20.142 12.2734 20.142H20.0436C20.1829 20.142 20.3621 20.1498 20.5313 20.1557C21.041 20.1754 21.3615 20.1892 21.7059 19.7092V19.7072C21.8552 19.4987 21.9647 19.2528 22.0424 18.9774C22.126 18.6843 22.1757 18.3577 22.1996 18.0095L22.3629 17.6653C22.7053 17.3446 22.9661 16.9846 23.1333 16.542C23.3045 16.0856 23.3782 15.5368 23.3364 14.8483L23.3185 14.5374L23.5852 14.3742C23.7684 14.262 23.8679 14.0496 23.9097 13.7899C23.9774 13.3768 23.9058 12.8712 23.7764 12.4011L23.8182 12.0214C24.0332 11.6142 24.1367 11.2503 24.1506 10.9316C24.1626 10.6011 24.077 10.3139 23.9177 10.0759C23.7505 9.82603 23.5056 9.62144 23.209 9.468C22.8267 9.26932 22.3649 9.15522 21.8831 9.13555V9.13751H16.6433L16.7607 8.51785C16.8742 7.91786 16.9558 7.34541 17.0036 6.80246C17.0494 6.27132 17.0574 5.77756 17.0275 5.32904C16.9379 4.00709 16.2531 2.96055 15.5224 2.4117C15.2895 2.23662 15.0586 2.11663 14.8495 2.06351C14.6883 2.02023 14.5569 2.01827 14.4613 2.06155Z" fill="#A6A001"/>
      </g>
      <defs>
        <clipPath id="clip0_2457_55">
          <rect width="24.4631" height="20.4961" fill="white" transform="translate(0.744644 0.983521)"/>
        </clipPath>
      </defs>
    </svg></div>
  </div></a>
</div>`;
});
container.innerHTML = blogshtml;
