const foodItems = [
    {
        id: 'avocadoToast',
        name: 'Avocado Toast',
        description: 'Artisanal sourdough toast topped with smashed avocado, heirloom tomatoes, and microgreens.',
        price: 12.99
    },
    {
        id: 'quinoaBowl',
        name: 'Quinoa Bowl',
        description: 'Organic quinoa served with roasted vegetables, kale, pickled beets, and a tahini dressing.',
        price: 14.99
    },
    {
        id: 'artisanBurger',
        name: 'Artisan Burger',
        description: 'Grass-fed beef patty topped with heirloom tomatoes, arugula, caramelized onions, and truffle aioli on a brioche bun.',
        price: 16.99
    },
    {
        id: 'kaleSalad',
        name: 'Kale Salad',
        description: 'Fresh kale leaves mixed with roasted butternut squash, pomegranate seeds, toasted almonds, and lemon vinaigrette.',
        price: 11.99
    },
    {
        id: 'sweetPotatoFries',
        name: 'Sweet Potato Fries',
        description: 'Organic sweet potato fries seasoned with rosemary and sea salt, served with a garlic aioli dipping sauce.',
        price: 7.99
    }
];

function menu() {
    const container = document.createElement('div')
    container.setAttribute('class', 'menu')
    const menuCard = document.createElement('div')
    foodItems.forEach(item => {
        const CardHTML = `
            <div class="card" id=${item.id}>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
            </div>
            `
        menuCard.innerHTML += CardHTML
    })
    container.appendChild(menuCard)

    return container
}
export default menu