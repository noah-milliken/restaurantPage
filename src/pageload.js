import home from './home'
import menu from './menu'
import contact from './contact'
const btns = ['home', 'menu', 'contact']

function render() {
    const tabsDiv = document.createElement('div')
    tabsDiv.setAttribute('class', 'page-container')
    const renderDiv = document.createElement('div')
    const menuComponent = menu()
    const contactComponent = contact()
    const homeComponent = home()

    renderDiv.appendChild(contactComponent)
    renderDiv.setAttribute('class', "main")
    const tabs = document.createElement('div')
    tabs.setAttribute('class', 'nav')
    btns.forEach(btn => {
        const button = document.createElement('button')
        button.textContent = btn
        button.setAttribute('class', 'btn')
        button.setAttribute('id', btn)
        tabs.appendChild(button)
        button.addEventListener('click', () => {
            renderDiv.innerHTML = ``
            if (btn === 'home') {

                renderDiv.appendChild(homeComponent)

            } else if (btn === 'menu') {

                renderDiv.appendChild(menuComponent)
            } else if (btn === 'contact') {

                renderDiv.appendChild(contactComponent)
            } else {

                renderDiv.appendChild(homeComponent)
            }
        })
    })
    tabsDiv.appendChild(tabs)
    tabsDiv.appendChild(renderDiv)

    return tabsDiv
}
export default render