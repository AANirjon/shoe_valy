import React from 'react';
import useAuth from '../../Hooks/useAuth';

const User = () => {
    const { user } = useAuth();
    const { photoURL, displayName } = user;
    return (
        <div style={{ width: '100%', minHeight: '100vh' }}>
            <div className="row container mx-auto">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="container text-center border my-4 py-4">

                        <div>
                            {
                                photoURL
                                    ?
                                    <img width='80px' style={{ borderRadius: '50%' }} src={photoURL} alt="" />
                                    :
                                    <img width='80px' src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`} alt="" />
                            }
                        </div>
                        <div className="text-uppercase mt-3">
                            <h1>Hi <span className="text-danger">!</span></h1>
                            <h3 style={{ color: '#87b106' }}>{displayName}</h3>
                        </div>
                        <div>
                            <h5>Wellcome To Dashboard</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="mt-4">
                        <img className="img-fluid" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdMjBZDMagoVKY6T8dAGJLQn9TfQnUFrJQo4zkJXQZ5Q&s`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;