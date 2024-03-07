const imagePath = document.getElementById("image") as HTMLInputElement;
const contentEl = document.getElementById("editors") as HTMLTextAreaElement;
const titleEl = document.getElementById("title") as HTMLInputElement;
const formEl = document.querySelector("form") as HTMLFormElement;

formEl.addEventListener("submit", e => {
    e.preventDefault();
    let url=new URLSearchParams(window.location.search);
    if(!url.get('id')){
        createBlog();
    }
    
});

async function createBlog() {
    const content = contentEl.value;
    const title = titleEl.value;
    const token = localStorage.getItem("token");

    if (!imagePath.files || !imagePath.files[0]) {
        console.error("No image selected");
        return;
    }

    const formData = new FormData();
    formData.append("image", imagePath.files[0]);
    formData.append("title", title);
    formData.append("content", content);

    const response = await fetch("api/blogs", {
        method: "POST",
        headers: {
              Authorization: "Bearer " + token
        },
        body: formData
    });
    if (response.status === 401) {
        alert(response.statusText);
        return;
    }
    const data = await response.json();
    alert(data.message);
}