const cardGrid = document.querySelector('.card-grid');
            const loadMoreButton = document.querySelector('.load-more-button');
            const cardsPerLoad = 2;
            let currentCardIndex = 3;

            // Show only the first 3 cards on page load
            const cards = document.querySelectorAll('.card');
            for (let i = 0; i < 10; i++) {
            if (i < 3) {
                cards[i].style.display = 'block';
            } else {
                cards[i].style.display = 'none';
            }
            }

            loadMoreButton.addEventListener('click', () => {
            // Show the next set of cards
            for (let i = currentCardIndex; i < currentCardIndex + cardsPerLoad && i < 10; i++) {
                cards[i].style.display = 'block';
            }
            
            // Update the current card index
            currentCardIndex += cardsPerLoad;
            
            // Hide the "Load More" button if there are no more cards to load
            if (currentCardIndex >= 10) {
                loadMoreButton.style.display = 'none';
            }
            });

function initMap() {
    var location = { lat: 33.755451, lng: -84.389352 }; // set the location to San Francisco
    var map = new google.maps.Map(document.getElementById("gmap"), {
      zoom: 14,
      center: location,
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  
var slideIndex = 1;
    showSlides();
    
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 1; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
        slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
}