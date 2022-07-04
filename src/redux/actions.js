import types from './types'

export const clearCart = () => ({
  type: types.CLEAR_CART,
})

export const removeItem = (id) => ({
  type: types.REMOVE_ITEM,
  payload: { id },
})

export const toggleAmount = (id, toggle) => ({
  type: types.TOGGLE_AMOUNT,
  payload: { id, toggle },
})

export const getTotals = () => ({
  type: types.GET_TOTALS,
})
