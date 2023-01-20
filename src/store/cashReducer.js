//начальное состояние счета
const defaultState = 
{
    cash: 5
}

export const cashReducer = (state = defaultState, action) => 
{
    switch (action.type) 
    {
        //по этой метке увеличиваем значение счета на величину action.payload и полученное состояние отправлем в хранилище store
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload}
        //по этой метке уменьшаем значение счета на величину action.payload и полученное состояние отправлем в хранилище store
        case "REMOVE_CASH":
            return {...state, cash: state.cash - action.payload}
        default:
            return state;
    }
}
