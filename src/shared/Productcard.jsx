import { useEffect } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Productcard = ({ product,newProducts,setproducts }) => {

    const handleUpdate = () => {

    }

    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://aladin-ashy.vercel.app/product/${id}`, {
        method: "DELETE"})
        .then(res => res.json())
        .then((data) =>
            {if(data.deletedCount>0){
            console.log("delete is working")
            const remaining = newProducts.filter(pro=> pro._id !== id )
             setproducts(remaining);     
        }})
        
    }


    return (
        <div className='flex gap-2 justify-around items-center bg-rose-50 p-4'>
            <img src={product.photo_url} alt="" />
            <div>
                <h1>{product.name}</h1>
                <p>{product.details}</p>
            </div>
            <div className="flex flex-col gap-3 items-center">
                <button>Watch</button>
                <Link to={`/updateproduct/${product._id}`}><button title="update"><GrUpdate/></button></Link>
                <button onClick={() => handleDelete(product._id)}><MdDelete /></button>
            </div>
        </div>
    );
};

export default Productcard;