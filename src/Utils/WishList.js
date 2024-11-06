import toast from "react-hot-toast"

// 1
const getAllWishList = () => {
  const all = localStorage.getItem('addWishList')
  
  if (all) {
    const addWishList = JSON.parse(all)
    return addWishList
  }
  else {
    return []
  }
}


// 2

const addToWishList = (product) => {
  const addWishList = getAllWishList()
  const isExist = addWishList.find(item => item.id == product.id)
  if(isExist) return toast.error('Already exist!');
  addWishList.push(product)
  localStorage.setItem('addWishList', JSON.stringify(addWishList))
  toast.success('Successfully added');
}


// 3
const removeWishList = (id) => {
  const addWishList = getAllWishList()
  const remaining = addWishList.filter(product => product.id != id)
  localStorage.setItem('addWishList', JSON.stringify(remaining))
  toast.success('Successfully remove');
}



export {addToWishList, getAllWishList, removeWishList}