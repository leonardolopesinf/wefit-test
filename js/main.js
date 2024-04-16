//Functions

function addClassName(tag, className){
    tag.className += ` ${className}`
}

function replaceInClassName(tag ,searchValue, replaceValue){
    tag.className = tag.className.replace(searchValue, replaceValue)
}

//Rows

const rows = document.querySelectorAll('.row')

const [ menu, header, cards, list] = rows

//Menu

const btnGroup = menu.querySelector('.btn-group-vertical')

replaceInClassName(btnGroup, 'vertical', 'horizontal')

//Header

const jumbotron = header.querySelector('.jumbotron')

addClassName(jumbotron, 'bg-secondary text-right text-white')

const jumbotronButton = jumbotron.querySelector('.btn')

replaceInClassName(jumbotronButton, 'primary', 'success')

//Cards

const cardsOrder = [1, 3, 2, 0]

const cardList = cards.querySelectorAll('.col-lg-3')

cardList.forEach((card, index) => {
    addClassName(card, `order-${cardsOrder[index]}`)

    if(index === 0) {
        const cardBtn = card.querySelector('.btn')

        replaceInClassName(cardBtn, 'primary', 'success')
    }
})

//List

const ul = list.querySelector('ul')

const { children } = ul

const newListItemsText = ['Quarto', 'Quinto']

for(let i = 0; i < 2; i++){    
    const newListItem = children[i].cloneNode()

    newListItem.textContent = `${newListItemsText[i]} item`

    ul.appendChild(newListItem)
}

replaceInClassName(children[0], 'active', '')