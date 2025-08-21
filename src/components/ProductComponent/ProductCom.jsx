import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductCom = () => {

    const [randomProduct, setRandomProduct] = useState([]);

    const fetchProductdata = async () => {
        const result = await axios.get("https://fooapi.com/api/products");
        // console.log(result);
        // console.log(result.data.data);
        setRandomProduct(result.data.data);
    }

    useEffect(() => {
        fetchProductdata();
    }, []);

    return (
        <>
            <div className="album py-5 bg-body-tertiary">
                <div className="container"> <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        randomProduct.map((product, index) => {
                            console.log(product);
                            return (
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <div className="card-body">
                                            <h4 style={{ color: 'darkmagenta' }}>{product.title}</h4>
                                            <p className="card-text">{product.description}</p>
                                            <p style={{ color: 'blue' }}>Brand : {product.brand}</p>
                                            <p style={{ color: 'aqua', fontWeight: 'bold' }}>Price : {product.price}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                </div>
                                                <small className="text-body-secondary" style={{ fontWeight: 'bold' }}>{product.rating}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </>
    )
}

export default ProductCom
