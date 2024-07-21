document.addEventListener("DOMContentLoaded", () => {
    // Fade-in/Fade-out sections
    const sections = document.querySelectorAll<HTMLElement>(".fade-section");
    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.classList.remove("fade-out");
        } else {
          entry.target.classList.add("fade-out");
          entry.target.classList.remove("fade-in");
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Image tilt effect
    const image = document.querySelector("#tilt") as HTMLElement | null;

    if (image) {
      image.addEventListener("mousemove", (event: MouseEvent) => {
        const { top, bottom, left, right } = image.getBoundingClientRect();

        const middleX = (right - left) / 2;
        const middleY = (bottom - top) / 2;

        const clientX = event.clientX;
        const clientY = event.clientY;

        const offsetX = (clientX - left - middleX) / middleX;
        const offsetY = (middleY - (clientY - top)) / middleY;

        image.style.transform = `perspective(1000px) rotateY(${offsetX * 5}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
      });
    }
});
