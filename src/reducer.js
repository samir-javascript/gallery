// src/reducer.js
const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREASE':
        return {
          ...state,
          amount: state.amount + 1,
          total: state.total + state.cart.price,
        };
      case 'DECREASE':
        return {
          ...state,
          amount: state.amount - 1,
          total: state.total - state.cart.price,
        };
        case 'DELETE':
          return {
            ...state,
            amount: 0,
            total: 0,
            //cart: null,
          };
      default:
        return state;
    }
  };
  
  export default reducer;
  