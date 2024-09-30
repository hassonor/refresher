// Fetch data from OMDB API and handle possible network errors
fetch('http://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc')
    .then(resp => {
        if (!resp.ok) {  // Check if the response is not OK (e.g., 404, 500)
            throw new Error('Network response was not ok');
        }
        return resp.json();  // Parse the response body as JSON
    })
    .then(data => console.log(data))  // Log the data if the fetch is successful
    .catch(error => console.log('Error:', error));  // Log any error that occurs

// Fetch multiple URLs in parallel using Promise.all
const url1 = 'http://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc';
const url2 = 'http://www.omdbapi.com/?s=superman&y=2018&apikey=ed4903dc';

Promise.all([fetch(url1), fetch(url2)])  // Run multiple fetch requests in parallel
    .then(responses => Promise.all(responses.map(resp => resp.json())))  // Parse all responses as JSON
    .then(data => {
        console.log('Batman data:', data[0]);  // Log Batman data
        console.log('Superman data:', data[1]);  // Log Superman data
    })
    .catch(error => console.log('Error:', error));  // Handle errors if any promise fails

// Fetch sequentially using async/await and handle errors
async function fetchMovies() {
    try {
        const batmanResponse = await fetch('http://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc');
        const batmanData = await batmanResponse.json();
        console.log('Batman:', batmanData);

        const supermanResponse = await fetch('http://www.omdbapi.com/?s=superman&y=2018&apikey=ed4903dc');
        const supermanData = await supermanResponse.json();
        console.log('Superman:', supermanData);
    } catch (error) {
        console.log('Error:', error);  // Catch and log any error during the fetches
    }
}

fetchMovies();  // Call the async function to fetch movies

// Retry failed fetches a few times before giving up
function fetchWithRetry(url, retries = 3) {
    return fetch(url)
        .then(resp => {
            if (!resp.ok) {  // Check if response is not OK
                throw new Error('Network response was not ok');
            }
            return resp.json();  // Parse the response as JSON
        })
        .catch(error => {
            if (retries > 0) {  // Retry if attempts are left
                console.log('Retrying fetch... attempts left:', retries);
                return fetchWithRetry(url, retries - 1);  // Recursively retry
            } else {
                console.log('Max retries reached.');
                throw error;  // Throw error if retries are exhausted
            }
        });
}

fetchWithRetry('http://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc')
    .then(data => console.log('Fetched data:', data))  // Log the final fetched data
    .catch(error => console.log('Final error:', error));  // Log error if all retries fail

// Fetch and filter results for movies from 2018
fetch('http://www.omdbapi.com/?s=batman&apikey=ed4903dc')
    .then(resp => resp.json())  // Parse the response as JSON
    .then(data => {
        const filteredMovies = data.Search.filter(movie => movie.Year === '2018');  // Filter results by year
        console.log('Filtered movies (2018):', filteredMovies);  // Log the filtered results
    })
    .catch(error => console.log('Error:', error));  // Handle any errors during fetch
