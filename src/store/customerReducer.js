//начальное состояние списка потребителей
const defaultState = {
    customers: []
}

//метка добавления потребителя
const ADD_CUSTOMER = "ADD_CUSTOMER";
//метка добавления большого количества потребителей с сервера
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
//метка удаления потребителя из текущего списка потребителей
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export const customerReducer = (state = defaultState, action) => 
{
    switch (action.type) 
    {
        //по метке ADD_MANY_CUSTOMERS составляем список потребителей, который передается в хранилище store 
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        //по метке ADD_CUSTOMER составляем список потребителей, который передается в хранилище store 
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        //по метке REMOVE_CUSTOMER составляем список потребителей, который передается в хранилище store
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state;
    }
}

//запрос на добавление в список потребителей одного нового потребителя
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
//запрос на добавление в список потребителей скаченного множества потребителей с сервера
export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});
//запрос на удаление из имеющегося списка потребителей конкретного потребителя с идентификатором id
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});