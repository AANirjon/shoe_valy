import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import ReactStars from 'react-stars'
import './DetailsProduct.css';
import swal from 'sweetalert';

const DetailsProduct = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const { email, displayName } = user;
    const status = 'Pending';
    const [product, setProduct] = useState({});
    const { img, name, description, price, rating } = product;
    const history = useHistory();

    // display product details
    useEffect(() => {
        const url = `https://ahnaf-shoe.herokuapp.com/details/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);
console.log(product)
    // get user information 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const { phone, address, shipping, userName } = data;
        const orderInfo = { email, img, name, description, price, status, userName, phone, address, shipping };
        // console.log(orderInfo);
        axios.post('https://ahnaf-shoe.herokuapp.com/orders', orderInfo)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Good Job!",
                        text: "Thanks For Your Order!",
                        icon: "success",
                        button: "Go Home",
                    });
                    history.push('/home');
                    reset();
                }
            })
    }
    return (
        <div>
            <Header />
            <div className="container my-3 row mx-auto">
                <div style={{ backgroundColor: '#87b106' }} className="col-lg-6 col-md-6 col-12 p-4">
                    {
                        name ?
                            <div className="border py-3">
                                <div className="text-center mb-3 overflow-hidden">
                                    <img className="img-fluid img-style" src={img} alt="Details img" />
                                </div>
                                <div className="d-flex justify-content-around align-items-center p-lg-3 p-sm-1">
                                    <div>
                                        <h4 className="text-start">{name}</h4>
                                        {<ReactStars
                                            count={5}
                                            value={parseInt(rating)}
                                            size={28}
                                            color2={'#ffd700'} />
                                        }
                                    </div>
                                    <div>
                                        <h4 className="text-light fw-bold">$ {price}</h4>
                                        <p><small>(per peace)</small></p>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="text-center mt-3"><Spinner animation="border" variant="danger" /></div>
                    }

                </div>

                <div className="mx-auto col-lg-6 col-md-6 col-12 bg-dark p-5">
                    <div className="text-center text-white mb-5">
                        <h1>ORDER</h1>
                        <p>Are you ready to order?</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control my-3" type="text" value={displayName} {...register("userName")} required placeholder="User Name" />
                        <input className="form-control my-3" type="number" {...register("phone")} required placeholder="Phone" />
                        <textarea className="form-control my-3" {...register("address")} required placeholder="Address" />
                        <select className="form-control my-3" {...register("shipping", { required: true })}>
                            <option value="Urgent 1 Day Delivery">Urgent 1 Day Delivery</option>
                            <option value="3 Day Delivery">3 Day Delivery</option>
                            <option value="5 Day Delivery">5 Day Delivery</option>
                            <option value="10 Day Delivery">10 Day Delivery</option>
                        </select>

                        <button className="btn btn-primary w-100" type="submit"><span><i className="fas fa-cart-plus"></i></span> Order Now</button>
                    </form>
                </div>
            </div>
            <div className="container my-5 text-start">
                <hr />
                <div className="">
                    <h2>Overview</h2>
                    <p>{description}</p>
                </div>

                <hr className="w-50 " />

                <div className="my-5">
                    <h3>Included</h3>
                    <div className="row mt-3">
                        <div className="col-lg-6 col-md-6 col-12 text-color">
                            <p><span><i className="fas fa-check me-3"></i></span>Adjustable</p>
                            <p><span><i className="fas fa-check me-3"></i></span>Stable</p>
                            <p><span><i className="fas fa-check me-3"></i></span>Roomy enough</p>
                            <p><span><i className="fas fa-check me-3"></i></span>In good condition</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 text-color">
                            <p><span><i className="fas fa-times me-3 text-danger"></i></span>Additional Discuount</p>
                            <p><span><i className="fas fa-times me-3 text-danger"></i></span>100% guaranty</p>
                            <p><span><i className="fas fa-times me-3 text-danger"></i></span>Money Back</p>
                            <p><span><i className="fas fa-times me-3 text-danger"></i></span>Repiar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;