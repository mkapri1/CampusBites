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

let map;
function initMap() {
     map = new google.maps.Map(document.getElementById("map"),{
      center: { lat: 33.755451, lng: -84.389352},
      zoom: 6
     });
     new google.maps.Marker({
        position: { lat: 33.755451, lng: -84.389352},
        map: map,
        label: "A",
        title: "Moge Tee",
        draggable: false,
        animation: google.maps.Animation.BOUNCE,
     })
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

function reviews(){
    //Examples
  let reviews = [
    { name: "Carlos",rating: 4, comment: "Great products!" },
    { name: "Carlos",rating: 5, comment: "I love it!" },
    { name: "Carlos",rating: 3, comment: "Not bad" }
  ];

//Calculate Averages
let totalRating = 0;
reviews.forEach((review) => {
  totalRating += review.rating;
});
const averageRating = totalRating / reviews.length;

// Update the average rating in the HTML
const averageSpan = document.querySelector('#average');
averageSpan.textContent = averageRating.toFixed(1);

// Display the existing reviews
const reviewsUL = document.querySelector('#reviews ul');
reviews.forEach((review) => {
  const li = document.createElement('li');
  li.textContent = `${review.rating} stars - ${review.comment}`;
  reviewsUL.appendChild(li);
});

// Refresh New Form Submission Input
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get the user's rating and comment
  const ratingInput = document.querySelector('#rating');
  const rating = parseInt(ratingInput.value);
  const commentInput = document.querySelector('#comment');
  const comment = commentInput.value;
  
  // Add the new review to the array
  reviews.push({ rating: rating, comment: comment });
  
  // Create a new review element
  const newReview = document.createElement('li');
  newReview.textContent = `${rating} stars - ${comment}`;
  
  // Add the new review to the list
  reviewsUL.appendChild(newReview);
  
  // Calculate the new average rating
  const newTotalRating = totalRating + rating;
  const newAverageRating = newTotalRating / reviews.length;
  
  // Update the average rating in the HTML
  averageSpan.textContent = newAverageRating.toFixed(1);
  
  // Reset the form
  ratingInput.value = '';
  commentInput.value = '';
});
}

function addComment() {
// inputs
var name = document.getElementById("name").value;
var comment = document.getElementById("comment").value;

// create comment element
var commentElement = document.createElement("div");
commentElement.classList.add("comment");
commentElement.innerHTML = "<h3>" + name + "</h3><p>" + comment + "</p>";

var commentsSection = document.getElementById("comments");
commentsSection.appendChild(commentElement);

// save comment in localStorage
var comments = JSON.parse(localStorage.getItem("comments")) || [];
comments.push({ name: name, comment: comment });
localStorage.setItem("comments", JSON.stringify(comments));

document.getElementById("name").value = "";
document.getElementById("comment").value = "";
}

// retrieve comments from localStorage on page load
window.onload = function() {
var comments = JSON.parse(localStorage.getItem("comments")) || [];
var commentsSection = document.getElementById("comments");
comments.forEach(function(comment) {
var commentElement = document.createElement("div");
commentElement.classList.add("comment");
commentElement.innerHTML = "<h3>" + comment.name + "</h3><p>" + comment.comment + "</p>";
commentsSection.appendChild(commentElement);
});
};