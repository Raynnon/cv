import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class Header extends Component {
    render() {
        return (
            <Row as="header">
                <Col lg="6">
                    <div className="header-text">
                        <h3 className="text-primary"><span className="text-danger">HELLO</span>, I'M FLORIAN ASSANTE.</h3>
                        <h1 className="text-primary font-weight-bold">Web Developer</h1>
                        <p className="text-secondary font-weight-bold">Front-end, Webmarketing & love to play Video Games.</p>
                    </div>
                    <div>
                        <Button type="button" variant="danger" href="#" className="btn-pink mr-3 shadow">Hire me</Button>
                        <Button type="button" variant="outline-warning"  href="#" className="btn-pink mr-3">Get CV</Button>
                    </div>
                </Col>
                <Col lg="4">
                    <Image src={require('../images/florian-assante.png')} alt="Florian Assante" fluid />
                </Col>
                <Col lg="2" as="aside" id="social-networks" className="bg-white pt-1 pb-1">
                    <Row>
                        <Col as="a" href="#">
                            <i class="fab fa-linkedin zoom text-info"></i>
                        </Col>
                        <Col as="a" href="#">
                            <i class="fab fa-github zoom"></i>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
