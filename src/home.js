function home() {
    const container = document.createElement('div')
    container.setAttribute('class', 'home')

    container.innerHTML = `
        <h1>Welcome to whales Tail</h1>
        <p>Prepare yourself for a truly unique dining experience at [Restaurant Name]. We take pride in serving the most mediocre food in town and offering a service that will leave you questioning your life choices. Our talented chefs have mastered the art of mediocrity, combining bland flavors with uninspired presentation. Our waitstaff is trained to provide the slowest and most indifferent service imaginable. But wait, there's more! In a bold move, we proudly declare that tips starting at a whopping 40% are non-negotiable. Because who wouldn't want to generously reward such extraordinary mediocrity?</p>
        <h3>Dont come back, see if we care.</h3>
    `

    return container
}
export default home