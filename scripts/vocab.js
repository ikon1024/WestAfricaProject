
const vocabDefinitions = {
    "artifacts": "An item left by an earlier culture.",
    "jenne Jeno": "An ancient West African city built along the Niger River.",
    "niger river": "The longest river in West Africa, a kind of trading highway in early times.",
    "nok": "A people living in West Africa in the 500's B.C.E who mastered ironworking",
    "sahara": "A large, hot desert in North Africa that covers about 3.5 Million square miles.",
    "sahel": "A zone of semidesert, South of the Sahara, where short grasses, small bushes, and a few trees grow.",
    "savanna": "A vegetation zone of tall grasses and scattered trees, with a long rainy season.",
    "smelting": "The process of melting ore to produce iron or other metals from it.",
    "tribute": "Payment made by one ruler or country to another for protection or as a sign of submission"
    // Add more vocabulary words and their definitions here
};


// Script to create vocabulary popups on hover
const vocabWords = document.querySelectorAll('.vocab-word');

vocabWords.forEach(word  => {
    const wordName = word.getAttribute('data-word');  // Get the word name (e.g. 'savanna')
    
    // If a definition for this word exists in vocabDefinitions
    if (vocabDefinitions[wordName]) {
        const definition = vocabDefinitions[wordName];
        
        // Create the popup element
        const popup = document.createElement('div');
        popup.classList.add('vocab-popup');
        popup.innerText = definition;

        // Set up hover effect to show popup
        word.addEventListener('mouseenter', () => {
            word.appendChild(popup);  // Append popup when hovered
            popup.style.visibility = 'visible';  // Make sure the popup is visible
        });

        word.addEventListener('mouseleave', () => {
            word.removeChild(popup);  // Remove the popup when hover ends
            popup.style.visibility = 'hidden';  // Hide the popup
        });
    }
});