console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    
    // Fetch the images on page load
    window.addEventListener('load', () => {
      fetch(imgUrl)
        .then(response => response.json())
        .then(json => {
          const images = json.message;
          const imageContainer = document.querySelector('#dog-image-container');
    
          images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            imageContainer.appendChild(img);
          });
        });
    });
    
    // Fetch all the dog breeds on page load
    window.addEventListener('load', () => {
      fetch(breedUrl)
        .then(response => response.json())
        .then(json => {
          const dogBreeds = Object.keys(json.message);
          const dogBreedsList = document.querySelector('#dog-breeds');
    
          dogBreeds.forEach(dogBreed => {
            const li = document.createElement('li');
            li.textContent = dogBreed;
            dogBreedsList.appendChild(li);
          });
        });
    });
    
    // Add a click event listener to change the font color when an <li> is clicked
    const dogBreedsList = document.querySelector('#dog-breeds');
    dogBreedsList.addEventListener('click', (event) => {
      const clickedElement = event.target;
    
      if (clickedElement.tagName === 'LI') {
        clickedElement.style.color = 'blue'; // Change the font color to blue (you can choose a different color)
      }
    });
    
    // Add an event listener to the breed dropdown to filter breeds
    const breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', () => {
      const selectedLetter = breedDropdown.value;
      const allBreeds = dogBreedsList.querySelectorAll('li');
    
      allBreeds.forEach(li => {
        const breedName = li.textContent.toLowerCase();
        if (breedName.startsWith(selectedLetter)) {
          li.style.display = 'block';
        } else {
          li.style.display = 'none';
        }
      });
    });
    
  });
  
