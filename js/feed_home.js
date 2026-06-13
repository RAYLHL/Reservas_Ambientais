document.querySelectorAll(".post-acoes").forEach(post => {

    const like = post.querySelector(".btn-like img");
    const dislike = post.querySelector(".btn-dislike img");

    like.parentElement.addEventListener("click", () => {

        like.src = "img/icon-like-curtido.webp";
        dislike.src = "img/icon-dislike.webp";

    });

    dislike.parentElement.addEventListener("click", () => {

        dislike.src = "img/icon-dislike-curtido.webp";
        like.src = "img/icon-like.webp";

    });

});