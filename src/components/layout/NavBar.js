//for dumb components we can use functional components
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>
                        Acme Staff Portal
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarNav'
                    >
                        <span className='navbar-toggle-icon' />
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/home'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/staff'>
                                    Staff
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar