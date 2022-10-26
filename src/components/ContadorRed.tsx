import { useReducer } from "react";

const initialState= {
    contador:10,
}// ActionType son las acciones que va a usar el reducer
type ActionType=|{ type:"incrementar"}|
{type:"decrementar"}|
{type:"custom",payload:number}
const contaodorReducer=(state:typeof initialState, action:ActionType)=>{
    switch(action.type)
    {
        case "incrementar":
        return{
            ...state,
            contador: state.contador+1
        }
        case "decrementar":
        return{
            ...state,
            contador: state.contador-1
        }
        case "custom":
        return{
            ...state,
            contador: action.payload
        }
        default:
        return state;
    }
}
export const ContadorRed=()=>{
    const [contadorState,dispatch]= useReducer(contaodorReducer,initialState)
    return(
        
        <>
        <h2>Contador:{contadorState.contador}</h2>
        <button className="btn btn-outline-primary"
        onClick={()=> dispatch({type:"incrementar"})}>
        +1
        </button>
        <button className="btn btn-outline-warning"
        onClick={()=> dispatch({type:"decrementar"})}>
        -1
        </button>
        <button className="btn btn-outline-danger"
        onClick={()=> dispatch({type:"custom",payload:100})}>
        100
        </button>
        </>
    )
}