let libra = document.querySelectorAll('.libra')
let button = document.querySelectorAll('.buy-btn')
let plus = document.querySelectorAll('.plus')
let minus = document.querySelectorAll('.minus')
let number = document.querySelectorAll('.number')
let img = document.querySelectorAll('img')


/* Image change */

img.forEach(e => e.addEventListener('mouseover', (item)=>{
    let itemId = item.target.dataset.id
    switch(itemId){
        case "first-item": 
            e.src="./image/blue2.svg";
            break;
        case "second-item": 
            e.src="./image/pantene2.svg";
            break;
        case "third-item": 
            e.src="./image/white2.svg";
            break;
        default: break;
    }
})
)
img.forEach(e => e.addEventListener('mouseout', (item)=>{
    let itemId = item.target.dataset.id
    switch(itemId){
        case "first-item": 
            e.src="./image/blue.svg";
            break;
        case "second-item": 
            e.src="./image/pantene.svg";
            break;
        case "third-item": 
            e.src="./image/white.svg";
            break;
        default: break;
    }
})
)

/* Button click */
button.forEach(e => {
    e.addEventListener('click', item => {
        let id = item.target.dataset.id;
        e.classList.toggle('click')
        libra.forEach(e=> {
           if(e.dataset.id===id){
               e.classList.toggle('click')
           }
        })
    } )
})

/* Button to select quantity */
let card = {
    'first-item': 1,
    'second-item': 1,
    'third-item': 1,
}


document.onclick =(e)=> {
    if(e.target.classList.contains('plus')){
        plusFunction(e.target.dataset.id)
    }
    if(e.target.classList.contains('minus')){
        minusFunction(e.target.dataset.id)
    }
} 

const plusFunction = id => {
    card[id]++
    renderCart(id)
}
const minusFunction = id => {
    if(card[id] === 0){
        return 0
    }
    card[id]--
    renderCart(id)
}


const renderCart = (id) => {
    number.forEach(e => {
        if(e.dataset.id===id){
            e.innerHTML=card[id]
        }
    })
}
renderCart()

/* Select items */

let select =document.querySelectorAll('.options-header')
let options =document.querySelectorAll('.options')
let selectItem =document.querySelectorAll('.select-item')
let selectCurrent =document.querySelectorAll('.select-current')

select.forEach( item => {
    item.addEventListener('click', ()=>{
        item.parentElement.parentElement.classList.toggle('active')
    } )
})

selectItem.forEach(item => {
    item.addEventListener('click', e => {
        let id = item.dataset.id;
        selectCurrent.forEach(text => {
            if(text.dataset.id===id){
            text.textContent = item.textContent
        }
            options.forEach( option => {
                    option.classList.remove('active')
            })
        })     
    } )
})

/* Hover select after mouse leave */

let activeBody = document.querySelectorAll('.select-body')

options.forEach(item => {
    activeBody.forEach(body => body.addEventListener('mouseleave', ()=>{
        if(item.classList.contains('active')){
            item.classList.remove('active')
        }
    }))
})
