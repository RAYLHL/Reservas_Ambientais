document.querySelectorAll(".post-acoes").forEach(post => {

    const like = post.querySelector(".btn-like img");
    const dislike = post.querySelector(".btn-dislike img");

    like.parentElement.addEventListener("click", () => {

        like.src = "img/icon-like-curtido.png";
        dislike.src = "img/icon-dislike.png";

    });

    dislike.parentElement.addEventListener("click", () => {

        dislike.src = "img/icon-dislike-curtido.png";
        like.src = "img/icon-like.png";

    });

});