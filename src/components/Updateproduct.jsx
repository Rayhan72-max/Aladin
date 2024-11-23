import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Updateproduct = (props) => {
    const oldProduct = useLoaderData();
    
    const handleUpdateItem = (e) =>{
        e.preventDefault()
        
        const product = {
        name : e.target.name.value,
        quantity : e.target.quantity.value,
        supplier : e.target.supplier.value,
        color : e.target.color.value,
        details: e.target.details.value,
        category : e.target.category.value,
        photo_url : e.target.url.value
        }
        
        // posting to server
         fetch(`https://aladin-ashy.vercel.app/product/${oldProduct._id}`,{
        method: "PUT",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(product) 
        })
        .then(res => res.json())
        .then(data=>{
            if(data.acknowledged){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        } ) 
        
}
    return (
        <div>
            <div className='bg-rose-50'>

                <h1 className='text-3xl font-semibold'>Update Product</h1>
                <p className='m-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sint tempora laborum ipsa eligendi. Cum corrupti laudantium veritatis inventore, repudiandae similique maiores ea commodi vitae, corporis incidunt magnam sed iste.
                    Ipsam iste cum tempora facilis, voluptates corporis sapiente perferendis quis natus odit maxime ullam laborum. Provident, commodi consequuntur adipisci corrupti facere eum voluptatum fugit est laboriosam quibusdam in at soluta.</p>
                <form action="" onSubmit={handleUpdateItem} className='grid grid-cols-2 gap-x-12 w-3/4 m-auto p-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Product Name</span>
                        </div>
                        <input type="text"  name='name' value={oldProduct.name} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Quantity</span>
                        </div>
                        <input type="text" name="quantity" value={oldProduct.quantity} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Supplier Name</span>
                        </div>
                        <input type="text" name="supplier" value={oldProduct.supplier} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">color</span>
                        </div>
                        <input type="text" name="color" value={oldProduct.color} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">category</span>
                        </div>
                        <input type="text" name="category" value={oldProduct.category} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" name="details" value={oldProduct.details} className="input input-bordered w-full" />
                    </label>
                    <label className=' w-full col-span-2'>
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="url" value={oldProduct.photo_url} className="input input-bordered w-full" />
                    </label>
                    <label className=' w-full col-span-2'>
                        <input type="submit" value="Update" className="btn btn-block border-blue-500 mt-4 w-full" />
                    </label>
                </form>
            </div>

        </div>
    );
};

export default Updateproduct;