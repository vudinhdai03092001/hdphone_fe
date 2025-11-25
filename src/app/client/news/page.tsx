'use client'
import { Row, Image, Container } from 'react-bootstrap';
import AppBanner from '@/components/app.banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from "react";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBInputGroup,
    MDBCol,
    MDBBtn,
    MDBPagination, MDBPaginationItem, MDBPaginationLink,
    MDBBadge, MDBListGroup, MDBListGroupItem
} from 'mdb-react-ui-kit';

const AppNews = () => {
    const title = 'Tin tức'
    const background = '/img/banner4.jpg'
    return (
        <>
            <AppBanner title={title} background={background} />
            <Container className='mt-4' >
                <div className="row">
                    <div className="col-md-3">
                        <MDBBtn className='mx-2 mb-4' color='danger'>
                            Bài viết mới
                        </MDBBtn>
                        <MDBListGroup light  >
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Subheading</div>Cras justo odio
                                </div>
                                <MDBBadge pill light>
                                    14-2-2001
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Subheading</div>Cras justo odio
                                </div>
                                <MDBBadge pill light>
                                    14-2-2001
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Subheading</div>Cras justo odio
                                </div>
                                <MDBBadge pill light>
                                    14-2-2001
                                </MDBBadge>
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </div>
                    <div className="col-md-9">
                        <div className="row d-flex justify-content-end">
                            <div className="col-6">
                                <MDBInputGroup className='mb-3  ' >
                                    <input className='form-control' placeholder="Bài viết..." type='text' />
                                    <MDBBtn outline>Tìm kiếm</MDBBtn>
                                </MDBInputGroup></div>
                        </div>
                        <MDBCard className='col-12 mb-4'>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                    <MDBCardImage style={{ height: "200px", width: "100%", objectFit: 'cover' }} src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </MDBCardText>
                                        <MDBCardText>
                                            <MDBBtn outline className='mx-2' color='secondary'>
                                                Xem thêm
                                            </MDBBtn>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                        <MDBCard className='col-12 mb-4'>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                    <MDBCardImage style={{ height: "200px", width: "100%", objectFit: 'cover' }} src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </MDBCardText>
                                        <MDBCardText>
                                            <MDBBtn outline className='mx-2' color='secondary'>
                                                Xem thêm
                                            </MDBBtn>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                        <MDBCard className='col-12 mb-4'>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                    <MDBCardImage style={{ height: "200px", width: "100%", objectFit: 'cover' }} src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </MDBCardText>
                                        <MDBCardText>
                                            <MDBBtn outline className='mx-2' color='secondary'>
                                                Xem thêm
                                            </MDBBtn>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                        <div className="col-12 d-flex justify-content-center">
                            <nav aria-label='...'>
                                <MDBPagination className='mb-0'>
                                    <MDBPaginationItem disabled>
                                        <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>
                                            <span aria-hidden='true'>«</span>
                                        </MDBPaginationLink>
                                    </MDBPaginationItem>
                                    <MDBPaginationItem>
                                        <MDBPaginationLink href='#'>1</MDBPaginationLink>
                                    </MDBPaginationItem>
                                    <MDBPaginationItem active aria-current='page'>
                                        <MDBPaginationLink href='#'>
                                            2 <span className='visually-hidden'>(current)</span>
                                        </MDBPaginationLink>
                                    </MDBPaginationItem>
                                    <MDBPaginationItem>
                                        <MDBPaginationLink href='#'>3</MDBPaginationLink>
                                    </MDBPaginationItem>
                                    <MDBPaginationItem>
                                        <MDBPaginationLink href='#'>  <span aria-hidden='true'>»</span></MDBPaginationLink>
                                    </MDBPaginationItem>
                                </MDBPagination>
                            </nav>
                        </div>
                    </div>
                </div>
            </Container>

        </>


    )
}
export default AppNews