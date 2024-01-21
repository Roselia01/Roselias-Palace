// Get the images that can trigger the pop-up
var images = document.querySelectorAll('.content img:not([src="assets/null.png"]):not([src="assets/more.png"]):not([src="assets/discord_icon.png"])');

// Add event listeners to each image
images.forEach(function(image) {
  image.addEventListener('click', function() {
    var description = image.getAttribute('data-description');
    var indicator = image.getAttribute('data-indicator');
    openPopup(image.src, image.alt, description, indicator);
  });
});

// Open the pop-up and display the clicked image with animations
function openPopup(imageSrc, imageName, imageDescription, imageIndicator) {
  var popup = document.getElementById('popup');
  var popupImage = document.getElementById('popupImage');
  var popupImageName = document.getElementById('popupImageName');
  var popupImageIndicator = document.getElementById('popupImageIndicator');
  var popupImageDescription = document.getElementById('popupImageDescription');

  // Set the image source, name, indicator, and description
  popupImage.src = imageSrc;
  popupImageName.textContent = imageName;
  popupImageIndicator.textContent = imageIndicator;
  popupImageDescription.textContent = imageDescription;

  // Show the pop-up with animations
  popup.style.display = 'block';
  popup.classList.remove('popupAnimation');
  void popup.offsetWidth; // Trigger reflow to restart the animations
  popup.classList.add('popupAnimation');
}

// Close the pop-up with a scroll and fade-out animation
function closePopup() {
  var popup = document.getElementById('popup');
  var popupContent = document.querySelector('.popup-content');
  var scrollDistance = window.innerHeight;

  // Apply scroll and fade-out animation
  popupContent.style.opacity = '0';

  // Wait for the animation to complete before hiding the pop-up
  setTimeout(function() {
    popup.style.display = 'none';
    popupContent.style.opacity = '1';
  }, 500); // Adjust the duration (in milliseconds) to control the fading speed
}

// Listen to scroll events and initiate the close animation
window.addEventListener('scroll', function() {
  var popup = document.getElementById('popup');
  var popupContent = document.querySelector('.popup-content');
  var scrollDistance = window.innerHeight;

  // Calculate the distance between the top of the pop-up and the bottom of the viewport
  var popupBottom = popupContent.getBoundingClientRect().bottom;
  var distanceToBottom = popupBottom - window.innerHeight;

  // Calculate the opacity based on the scroll distance
  var opacity = 1 - (distanceToBottom / scrollDistance);

  // Apply the opacity to the pop-up content
  popupContent.style.opacity = opacity.toFixed(2); // Limit opacity to two decimal places
});
