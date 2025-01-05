const ApiKey = ' ';
const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=' + ApiKey;

async function fetchAPOD() {
    const date = document.getElementById('date').value;
    let url = apiUrl;
    
    if (date) {
        url += `&date=${date}`; 
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Display the APOD image and explanation
        document.getElementById('apodImage').src = data.url;
        document.getElementById('apodExplanation').innerText = data.explanation;
    } catch (error) {
        console.error('Error fetching APOD:', error);
        alert('Sorry, we couldn\'t fetch the data. Please try again later.');
    }
}

window.onload = fetchAPOD;


