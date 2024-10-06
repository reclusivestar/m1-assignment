// Get references to the info box and its elements
const infoBox = document.getElementById('info-box');
const infoHeading = document.getElementById('info-heading');
const infoText = document.getElementById('info-text');
const closeInfoBoxLink = document.getElementById('close-info-box');

// Variable for the text to close the info box
const closeText = 'Close';

// Add event listener to close the info box
closeInfoBoxLink.addEventListener('click', function(event) {
    event.preventDefault();
    infoBox.style.visibility = 'hidden';
});

// Get the photo gallery container
const galleryContainer = document.getElementById('photo-gallery');

// Images array with caption, meaningful short description (max 3 words), and info (for the info box)
const images = [
    { src: 'images/pet1.jpg', caption: 'Happy Dog', description: 'Dog in park', info: 'Happy dogs are known for their joyful and playful behavior, bringing happiness to their owners.' },
    { src: 'images/pet2.jpg', caption: 'Fluffy Cat', description: 'Fluffy cat resting', info: 'Fluffy cats are adored for their soft fur and calm demeanor, making them perfect companions.' },
    { src: 'images/pet3.jpg', caption: 'Playful Dog', description: 'Dog chasing ball', info: 'Playful dogs help keep you active and are always eager for a game of fetch.' },
    { src: 'images/pet4.jpg', caption: 'Curious Dog', description: 'Dog exploring area', info: 'Curious dogs love exploring new places and sniffing out new adventures.' },
    { src: 'images/pet5.jpg', caption: 'Friendly Dog', description: 'Dog seeking attention', info: 'Friendly dogs enjoy human interaction and make excellent companions for families.' },
    { src: 'images/pet6.jpg', caption: 'Loyal Dog', description: 'Patient loyal dog', info: 'Loyal dogs form strong bonds with their owners and are always by your side.' },
    { src: 'images/pet7.jpg', caption: 'Adventurous Dog', description: 'Dog on hike', info: 'Adventurous dogs are always ready for outdoor fun and new experiences.' },
    { src: 'images/pet8.jpg', caption: 'Sleepy Cat', description: 'Cat taking nap', info: 'Sleepy cats love their naps and spend hours lounging in comfortable spots.' },
    { src: 'images/pet9.jpg', caption: 'Energetic Cat', description: 'Cat playing toy', info: 'Energetic cats are playful and love engaging with toys and chasing things.' },
    { src: 'images/pet10.jpg', caption: 'Playful Cat', description: 'Cat running around', info: 'Playful cats keep you entertained with their amusing antics.' },
];


// Loop through the images array and create list items for each photo with a description
images.forEach((image, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('photo');

    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = 'Gallery photo';

    const captionElement = document.createElement('p');
    captionElement.classList.add('caption');
    captionElement.innerText = image.caption;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description');
    descriptionElement.innerText = image.description;

    // Add click event listener to description
    descriptionElement.addEventListener('click', function() {
        infoHeading.innerHTML = image.caption;
        infoText.innerHTML = image.info;  // Use the new "info" property here
        closeInfoBoxLink.innerHTML = closeText;
        infoBox.style.visibility = 'visible';
    });

    listItem.appendChild(imgElement);
    listItem.appendChild(captionElement);
    listItem.appendChild(descriptionElement);
    galleryContainer.appendChild(listItem);
});


$(document).ready(function () {
    $('.photo img').click(function () {
        const imgSrc = $(this).attr('src');
        $('#lightbox-img').attr('src', imgSrc); 
        $('#lightbox').removeClass('hidden').addClass('visible');
    });

    $('#lightbox-close, #overlay').click(function () {
        $('#lightbox').removeClass('visible').addClass('hidden');
    });
});

