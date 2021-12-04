import './App.sass';
import Search from './components/search';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';


function Test_hook() {
  const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector( state => state.customers.customers)
    console.log(cash)

 const addCash = () => {
     dispatch({type:"ADD_CASH", payload: 5})
 }

 const addCustomer = (name) => {
     const customer = {
         name,
         id: Date.now(),
     }
     dispatch(addCustomerAction(customer))
 }

 const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
}
    return(
    <div> 
        <div>
            {cash}
        </div>
        <div>
            <button onClick={() => addCash()}>Пололнить счет</button>
            <button>Снять со счета</button>
            <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>


        </div>
        {customers.length > 0 ?
        <div>
            {customers.map(customer =>
                <div onClick={() =>removeCustomer(customer) }>
                    {customer.name}
                </div>
                )}
        </div>    
        :
        <div>
            Клиенты отсутствуют 
        </div>
    }
    </div>
);
};




export default Test_hook