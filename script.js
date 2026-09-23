const menuMobile = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", function () {

    menu.classList.toggle("active");

});

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

    });

});

const elements = document.querySelectorAll(
    ".section, .project-card, .skill, .gallery-item, .info-card, .github-section, .contact-cards a"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.12
    }

);


elements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});

const galleryItems = document.querySelectorAll(".gallery-item");

const galleryModal = document.getElementById("galleryModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.getElementById("closeModal");

galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image = item.querySelector("img");

        modalImage.src = image.src;

        modalImage.alt = image.alt;

        galleryModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

closeModal.addEventListener("click", function () {

    galleryModal.classList.remove("active");

    document.body.style.overflow = "auto";

});

galleryModal.addEventListener("click", function (event) {

    if (event.target === galleryModal) {

        galleryModal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        galleryModal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});