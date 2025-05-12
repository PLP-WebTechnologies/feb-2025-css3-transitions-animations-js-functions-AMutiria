function setupAnimationsAndStorage() {
    const animatedButton = document.querySelector('.animated-button');
    const animatedImage = document.querySelector('.animated-image');
    const fadeButton = document.getElementById('fadeButton');
  
    // Function to store a preference in localStorage
    function storePreference(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Stored ${key}:`, value);
      } catch (error) {
        console.error("Error storing to localStorage:", error);
      }
    }
  
    // Function to retrieve a preference from localStorage
    function getPreference(key) {
      try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
      } catch (error) {
        console.error("Error retrieving from localStorage:", error);
        return null;
      }
    }
  
    // --- Button Animation (already handled by CSS hover) ---
    // We don't need JavaScript to trigger the CSS hover animation.
  
    // --- Image Fade Animation triggered by a button click ---
    if (fadeButton && animatedImage) {
      fadeButton.addEventListener('click', () => {
        animatedImage.classList.toggle('fade-out');
        // Store the fade state
        storePreference('imageFadedOut', animatedImage.classList.contains('fade-out'));
      });
    }
  
    // --- Load initial image fade state from localStorage ---
    const isImageFadedOut = getPreference('imageFadedOut');
    if (animatedImage && isImageFadedOut) {
      animatedImage.classList.add('fade-out');
    }
  }
  
  // Call the function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', setupAnimationsAndStorage);