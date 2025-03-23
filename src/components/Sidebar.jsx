
import viteLogo from '/src/assets/react.svg'

export default function Sidebar(){
    return (
        <>
      <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                <img src={viteLogo} alt="" />
                <h2 className="text-xl font-bold mb-4">John Doe</h2>
      
      
      
                <ul>
                  <li className="mb-2"><a href="#" className="hover:text-gray-300">Dashboard</a></li>
                  <li className="mb-2"><a href="#" className="hover:text-gray-300">Cronograma</a></li>
                  <li className="mb-2"><a href="#" className="hover:text-gray-300">Chat</a></li>
                  <li className="mb-2"><a href="#" className="hover:text-gray-300">Settings</a></li>
                </ul>
           </div>
        </>


    )
}