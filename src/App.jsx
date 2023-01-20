//вытаскиваем хуки useDispatch и useSelector
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() 
{
  //вытаскиваем компонент dispatch из хука useDispatch
  const dispatch   = useDispatch();
  //вытаскиваем состояние счета из хранилища store с помощью хука useSelector
  const cash       = useSelector(state => state.cash.cash);
  //вытаскиваем список потребителей из хранилища store с помощью хука useSelector
  const customers  = useSelector(state => state.customers.customers);

  //функция увеличения счета
  const addCash = (cash) => 
  {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  //функция уменьшения счета
  const removeCash = (cash) => 
  {
    dispatch({type: "REMOVE_CASH", payload: cash})
  }

  //функция добавления потребителя
  const addCustomer = (name) => 
  {
    //составляем информацию о добавляемом потребителе по его имени name и его идентификатору id
    const customer = 
    {
      name,
      id: new Date()
    }
    //делаем запрос на добавление потребителя
    dispatch(addCustomerAction(customer))
  }

  //функция удаления потребителя
  const removeCustomer = (customer) => 
  {
    //делаем запрос на удаление потребителя по его идентификатору customer.id
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className={"app"}>
      {/*Показываем общий баланс */}
      <div style={{fontSize:"3rem", marginBottom: 10}}>Balance: {cash}</div>
      <div style={{display: "flex"}}>
        {/*Кнопка пополнения счета */}
        <button onClick={() => addCash(Number(prompt()))}>Adding cash</button>
        {/*Кнопка снятия средств со счета */}
        <button onClick={() => removeCash(Number(prompt()))}>Withdraw from the account</button>
        {/*Кнопка добавления нового потребителя */}
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        {/*Кнопка получения всех потребителей из базы данных */}
        <button onClick={() => dispatch(fetchCustomers())}>Get customers from the database</button>
      </div>
      {customers.length > 0 ? 
        <div>
          {customers.map(customer => 
            //выводим имя каждого потребителя с возможностью его удаления из текущего списка потребителей
            <div onClick={() => removeCustomer(customer)} style={{ fontSize: "2rem", border: "1px solid black", padding: "1px",marginTop: 5}}>
              {/*само имя каждого потребителя */}
              {customer.name}
            </div>
          )}
        </div> 
        :
        //клиентов не осталось, либо нет никого либо все удалены
        <div style={{fontSize: "2rem", marginTop: 20}}>
          There are no clients!
        </div>
      } 
    </div>
  );
}

export default App;