
import './App.css';
import axios from 'axios';
import { useState } from "react";


function App() {
  const [dados, setDados] = useState({}); 

  const handleSubmit = async(formData) => {
    const data = formData.get("data");
    const materias = formData.get("materias");

    const dayweek = formData.get("weekday");  
    const time = formData.get("hours");  
    
    try{
      const response = await axios.post('http://127.0.0.1:3000/cronograma', 
        {
          data: data,
          materias: [materias],
          dayweek: ["Segunda-feira", "Quarta-feira"],
          time: "14:00"
        }, 
        {
          headers: {
            "Content-Type": "application/json",
          },
        });

      if(response){
        console.log(response);
        console.log("deu certo");
        return showcronograma();
      }
    } catch {
      console.log("erro ao enviar")

    }
  
    //console.log(data, materias, weekday, hours)
};
async function showcronograma() {

  try{
    const response = await axios.get('http://127.0.0.1:3000/cronograma');

    if(response){
      for (let i = 0; i < response.data.length; i++) {
        console.log(response.data[i]);
        
        setDados((prevDados) => ({ ...prevDados, ...response.data[i]}));//prevDados é os dados atual
        console.log(dados)
      }
      
      
      return console.log("deu mais que certo!", dados);

}} catch{
  console.error("erro grave")
}
}


  return (
    <>
    <p>Nome: </p>

<div  className="flex justify-center mt-48 ">
<button className="btn bg-white text-black hover:bg-green-700 hover:text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box ">
    <h3 className="font-bold text-lg">Crie!</h3>
       <div className="modal-action flex justify-center ">


      <form action={handleSubmit} className="flex flex-col justify-center">
       

        <label className="flex flex-col ">
          Data da Prova:
          <input type="date" className="bg-white text-black" name="data" />
        </label>
        <label className="flex flex-col">
          materias:
          <input type="text" className="bg-white text-black" name="materias" />
        </label>
        <label className="flex flex-col">
          Dias disponiveis na semana:
          <input type="text" className="bg-white text-black" name="weekday" />
        </label>
        <label className="flex flex-col">
          Horas por Dias:
          <input type="text" className="bg-white text-black" name="hours" />
        </label>

        <input type="submit" className="btn bg-success"  value="Enviar" />
    

        
      </form>
    </div>
  </div>
</dialog>
</div>
    </>
  )
}

export default App
