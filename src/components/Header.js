import React, { Component } from 'react'
import imageFlorian from '../images/florian-assante.png'
import '../styles/header.css'

export default class Header extends Component {
    render() {
        return (
            <header className='row ml-5'>
                <div class="col-5 mt-4">
                    <h2 className='text-primary'><span className='text-danger'>HELLO</span>, I'M FLORIAN ASSANTE.</h2>
                    <h1 className='text-primary font-weight-bold'>Web Developer</h1>
                    <p className='text-secondary font-weight-bold'>Front-end, Webmarketing & love to play Video Games.</p>
                    <div className='row justify-content-start'>
                        <button type='button' className='btn btn-danger btn-rounded col-3 pr-1'>Hire me</button>
                        <button type='button' className='offset-md-1 btn btn-outline-warning col-3'>Get CV</button>
                    </div>
                </div>
                <img src={ imageFlorian } alt='Florian Assante' className='col-4' />
                <nav className='col-3'>
                    <ul>
                        <li>
                            <img src='#' alt='GitHub Logo' />
                        </li>
                        <li>
                            <img src='#' alt='LinkedIn Logo' />
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
