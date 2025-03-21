
import viteLogo from '/src/assets/react.svg'

export default function Sidebar(){
    return (
        <>
      
                <img src={viteLogo} alt="" />
                <h2 className="text-xl font-bold mb-4">John Doe</h2>
      
      
      
                <ul>
                  <li className="mb-2"><a href="#" className="hover:text-gray-300">Dashboard</a></li>
                  <li className="mb-2"><a href="#" className="hover:text-gray-300">Cronograma</a></li>
                  <li className="mb-2"><a href="#" className="hover:text-gray-300">Chat</a></li>
                  <li className="mb-2"><a href="#" className="hover:text-gray-300">Settings</a></li>
                </ul>
           
        </>


    )
}