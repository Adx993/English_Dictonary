const wordInput = document.getElementById("wordInput");
const searchButton = document.getElementById("searchButton");
const meaningDisplay = document.getElementById("meaning");
const exampleDisplay = document.getElementById("example");

searchButton.addEventListener("click", () => {
    const word = wordInput.value.toLowerCase();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
            if (data && data.length > 0) {
                const wordData = data[0];
                meaningDisplay.textContent = wordData.meanings[0].definitions[0].definition;
                exampleDisplay.textContent = wordData.meanings[0].definitions[0].example;
            } else {
                meaningDisplay.textContent = "No result";
                exampleDisplay.textContent = "No result";
            }
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            meaningDisplay.textContent = "Error fetching data";
            exampleDisplay.textContent = "Error fetching data";
        });
});
