document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    const closeIcon = document.getElementById('close-icon');

    // Toggle active class for nav items
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Automatically scroll through slides
    autoScroll();
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const suggestionsBox = document.getElementById('suggestions');
    const allItems = document.querySelectorAll('.suggestion-item');
    const searchIcon = document.getElementById('searchIcon');
    const notFoundMessage = document.createElement('div');
    notFoundMessage.classList.add('not-found');
    notFoundMessage.textContent = 'Not Found';
    suggestionsBox.appendChild(notFoundMessage);

    searchInput.addEventListener('focus', function () {
        suggestionsBox.style.display = 'block';
        notFoundMessage.style.display = 'none';
        allItems.forEach(item => item.style.display = 'block');
    });

    searchIcon.addEventListener('click', function () {
        suggestionsBox.style.display = 'block';
        notFoundMessage.style.display = 'none';
        allItems.forEach(item => item.style.display = 'block');
    });

    searchInput.addEventListener('input', function () {
        const value = this.value.toLowerCase();
        suggestionsBox.style.display = value ? 'block' : 'none';
        let found = false;

        if (value) {
            allItems.forEach(item => {
                if (item.textContent.toLowerCase().includes(value)) {
                    item.style.display = 'block';
                    found = true;
                } else {
                    item.style.display = 'none';
                }
            });

            if (!found) {
                notFoundMessage.style.display = 'block';
            } else {
                notFoundMessage.style.display = 'none';
            }
        } else {
            notFoundMessage.style.display = 'none';
            allItems.forEach(item => item.style.display = 'block');
        }
    });

    allItems.forEach(item => {
        item.addEventListener('click', function () {
            searchInput.value = this.textContent;
            suggestionsBox.style.display = 'none';
        });
    });

    document.addEventListener('click', function (e) {
        if (!suggestionsBox.contains(e.target) && e.target !== searchInput && e.target !== searchIcon) {
            suggestionsBox.style.display = 'none';
        }
    });
});


let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.getElementById('carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function autoScroll() {
    moveSlide(1);
    setTimeout(autoScroll, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    let currentImgIndex = 0;
    let currentGallery = [];

    const toggleModal = (modal, image) => {
        modal.style.display = 'flex';
        modal.querySelector('.modal-content').src = image.src;
        currentImgIndex = currentGallery.indexOf(image);
    };

    const closeModal = (modal) => {
        modal.style.display = 'none';
    };

    const showPrevImage = (modal) => {
        currentImgIndex = (currentImgIndex > 0) ? currentImgIndex - 1 : currentGallery.length - 1;
        modal.querySelector('.modal-content').src = currentGallery[currentImgIndex].src;
    };

    const showNextImage = (modal) => {
        currentImgIndex = (currentImgIndex < currentGallery.length - 1) ? currentImgIndex + 1 : 0;
        modal.querySelector('.modal-content').src = currentGallery[currentImgIndex].src;
    };

    document.querySelectorAll('.center-gallery').forEach((galleryWrapper) => {
        const gallery = galleryWrapper.querySelector('.gallery');
        const images = Array.from(gallery.querySelectorAll('img'));
        const modal = galleryWrapper.querySelector('.modal');
        const closeBtn = modal.querySelector('.close');
        const prevBtn = modal.querySelector('.prev');
        const nextBtn = modal.querySelector('.next');

        images.forEach(image => {
            image.addEventListener('click', () => {
                currentGallery = images;
                toggleModal(modal, image);
            });
        });

        closeBtn.addEventListener('click', () => closeModal(modal));
        prevBtn.addEventListener('click', () => showPrevImage(modal));
        nextBtn.addEventListener('click', () => showNextImage(modal));

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
});

function toggleGallery(id) {
    const gallery = document.getElementById(id);
    if (gallery.style.display === "none") {
        gallery.style.display = "block";
    } else {
        gallery.style.display = "none";
    }
}

window.onload = function () {
    document.querySelectorAll('.center-gallery').forEach(gallery => {
        gallery.style.display = "none";
    });
}

// navbarr

document.getElementById("menu-icon").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.maxHeight) {
        navLinks.style.maxHeight = null;
    } else {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    }
});