function fetchProducts() {
    fetch('http://localhost:3000/products') // Hitting API // GET
    .then(response => response.json()) // Receving and parsing the JSON
    .then(data => { // Processing the JSON response
        console.log("Products: ")
        data.forEach(element => {
            console.log(element);
        });
    })
}

function fetchProductById(id) {

}

function createProduct(product) {
    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

const newProduct = {"id": 4, "name": "Product 4", "rate": 150, "quantity": 3}

fetchProducts() // GET

// fetchProductById(1) // GET

createProduct(newProduct) // POST

// updateProduct() // PUT

// deleteProduct() // DELETE

// HTTP Verbs -> GET, PUT, POST, DELETE -> CRUD 

