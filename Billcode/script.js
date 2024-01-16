function checkReferralCode() {
    var inputCode = document.getElementById("referralCode").value;

    // Fetch JSON data (replace 'data.json' with your JSON file)
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Check if the input code exists in the JSON data
            if (data.hasOwnProperty(inputCode)) {
                // Display user details and products
                displayUserDetails(data[inputCode]);
                // Show the product list and "Buy" button
                showProductList();
            } else {
                displayResult("Referral code not found");
                // Hide the product list and "Buy" button if the code is not found
                hideProductList();
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayUserDetails(user) {
    // Display user details
    document.getElementById("result").innerHTML = `User: ${user.user}, Email: ${user.email}`;
    
    // Display products with images
    var productList = document.getElementById("products");
    productList.innerHTML = "";
    user.products.forEach(product => {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="50" height="50">
            <span>${product.name}</span>
        `;
        productList.appendChild(listItem);
    });
}

function showProductList() {
    document.getElementById("productList").style.display = "block";
}

function hideProductList() {
    document.getElementById("productList").style.display = "none";
}

function buyProduct() {
    // Add logic for the buy button click action
    alert("Buy button clicked! Add your buy logic here.");
}
