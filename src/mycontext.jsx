/* eslint-disable react-refresh/only-export-components */
// src/MyContext.js
import { createContext, useContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import productImage from '@/assets/images/image-product-1.jpg'
const AppContext = createContext();

const cartItem = {
  id: 1,
  title: 'Fall Limited Edition sneakers',
  price: 125.00,
  img: productImage,
  amount: 1,
};

const AppProvider = ({ children }) => {
  const initialState = {
    amount: 1,
    total: cartItem.price,
    cart: cartItem,
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);


  const handleShow = () => setShow(true);
  const increase = () => {
    dispatch({ type: 'INCREASE' });
  };

  const decrease = () => {
    if (state.amount > 1) {
      dispatch({ type: 'DECREASE' });
    }
  };
   const remove = ()=> {
      dispatch({type: 'DELETE'})
   }

  return (
    <AppContext.Provider value={{ ...state, increase, decrease , remove, show, setShow, handleShow}}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useGlobalContext };
