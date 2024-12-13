document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.photo-video-items');

    // Toggle active class for nav items
    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            if (this.getAttribute('href') === '#') { // Only prevent default behavior for # links
                event.preventDefault(); // Prevent the default anchor behavior for # links
                navItems.forEach(nav => nav.classList.remove('in-active'));
                this.classList.add('in-active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.querySelector('.modal');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];
    var images = document.querySelectorAll('.gallery img');
    var index = 0;

    images.forEach((img, i) => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            index = i;
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    document.getElementById("next").onclick = function() {
        index = (index + 1) % images.length;
        modalImg.src = images[index].src;
        captionText.innerHTML = images[index].alt;
    }

    document.getElementById("prev").onclick = function() {
        index = (index - 1 + images.length) % images.length;
        modalImg.src = images[index].src;
        captionText.innerHTML = images[index].alt;
    }
});

