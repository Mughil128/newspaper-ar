document.addEventListener("DOMContentLoaded", () => {
    const arViewer = document.getElementById("ar-viewer");
    const video = document.getElementById("ar-video");

    arViewer.addEventListener("targetFound", () => {
        console.log("Advertisement detected!");
        video.play();
    });

    arViewer.addEventListener("targetLost", () => {
        console.log("Advertisement lost.");
        video.pause();
    });
});
