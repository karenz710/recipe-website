function sortRecipes() {
    const container = document.getElementById('recipe-container');
    const recipes = Array.from(container.getElementsByClassName('recipe-card'));
    const sortBy = document.getElementById('sort').value;

    if (sortBy === 'latest') {
        recipes.sort((a, b) => {
            return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
        });
    } else if (sortBy === 'oldest') {
        recipes.sort((a, b) => {
            return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
        });
    }

    container.innerHTML = '';
    recipes.forEach(recipe => container.appendChild(recipe));
}
function toggleMore() {
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('more');
    const button = document.getElementById('toggle-button');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        button.textContent = 'Read more';
        moreText.style.display = 'none';
    } else {
        dots.style.display = 'none';
        button.textContent = 'Read less';
        moreText.style.display = 'inline';
    }
}

let slideIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalSlides = items.length;

    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}



