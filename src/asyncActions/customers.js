import { addManyCustomerAction } from "../store/customerReducer"

//экспортируемая функция запроса на скачивание множества потребителей с сервера
export const fetchCustomers = () => 
{
    return function(dispatch) 
    {
        //делаем запрос на скачивание множества потребителей с сервера
        fetch("https://jsonplaceholder.typicode.com/users")
        //фиксируем полученный результат
        .then(response => response.json())
        //отправляем полученный результат в редюсер потребителей
        .then(json => dispatch(addManyCustomerAction(json)))
    }
}