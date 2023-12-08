document.addEventListener('DOMContentLoaded', function () {
    const imageList = document.getElementById('image-list');
    const navigationDots = document.getElementById('navigation-dots');
    const descriptionContainer = document.getElementById('description-container');
    let currentIndex = 0;

    const descriptions = [
        "In this image a rose is pictured up close showing all of its natural beauty",
        "In this image a field full of daisies is captured on a bright sunny day ",
        "In this image orange and red vibrant marigolds are pictured",
        "In this image a field of sunflowers stands tall soaking up the summer sun",
        "In this image beautiful purple tulips have just bloomed "
    ];

    function updateDescriptions() {
        descriptionContainer.textContent = descriptions[currentIndex];
    }

    function updateDots() {
        navigationDots.innerHTML = '';
        for (let i = 0; i < imageList.children.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.onclick = () => showImage(i);
            navigationDots.appendChild(dot);
        }
        if (navigationDots.children[currentIndex]) {
            navigationDots.children[currentIndex].classList.add('active');
        }
    }

    function showImage(index) {
        currentIndex = index;
        updateDots();
        updateDescriptions();
        imageList.style.transform = `translateX(-${index * 100}%)`;
    }

    window.prevImage = function () {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        }
    };

    window.nextImage = function () {
        if (currentIndex < imageList.children.length - 1) {
            currentIndex++;
            showImage(currentIndex);
        }
    };

    showImage(currentIndex);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            prevImage();
        } else if (event.key === 'ArrowRight') {
            nextImage();
        }
    });

    document.getElementById('image-container').addEventListener('mousemove', function (event) {
        const midX = window.innerWidth / 2;
        const mouseX = event.clientX;
        const threshold = 100;

        if (mouseX < midX - threshold) {
            document.querySelector('.arrow:first-child').style.display = 'block';
            document.querySelector('.arrow:last-child').style.display = 'none';
        } else if (mouseX > midX + threshold) {
            document.querySelector('.arrow:first-child').style.display = 'none';
            document.querySelector('.arrow:last-child').style.display = 'block';
        } else {
            document.querySelector('.arrow:first-child').style.display = 'none';
            document.querySelector('.arrow:last-child').style.display = 'none';
        }
    });
});
