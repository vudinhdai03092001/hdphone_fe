'use client'
import AppAdvertisements from '@/components/app.advertisements';
import { Container, ListGroup, Carousel } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCol,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBListGroup, MDBListGroupItem,
    MDBRadio,
    MDBIcon,
    MDBRow,
    MDBBadge,
    MDBCardText
} from 'mdb-react-ui-kit';
import {
    TabletOutlined,
    MobileOutlined
} from '@ant-design/icons';
import { useGetCategoriesActiveQuery } from '@/store/category/category.service';
import { useEffect, useState } from 'react';
import AppItemProduct from '@/components/app.product';
import AppCategory from '@/components/app.category';
import { faLightbulb, faMobileScreen, faScrewdriverWrench, faTabletScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import { Navigation } from "swiper/modules";
export default function Home() {
    // const { data: listCateActive, isLoading } = useGetCategoriesActiveQuery();
    // if (!listCateActive) {
    //     return <div>Lỗi truy vấn...</div>
    // }
    // if (isLoading) return <p>Loading...</p>;
    return (
        <>
            {/* <AppAdvertisements /> */}
            <div className="d-none d-md-block">
                <Container className=' mt-4' style={{ paddingTop: "120px" }}>
                    <div className="row">
                        <div className="col-md-3">
                            {/* <AppCategory categories={listCateActive?.data} /> */}
                            <div className="price-list ">
                                <MDBListGroup light small>
                                    <MDBListGroupItem > <FontAwesomeIcon icon={faMobileScreen} className="text-blue-500 text-3xl font-medium" />  Điện thoại cũ</MDBListGroupItem>
                                    <MDBListGroupItem><FontAwesomeIcon icon={faTabletScreenButton} className="text-blue-500 text-3xl" />  Máy tính bảng</MDBListGroupItem>
                                    <MDBListGroupItem><FontAwesomeIcon icon={faScrewdriverWrench} className="text-blue-500 text-3xl" />  Sửa chữa điện thoại</MDBListGroupItem>
                                    <MDBListGroupItem> <FontAwesomeIcon icon={faHeadphones} className="text-4xl text-blue-700" />  Linh kiện</MDBListGroupItem>
                                    <MDBListGroupItem> <FontAwesomeIcon icon={faLightbulb} />  Blog thủ thuật</MDBListGroupItem>
                                </MDBListGroup>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 "
                                        src="/img/banner2.webp"
                                        alt="First slide"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/img/banner.webp"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/img/banner3.webp"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className='col-md-3'>
                            <div className='d-flex align-items-center'>
                                <img
                                    src="/img/banner3.webp"
                                    alt=''
                                    style={{ width: '100%', }}
                                />
                            </div><><br /></>
                            <div className='d-flex align-items-center '>
                                <img
                                    src="/img/banner2.webp"
                                    alt=''
                                    style={{ width: '100%', }}
                                />
                            </div>
                        </div>
                    </div>
                    <MDBRow className='mt-5 '>
                        <MDBCol xl={3} lg={6} className='mb-4'>
                            <MDBCard>
                                <MDBCardBody>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='/img/phone.webp'
                                            alt=''
                                            style={{ width: '100px', height: '100px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Tư vấn</p>
                                            <p className='text-muted mb-0'>Chăm sóc khách hàng</p>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol xl={3} lg={6} className='mb-4 '>
                            <MDBCard>
                                <MDBCardBody>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='/img/tax.png'
                                            alt=''
                                            style={{ width: '100px', height: '100px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Tư vấn</p>
                                            <p className='text-muted mb-0'>Chăm sóc khách hàng</p>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol xl={3} lg={6} className='mb-4'>
                            <MDBCard>
                                <MDBCardBody>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='/img/shipment1.jpg'
                                            alt=''
                                            style={{ width: '100px', height: '100px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Tư vấn</p>
                                            <p className='text-muted mb-0'>Chăm sóc khách hàng</p>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol xl={3} lg={6} className='mb-4'>
                            <MDBCard>
                                <MDBCardBody>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='/img/pay.png'
                                            alt=''
                                            style={{ width: '100px', height: '100px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Tư vấn</p>
                                            <p className='text-muted mb-0'>Chăm sóc khách hàng</p>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </Container >
            </div>
            {/* <AppAdvertisements></AppAdvertisements> */}

            <Container className='mt-4'>
                <MDBBtn className='mx-2' color='danger'>
                    Điện thoại cũ
                </MDBBtn>
                {/* <div className='mt-4' style={{ display: "flex", gap: "10px", }}>
                    <div style={{ flex: 1, }}>
                        <img src="/img/banner-cate.webp" alt="" style={{ width: "100%", height: "auto", maxWidth: "330px", objectFit: "contain" }} />
                    </div>
                    <div style={{ flex: 3, }}>
                        <div style={{ display: "flex", gap: "10px" }}>

                             <div className="col-md-3 mb-4 " > <AppItemProduct /></div>
                            <div className="col-md-3 mb-4" > <AppItemProduct /></div>
                            <div className="col-md-3 mb-4 " > <AppItemProduct /></div>
                            <div className="col-md-3 mb-4 " > <AppItemProduct /></div> 
                        </div>
                    </div>  
                </div> */}

                <div className='mt-4' style={{ display: "flex", gap: "10px" }}>
                    {/* Cột trái */}
                    <div style={{ flex: 1, width: "100%" }}>
                        <img
                            src="/img/banner-cate.webp"
                            alt=""
                            style={{
                                width: "100%",
                                height: "auto",
                                minWidth: "330px",
                                objectFit: "contain"
                            }}
                        />
                    </div>
                    {/* Cột phải chứa Swiper */}
                    <div style={{ flex: 3, width: "100%" }}>
                        <div style={{ width: "100%" }}>
                            <Swiper
                                slidesPerView={5}
                                spaceBetween={20}
                                navigation={false}
                                modules={[Navigation]}
                                style={{ width: "100%" }}
                            >
                                {/* Mỗi slide phải đặt width 100% */}
                                <SwiperSlide >

                                    <AppItemProduct />
                                </SwiperSlide>
                                <SwiperSlide >
                                    <AppItemProduct />
                                </SwiperSlide>
                                <SwiperSlide >
                                    <AppItemProduct />
                                </SwiperSlide>
                                <SwiperSlide >
                                    <AppItemProduct />
                                </SwiperSlide>
                                <SwiperSlide >
                                    <AppItemProduct />
                                </SwiperSlide>
                                <SwiperSlide >
                                    <AppItemProduct />
                                </SwiperSlide>
                                <SwiperSlide >
                                    <AppItemProduct />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <MDBRow>
                    <MDBCol xl={6} className='mb-4'>
                        <MDBCard>
                            <MDBCardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>John Doe</p>
                                            <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                        </div>
                                    </div>
                                    <MDBBadge pill color='success' light>
                                        Active
                                    </MDBBadge>
                                </div>
                            </MDBCardBody>
                            <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Message <MDBIcon fas icon='envelope' />
                                </MDBBtn>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Call <MDBIcon fas icon='phone' />
                                </MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol xl={6} className='mb-4'>
                        <MDBCard>
                            <MDBCardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Alex Ray</p>
                                            <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                        </div>
                                    </div>
                                    <MDBBadge pill color='primary' light>
                                        Onboarding
                                    </MDBBadge>
                                </div>
                            </MDBCardBody>
                            <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Message <MDBIcon fas icon='envelope' />
                                </MDBBtn>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Call <MDBIcon fas icon='phone' />
                                </MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol xl={6} className='mb-4'>
                        <MDBCard>
                            <MDBCardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Kate Hunington</p>
                                            <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                                        </div>
                                    </div>
                                    <MDBBadge pill color='warning' light>
                                        Awaiting
                                    </MDBBadge>
                                </div>
                            </MDBCardBody>
                            <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Message <MDBIcon fas icon='envelope' />
                                </MDBBtn>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Call <MDBIcon fas icon='phone' />
                                </MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol xl={6} className='mb-4'>
                        <MDBCard>
                            <MDBCardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/3.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Michael Bale</p>
                                            <p className='text-muted mb-0'>michael.bale@gmail.com</p>
                                        </div>
                                    </div>
                                    <MDBBadge pill color='danger' light>
                                        Removed
                                    </MDBBadge>
                                </div>
                            </MDBCardBody>
                            <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Message <MDBIcon fas icon='envelope' />
                                </MDBBtn>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Call <MDBIcon fas icon='phone' />
                                </MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </Container>
        </>
    );
}
