import { data } from './helpers'

const seller = data.seller
const goods = data.goods
const ratings = data.ratings

export function getSeller() {
  return new Promise((resolve, rejected) => {
    resolve(seller); 
  })
}
export function getGoods() {
  return new Promise((resolve, rejected) => {
    resolve(goods); 
  })
}
export function getRatings() {
  return new Promise((resolve, rejected) => {
    resolve(ratings); 
  })
}

