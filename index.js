// JavaScript for dynamic portfolio items and lightbox
const portfolioItems = [
    {
        image: './image1.jfif',
        title: 'Project 1',
        description: 'Project 1 description goes here.',
    },
    {
        image: './image2.jfif',
        title: 'Project 2',
        description: 'Project 2 description goes here.',
    },
    {
        image: './image3.jpg',
        title: 'Project 3',
        description: 'Project 3 description goes here.',
    },
    {
        image: './image4.jpg',
        title: 'Project 4',
        description: 'Project 4 description goes here.',
    },

    // Add more portfolio items as needed
];

const portfolioContainer = document.querySelector('.portfolio');
const lightbox = document.querySelector('.lightbox');

portfolioItems.forEach((item, index) => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;

    const description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML = `<p>${item.description}</p>`;

    portfolioItem.appendChild(image);
    portfolioItem.appendChild(description);

    portfolioContainer.appendChild(portfolioItem);
});

// Close lightbox on click outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
