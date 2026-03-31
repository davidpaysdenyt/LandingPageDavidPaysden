const preview = document.querySelector(".video-preview");
const modal = document.getElementById("modal");
const player = document.getElementById("player");
const closeBtn = document.getElementById("close");

const video = preview.querySelector("video");


// 🎬 OPEN MODAL
preview.addEventListener("click", () => {
    const url = preview.dataset.video;

    // build Vimeo/iframe URL safely
    player.src = url + "?autoplay=1&muted=1";

    // show modal (IMPORTANT FIX)
    modal.classList.add("active");
});


// ❌ CLOSE MODAL
function closeModal() {
    modal.classList.remove("active");
    player.src = "";
}

// click X button
closeBtn.addEventListener("click", closeModal);


// optional: click outside modal closes it
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});