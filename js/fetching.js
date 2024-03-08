fetch("https://my-brand-be-3ift.onrender.com/api/blogs")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("There was a problem:", error));
