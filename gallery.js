window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);

const beforeImages = document.querySelectorAll(".beforeImage img");
const afterImages = document.querySelectorAll(".afterImage img");

beforeImages.forEach((beforeImage, index) => {
    const originalSrc = beforeImage.src;
    let isMouseOver = false;

    beforeImage.addEventListener("mouseenter", () => {
        isMouseOver = true;
    });

    beforeImage.addEventListener("mouseleave", () => {
        isMouseOver = false;
        beforeImage.src = originalSrc.replace("-art", "-life");
    });

    document.addEventListener("mousemove", (event) => {
        if (isMouseOver && isMouseInside(event, beforeImage)) {
            beforeImage.src = originalSrc.replace("-life", "-art");
        } else {
            beforeImage.src = originalSrc.replace("-art", "-life");
        }
    });
});

afterImages.forEach((afterImage, index) => {
    const originalSrc = afterImage.src;
    let isMouseOver = false;

    afterImage.addEventListener("mouseenter", () => {
        isMouseOver = true;
    });

    afterImage.addEventListener("mouseleave", () => {
        isMouseOver = false;
        afterImage.src = originalSrc.replace("-life", "-art");
    });

    document.addEventListener("mousemove", (event) => {
        if (isMouseOver && isMouseInside(event, afterImage)) {
            afterImage.src = originalSrc.replace("-art", "-life");
        } else {
            afterImage.src = originalSrc.replace("-life", "-art");
        }
    });
});

function isMouseInside(event, element) {
    const rect = element.getBoundingClientRect();
    return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );
}
