// cool-facts.js

const facts = [
    "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible.",
    "Bananas are berries, but strawberries aren't. Botanically speaking, strawberries are considered 'aggregate fruits' because they form from many tiny fruits.",
    "Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.",
    "A group of flamingos is called a 'flamboyance'.",
    "The inventor of the Pringles can is buried in one. Fredric Baur passed away in 2008 and requested to be buried in a Pringles can.",
];

function displayFacts() {
    const factContainer = document.getElementById('factsContainer');
    facts.forEach((fact, index) => {
        const factElement = document.createElement('p');
        factElement.textContent = `${index + 1}: ${fact}`;
        factContainer.appendChild(factElement);
    });
}

// Call the display function on window load
window.onload = displayFacts;