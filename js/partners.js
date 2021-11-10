const cardRestaurants = document.querySelector('.cards-restaurants')

const renderItems = (data) => {
    data.forEach(item => {
        
    })
}


fetch('https://test-c951d-default-rtdb.firebaseio.com/db/partners.json')
.then((response) => response.json())
.then((data) => {
    renderItems(data);
})

.catch((error) => {
    console.log(error);
})
