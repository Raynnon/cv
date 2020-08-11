import React, { Component } from 'react'
import imageFlorian from '../images/florian-assante.png'
import linkedIn from '../images/linkedin-logo.png'
import github from '../images/github-logo.png'
import '../styles/custom.scss';
import '../app.scss';
import '../styles/header.css'

export default class Header extends Component {
    render() {
        return (
            <header className="row">
                <div class="col-5 mt-4">
                    <h3 className="text-primary"><span className="text-danger">HELLO</span>, I'M FLORIAN ASSANTE.</h3>
                    <h1 className="text-primary font-weight-bold">Web Developer</h1>
                    <p className="text-secondary font-weight-bold">Front-end, Webmarketing & love to play Video Games.</p>
                    <div className="double-button justify-content-start">
                        <button type="button" className="btn-pink btn btn-large btn-danger btn-rounded font-weight-bold shadow">Hire me</button>
                        <button type="button" className="btn-pink offset-md-1 btn btn-outline-warning font-weight-bold">Get CV</button>
                    </div>
                </div>
                <div className="col-5">
                    <img src={ imageFlorian } alt="Florian Assante" className="img-fluid" />
                </div>
                <nav id="social-networks" className="col-2 bg-white">
                    <ul className="row mb-0">
                        <li className="col-5">
                            <button className="btn rounded-circle ">
                                <img src={github} alt="GitHub Logo" className="zoom img-fluid rounded-circle shadow-sm" />
                            </button>
                        </li>
                        <li className="col-5">
                            <button className="btn rounded-circle">
                                <img src={linkedIn} alt="LinkedIn Logo" className="zoom img-fluid rounded-circle shadow-sm" />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
