
import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import TableList from './components/TableList';
import Status from './components/Status';

function App() {
  const [dados, setDados] = useState({}); 
 
  useEffect(() => {
    console.log("sucessuful",dados);
  }, [dados]);


  const handleCreate = async(formData) => {
    const data = formData.get("data");
    const materias = formData.get("materias");

    //const dayweek = formData.get("weekday");  
    //const time = formData.get("hours");  
    const sleepstart = formData.get("sleepstart").split(":")[0];
    const sleepend = formData.get("sleepend").split(":")[0];
    
    try{
      const response = await axios.post('http://127.0.0.1:3000/cronograma', 
        {
          data: data,
          materias: [materias],
          dayweek: ["Segunda-feira", "Quarta-feira"],
          time: "14:00",
          sleepstart,
          sleepend
        }, 
        {
          headers: {
            "Content-Type": "application/json",
          },
        });

      if(response){
        console.log(response);
        console.log("response succefull POST");
        return showcronograma();
      }
    } catch {
      console.log("erro ao enviar")

    }
  
    //console.log(data, materias, weekday, hours)
};

const handleModify = async(formData) => {
  const data = formData.get("data");
  const materias = formData.get("materias");

  const dayweek = formData.get("weekday");  
  //const time = formData.get("hours");  
  const sleepstart = formData.get("sleepstart").split(":")[0];
  const sleepend = formData.get("sleepend").split(":")[0];

  console.log(formData);
  try{
    const response = await axios.put(`http://127.0.0.1:3000/cronograma/${dados[0]?.id}`, 
      {
        data: data,
        materias: materias.split(","),
        dayweek: dayweek.split(","),
        time: "14:00",
        sleepstart,
        sleepend
      }, 
      {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response) {
        console.log("Cronograma modificado com sucesso");
        return showcronograma();
      } else {
        console.log("Erro na resposta da API");
      }
  } catch (error) {
    console.log("Erro ao enviar", error);
  }

  //console.log(data, materias, weekday, hours)
};

async function deletarcronograma() {
  try{
    const response = await axios.delete(`http://127.0.0.1:3000/cronograma/${dados[0]?.id}`);
    if(response){
      console.log("sucessuful delete")
      return showcronograma();}

}catch{
  console.log("não foi possivel deletar")
}

};






async function showcronograma() {

  try{
    const response = await axios.get('http://127.0.0.1:3000/cronograma');

    if(response){
      setDados(response.data);

      for (let i = 0; i < response.data.length; i++) {
        console.log(response.data[i]);
      }
      return "successfully";
}} catch{
  console.error("erro grave")
}
}





  return (
    <>

    

    <p>Nome: {dados[0]?.id}</p>
    <button onClick={showcronograma}>click</button>

<div  className="flex justify-center mt-48 ">
<Status dados={dados === null || dados.length === 0 ? "---" : dados[0]?.data } title={"Dia da prova"} description ={"21% more than last month"}/>
  
<Status dados={dados === null || dados.length === 0 ? "---": dados[0]?.Totaldias } title={"Total de Dias até a prova"} description ={"21% more than last month"}/>
  
<button
  className="btn bg-white text-black hover:bg-green-700 hover:text-white"
  onClick={() => {
    // Exibe o modal
    document.getElementById('my_modal_1').showModal();
  }}
>
  {dados.length === null || dados.length === 0 ? "Criar" : "Modificar"}
</button>
<button 
  className="btn bg-white text-black hover:bg-green-700 hover:text-white" onClick={() => 
  {deletarcronograma()}
  }
>
  Deletar
</button>


<dialog id="my_modal_1" className="modal">
  <div className="modal-box ">
    <h3 className="font-bold text-lg">Crie!</h3>
       <div className="modal-action flex justify-center ">


  <form onSubmit={(e) => {
      e.preventDefault(); // Previne o envio padrão do formulário

      // Exibe o modal
      document.getElementById('my_modal_1').showModal();

      // Cria o FormData a partir do formulário
      const formData = new FormData(e.target);

      // Verifica o texto do botão e executa a ação correspondente
      if (dados.length === 0) {
        handleCreate(formData); // Passa o FormData para handleCreate
      } else {
        handleModify(formData); // Passa o FormData para handleModify
      }
    
  }} className="flex flex-col justify-center">
       

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
        <label className="flex flex-col">
          Periodo de Sono:
          <div className="flex flex-row w-full"> 
          <input type="time"  name="sleepstart" className="bg-white text-black" />
           a
          <input type="time" name="sleepend" className="bg-white text-black" />
          </div>
        </label>

        <input type="submit" className="btn bg-success"  value="Enviar" />
    

        
      </form>
    </div>
  </div>
</dialog>
</div>
<TableList dados={dados} className={dados.length === null || dados.length === 0 ? "hidden" : ""}/>
    </>
  )
}

export default App
