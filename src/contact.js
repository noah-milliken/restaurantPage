const branches = [
    {
        name: 'Mountain Oasis',
        location: 'Rocky Peak, Colorado',
        address: '123 Mountain View Road, Rocky Peak, CO 12345',
        phone: '(555) 123-4567',
        email: 'rockypeak@restaurant.com'
    },
    {
        name: 'Coastal Breeze',
        location: 'Seaside Haven, Oregon',
        address: '456 Ocean Drive, Seaside Haven, OR 54321',
        phone: '(555) 987-6543',
        email: 'seasidehaven@restaurant.com'
    },
    {
        name: 'Desert Oasis',
        location: 'Sun Valley, Arizona',
        address: '789 Desert Highway, Sun Valley, AZ 98765',
        phone: '(555) 456-7890',
        email: 'sunvalley@restaurant.com'
    }
];


function contact() {
    const container = document.createElement('div')
    container.setAttribute('class', 'contact')
    const contactCards = document.createElement('div')

    branches.forEach(branch => {
        const cardHTML = `
        <div>
            <h1>${branch.name}</h1>
            <h3>${branch.location}</h3>
            <h3>${branch.address}</h3>
            <h4>${branch.phone}</h4>
            <h4>${branch.email}</h4>

            </div>

        `
        contactCards.innerHTML += cardHTML
    })
    container.appendChild(contactCards)


    return container
}
export default contact