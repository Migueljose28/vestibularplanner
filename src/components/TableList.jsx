
const days = [ "Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta","Sábado"];
const generateHours = (start, end, sleepStart, sleepEnd) => {
    const hours = [];
  
    for (let i = start; i <= end; i++) {
      if (i > sleepStart || i < sleepEnd) {
        console.log("sleepStart", sleepStart);
      }else{
        hours.push(`${String(i).padStart(2, "0")}:00`);
      }
    }
  
    return hours;
  };

export default function TableList({dados, className}){

    
      const start = dados[0]?.sleepstart;
      const end = dados[0]?.sleepend;
      const hours = generateHours(0, 23, start, end); // Exclui horários entre 00:00 e 06:00
     
    
    return(
<>

<div className= {`overflow-x-auto p-4 ${className}`}>
      <table className="w-full border text-black border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-gray-200">Horas</th>

            {days.map((day) => (
              <th key={day} className="border border-gray-300 p-2 bg-gray-200">
                {day}
              </th>
              
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td className="border border-gray-300 p-2 bg-gray-100">{hour}</td>
              {days.map((day) => (
                <td key={day + hour} className="border border-gray-300 p-2 hover:bg-gray-100"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div> 
  
</>


)


}