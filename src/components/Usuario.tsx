import { useState } from "react";

interface User {
    uid:string;
    name:string;
}

export const Usuario=()=>{

const [user,setUser]=useState<User>();
const login=()=>{
    setUser({
        uid:"ABC1234",
        name:"Alfredo Fung"
    })

}
const tempUser:User={
    uid:"pepepepe",
    name:"hola"
}
    return(
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            <button
            className="btn btn-outline-primary"
            onClick={login}>Login
            </button>
            {
                (!user)
                ?<pre>No hay usuario
                </pre>
                :<pre> Si hay usuario</pre>
            }
            <pre>{JSON.stringify(user)}
            </pre>
        </div>
    )
}