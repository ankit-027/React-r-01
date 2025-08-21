import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product" className="nav-link px-2 text-body-secondary">Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/movie" className="nav-link px-2 text-body-secondary">Movie</Link>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">© 2025 Company, Inc</p>
            </footer>
        </>
    )
}

export default Footer
