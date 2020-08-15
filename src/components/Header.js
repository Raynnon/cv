import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class Header extends Component {
    render() {
        return (
            <Row as="header">
                <Col xl="6" className="my-auto">
                    <Container fluid>
                        <Row className="text-center">
                            <Col xl="12">
                                <h3 className="text-primary"><span className="text-danger">HELLO</span>, I'M FLORIAN ASSANTE.</h3>
                                <h1 className="text-primary font-weight-bold">Web Developer</h1>
                                <p className="text-secondary font-weight-bold">Front-end, Webmarketing & love to play Video Games.</p>
                            </Col>
                            <Col xl="12" className="mt-3">
                                <Button type="button" variant="danger" href="#" className="btn-pink mr-3 shadow">Hire me</Button>
                                <Button type="button" variant="outline-warning"  href="#" className="btn-pink">Get CV</Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xl="4" className="d-flex justify-content-center align-items-end">
                    <Image src={require('../images/florian-assante.png')} alt="Florian Assante" fluid className="florian mt-5" />
                </Col>
                <Col xl="2" as="aside" id="social-networks" >
                    <Container className="bg-white pt-3 pb-3 " fluid>
                        <Row className="text-center">
                            <Col as="a" href="#">
                                <i className="fab fa-linkedin zoom text-info"></i>
                            </Col>
                            <Col as="a" href="#">
                                <i className="fab fa-github zoom"></i>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        )
    }
}
