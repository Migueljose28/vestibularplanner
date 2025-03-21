

const clients = [
    {id: 1, name: "Joe Doe", email: "joedoe@gmail.com", job: "Developer", rate: "100", isactive: true},
    {id:2,  name: "Joe1 Doe", email: "joedoe1@gmail.com", job: "Developer1", rate: "50", isactive: true},
    {id:3, name: "Joe2 Doe", email: "joedoe2@gmail.com", job: "Developer2", rate: "46", isactive: false},

]




export default function TableList(){
    return(
<>
            <div className="overflow-x-auto mt-10 rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Job</th>
                    <th>Rate</th>
                    <th>Status</th>
                </tr>
               
                </thead>
                <tbody  className="hover">
                {/* row 1 */}
                {clients.map((client) => (
                    <tr>
                    <th>{client.id}</th>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.job}</td>
                    <td>{client.rate}</td>

                    <button className={`btn rounded-full w-20 ${client.isactive ? `btn-primary`: `btn-outline-primary btn-ptimary`}`}>
                        {client.isactive ? "Active":"Inactive"}
                    </button>
                    <td>
                        <button className="btn btn-primary">Update</button>
                    </td>
                    <td>
                    <button className="btn btn-accent">Delete</button>
                    </td>

                </tr>
                ))}
                </tbody>
            </table>
            </div>



</>


)


}