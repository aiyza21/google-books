// DOM Elements are imported
import renderBooks from "./dom.js";

// URL
const url = "https://www.googleapis.com/books/v1/volumes?q=";

// Concatenating the URL with user search
const getSearchUrl = (searchTerm) => {
    return url + searchTerm;
};

// API Call Function
const search = async (searchTerm) => {
    let results = "";
    // API call being saved
    const requestPromise = fetch(getSearchUrl(searchTerm));

    // Waiting for response
    const response = await requestPromise;

    // Saving JSON Object
    const responseData = await response.json();
    console.log(responseData);

    // Mapping over search results to get titles
    results = responseData.items.map(renderBooks);

    console.table(results);
};

export default search;
