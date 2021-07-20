async function getData() {
    const data = await fetch("https://api.openbrewerydb.org/breweries", {
        method: "GET"
    });
    const breweries = await data.json();
    const userList = document.createElement("div");
    userList.className = "breweryList";
    breweries.forEach((brewery) => {
        const userContainer = document.createElement("div");
        userContainer.className = "simpleCard";
        userContainer.innerHTML = 
        `<div class="brewName">${brewery.name}</div>
        <div>Type</div>
        <div>${brewery.brewery_type}</div>
        <div>Address</div>
        <div>${brewery.street}, ${brewery.city}, ${brewery.state} - ${brewery.postal_code}, ${brewery.country}</div>
        <div>Phone Number</div>
        <div>${brewery.phone}</div>
        <div>Website</div>
        <a href="${brewery.website_url}" target="_blank">Click here</a>`;
        userList.append(userContainer);
    });
    document.body.append(userList);
}
getData();