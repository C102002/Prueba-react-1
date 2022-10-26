import{useState} from "react"
import{useEffect} from "react"
import{useRef} from "react"
type TimeArgs={
    milisegundos:number,
}

export const Timer=({milisegundos}:TimeArgs)=>{
    const[segundos,setSegundos]=useState(0)
const ref=useRef<NodeJS.Timeout>();

    useEffect(()=>{
        ref.current &&clearInterval(ref.current)

        ref.current= setInterval(()=>setSegundos(s =>s+1),milisegundos);
        //Ese return es cuando se elimino el componente
    },[milisegundos])
    return(
        <div>
            <h4>Timer:<small>{segundos}</small></h4>
        </div>
    )
}