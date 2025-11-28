'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import { Navbar, Nav, Button, Offcanvas, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { MDBIcon, MDBBtn, MDBBadge } from 'mdb-react-ui-kit';
function AppHeader() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            {/* Navbar */}
            <Navbar fixed='top' expand="lg" className=" flex-column p-0 bg-body-tertiary color-orange" >
                {/* Header Box */}
               
                <div className="w-100">
                    <img
                        alt=""
                        src="/img/banner-header.png"
                        className="d-inline-block align-top img-header-banner"
                    />{' '}
                </div>
                <Container className=''>
                    <Navbar.Brand  >
                        <Link href={'/'}
                            style={{ width: "50px", height: "100%" }}
                        >
                            <img
                                alt=""
                                src="/img/HD_Logo.png"
                                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                className="d-inline-block align-top"
                            />{' '}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <Link href="/" className='nav-link color-text'>Trang chủ</Link> */}
                            <Link href="/products" className='nav-link'>Sản phẩm</Link>
                            <Link href="/news" className='nav-link'>Tin tức</Link>
                            <Link href="/contact" className='nav-link'>Liên hệ</Link>
                            <Form className="d-flex pl-8" >
                                <Form.Control
                                    type="search"
                                    placeholder="Bạn cần tìm?"
                                    className="me-2"
                                    aria-label="Search" style={{ width: "500px" }}
                                />
                                <Button variant="light"><MDBIcon fas icon="search" /></Button>
                            </Form>
                        </Nav>
                        <MDBBtn color='light' className='me-4'>
                            <MDBIcon fas icon="cart-plus" />
                        </MDBBtn>
                    </Navbar.Collapse>
                </Container>
                <div className="w-100" style={{ backgroundColor: "white" }}>
                    <Container>
                        <Nav
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link href="/" className='nav-link '>Trang chủ</Link>
                            <Link href="/products" className='nav-link'>Sản phẩm</Link>
                            <Link href="/news" className='nav-link'>Tin tức</Link>
                            <Link href="/contact" className='nav-link'>Liên hệ</Link>
                            
                        </Nav>
                    </Container>
                </div>
            </Navbar>
            {/* Mobile Navbar */}
            <Navbar fixed='top' bg="light" className="flex-column p-0  d-lg-none">
                <div className="">
                    <img
                        alt=""
                        src="/img/banner-header.png"
                        className="d-inline-block align-top img-header-banner"
                    />{' '}
                </div>
                <Container>
                    <Navbar.Brand  >
                        <Link href={'/'} className='navbar-brand'>
                            <img
                                alt=""
                                width="60"
                                height="60"
                                src="/img/HD_Logo.png"
                                className="d-inline-block align-top "
                            />{' '}
                        </Link>
                    </Navbar.Brand>
                    <Button variant="primary" onClick={handleShow}>
                        <i className="fas fa-bars"></i>
                    </Button>
                </Container>
            </Navbar>

            {/* Offcanvas Sidenav */}
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#category1">Category 1</Nav.Link>
                        <Nav.Link href="#category2">Category 2</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                        <MDBBtn outline color='secondary' className='me-4 w-25 mb-3'>
                            <MDBIcon fas icon="cart-plus" />
                            <MDBBadge className='ms-2' style={{ color: '#285192', fontSize: "12px" }}>
                                8
                            </MDBBadge>
                        </MDBBtn>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default AppHeader;
