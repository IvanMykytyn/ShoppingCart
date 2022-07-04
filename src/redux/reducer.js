import { startTransition } from 'react'
import cart from '../cart-items'
import types from './types'

const initialState = {
  cart,
  total: 20,
  amount: 10,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_CART:
      return { ...state, cart: [] }

    case types.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }
    case types.TOGGLE_AMOUNT:
      const { id, toggle } = action.payload
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (id === cartItem.id) {
            if (toggle === 'inc') {
              return (cartItem = { ...cartItem, amount: cartItem.amount + 1 })
            }
            if (toggle === 'dec') {
              return (cartItem = { ...cartItem, amount: cartItem.amount - 1 })
            }
          }
          return cartItem
        }),
      }

    case types.GET_TOTALS:
      let { amount, total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          cartTotal.amount += cartItem.amount
          cartTotal.total += cartItem.amount * cartItem.price

          return cartTotal
        },
        {
          amount: 0,
          total: 0,
        }
      )
      total = parseFloat(total.toFixed(2))
      return {
        ...state,
        amount,
        total,
      }
    default:
      return state
  }
}
