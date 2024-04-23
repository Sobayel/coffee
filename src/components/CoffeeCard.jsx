import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const {_id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`https://coffee-store-server-14y9ooz5h-sobayel-44b8503d.vercel.app/coffee/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                         "Deleted!",
                         "Your Coffee has been deleted.",
                         "success"
                      );
                      const remaining = coffees.filter(cof => cof._id !== _id)
                      setCoffees(remaining);
                }
            })
            }
          });
    }

    return (
        <div className="card card-side bg-slate-300 shadow-xl">
            <figure><img className=" w-96 h-60" src={photo} alt="Movie" /></figure>
            <div className=" flex justify-between w-full px-4 items-center">
                <div>
                    <h2 className="card-title text-2xl text-red-700">Name:{name}</h2>
                    <p className="text-xl font-semibold">Price: {quantity}</p>
                    <p className="text-xl font-semibold">Supplier: {supplier}</p>
                    <p className="text-xl font-semibold">Taste:  {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <button className="btn btn-active">VIEW</button>
                        <Link to={`updateCoffee/${_id}`}><button className="btn">EDIT</button></Link>
                        <button onClick={()=>handleDelete(_id)} className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;