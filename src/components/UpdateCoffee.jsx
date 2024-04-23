import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, details, category, name, quantity, supplier, taste, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name, quantity, supplier,taste, category, details, photo};
        console.log(updatedCoffee);

        fetch(`https://coffee-store-server-14y9ooz5h-sobayel-44b8503d.vercel.app/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    return (
        <div className="bg-[#F4F3F0] py-5 px-24">
        <h2 className="text-4xl font-bold text-blue-500 flex justify-center">UpDate Coffee Details</h2>
        <form onSubmit={handleUpdateCoffee}>
            <div className="md:flex gap-10 mt-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Coffee Name" defaultValue={name}
                        className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity"
                        className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex gap-10 mt-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier Name"
                        className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="taste" defaultValue={taste} placeholder="Enter Coffee Taste"
                        className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex gap-10 mt-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" defaultValue={category} placeholder="Enter Coffee Category"
                        className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" defaultValue={details} placeholder="Enter Coffee Details"
                        className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="mt-4">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter Coffee Photo URL"
                        className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="mt-5">
                <input type="submit" value="Update Coffee" className="w-full bg-slate-500 btn text-xl font-semibold" />
            </div>
        </form>
    </div>
    );
};

export default UpdateCoffee;