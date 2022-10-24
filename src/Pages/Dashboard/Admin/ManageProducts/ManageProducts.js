import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        fetch('https://ahnaf-shoe.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isDeleted])


    // handle delete or cencel product fuction 
    const handleCancelOrder = id => {
        setIsDeleted(false);

        swal({
            title: "Are you sure to delete?",
            text: "Once you deleted, you can't recover your product.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://ahnaf-shoe.herokuapp.com/products/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const restProduct = products.filter(order => order._id !== id);
                                setProducts(restProduct);
                                setIsDeleted(true);
                            }
                        });
                    swal("Your product is deleted.!)", {
                        icon: "success",
                    });
                } else {
                    swal("Your product is not deleted!");
                }
            });

    }
    return (
        <div style={{ width: '100%', minHeight: '100vh' }} className="my-2">
            <div className="row mx-auto">
                {
                    products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                        handleCancelOrder={handleCancelOrder}
                    />)
                }

            </div>
        </div>
    );
};

export default ManageProducts;