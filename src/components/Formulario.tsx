import { useForm } from "../hooks/useForm"
interface FormData{
    email:string;
    nombre:string;
    edad:number;
}
export const Formulario=()=>{
    const {formulario,handleChange}=useForm<FormData>({
        email:'fernnando@gmail',
        nombre:'fernando',
        edad:35
    })
    const {edad,nombre,email}=formulario
   // const [formulario,setFormulario]=useState ({
    //    email:"",
    //    nombre:"",
    //})
    //const handleChange=({target}:ChangeEvent<HTMLInputElement>)=>{
    //    const {name,value}=target
    //    setFormulario({
    //        ...formulario,
    //        [name]:value
    //    });
    //}
    return(
        <form autoCapitalize="off">
            <div className="mb-3">
            <label className="form-label">
            Email:
            <input type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={handleChange}>
            </input>
            </label>
            </div>

            <div className="mb-3">
            <label className="form-label">
            Nombre:
            <input type="name"
            className="form-control"
            name="nombre"
            value={nombre}
            onChange={handleChange}>
            </input>
            </label>
            </div>
            <div className="mb-3">
            <label className="form-label">
            edad:
            <input type="number"
            className="form-control"
            name="edad"
            value={edad}
            onChange={handleChange}>
            </input>
            </label>
            </div>
            <pre>
            {JSON.stringify(formulario)};
            </pre>
        </form>
    )
}