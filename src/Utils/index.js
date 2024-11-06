import toast from "react-hot-toast"

// 1
const getAllProducts = () => {
  const all = localStorage.getItem('addCard')
  
  if (all) {
    const addCard = JSON.parse(all)
    return addCard
  }
  else {
    return []
  }
}


// 2

const addToCard = (product) => {
  const addCard = getAllProducts()
  const isExist = addCard.find(item => item.id == product.id)
  if(isExist) return toast.error('Already exist!');
  addCard.push(product)
  localStorage.setItem('addCard', JSON.stringify(addCard))
  toast.success('Successfully add to card');
}


// 3
const removeCard = (id) => {
  const addCard = getAllProducts()
  const remaining = addCard.filter(product => product.id != id)
  localStorage.setItem('addCard', JSON.stringify(remaining))
  toast.success('Successfully removed to card');
}


export {addToCard, getAllProducts, removeCard}