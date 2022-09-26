const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const amount = document.getElementById('amount')
const cartAmount = document.getElementById('cart-amount')
const addCart = document.getElementById('add-cart')
const productText = document.querySelector('#product-content h1')
const img = document.getElementById('img')
const lightbox = document.getElementById('lightbox')
const close = document.getElementById('close')

let counter = 0
const cart = []

const initializeCounter = () => {
  cartAmount.style.display = 'none'
}

initializeCounter()

plus.addEventListener('click', () => {
  amount.innerHTML = ++counter
})
minus.addEventListener('click', () => {
  if (counter > 0) {
    amount.innerHTML = --counter
  }
})

addCart.addEventListener('click', () => {
  if (counter !== 0) {
    cartAmount.innerHTML = amount.textContent
    cartAmount.style.display = 'block'

    const entryIndex = cart.findIndex((item) => item.id === 1)
    if (entryIndex > -1) {
      cart[0].amount = parseInt(amount.textContent)
    } else {
      cart.push({
        id: 1,
        amount: parseInt(amount.textContent),
        title: productText.textContent,
      })
    }
  } else {
    Toastify({
      text: 'Please add a product first!',
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: 'top', // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      style: {
        background: 'hsl(26, 100%, 55%)',
      },
    }).showToast()
  }
})

img.addEventListener('click', () => {
    lightbox.style.display = 'block'
})

close.addEventListener('click', () => {
    lightbox.style.display = 'none'
})