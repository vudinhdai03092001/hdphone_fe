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
import Link from 'next/link';

export default function Home() {
    // const { data: listCateActive, isLoading } = useGetCategoriesActiveQuery();
    // if (!listCateActive) {
    //     return <div>Lỗi truy vấn...</div>
    // }
    // if (isLoading) return <p>Loading...</p>;


    const categories = [
        { label: "Điện Thoại Cũ", icon: <i className="fas fa-mobile-alt"></i> },
        { label: "Sửa Điện Thoại", icon: <i className="fas fa-mobile-alt"></i> },
        { label: "Sửa Máy Tính Bảng", icon: <i className="fas fa-tablet-alt"></i> },
        { label: "Phụ Kiện", icon: <i className="fas fa-plug"></i> },
        { label: "Blog Thủ Thuật", icon: <i className="far fa-lightbulb"></i> }
    ];
    const commitments = [
        { label: "Linh kiện tốt ", image: "/img/linhkien.svg" },
        { label: "Giá thật rẻ - Sửa thật nhanh", image: "/img/suanhanh.svg" },
        { label: "Tư vấn rõ ràng ", image: "/img/tuvan.svg" },
        { label: "Bảo hành dài - Hỗ trợ tận tâm", image: "/img/baohanh.svg" },
      
    ]
    return (
        <>
            {/* <AppAdvertisements /> */}
            <div className="">
                <Container className=' mt-4' style={{ paddingTop: "120px" }}>
                    <div className="row">
                        <div className="col-lg-3 gx-0 ps-1 pe-1">
                            <div className="price-list d-none d-lg-block d-flex flex-column gap-2">
                                {categories.map((item, index) => (
                                    <div
                                        key={index}
                                        className={"category-item"}
                                    >
                                        <span style={{ fontSize: "20px" }}>{item.icon}</span>
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-2 gx-0 ps-1 pe-1">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 "
                                        src="/img/banner2.webp"
                                        alt="First slide"
                                        style={{ objectFit: 'cover', borderRadius: "10px", }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/img/banner.webp"
                                        alt="First slide"
                                        style={{ objectFit: 'cover', borderRadius: "10px", }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/img/banner3.webp"
                                        alt="First slide"
                                        style={{ objectFit: 'cover', borderRadius: "10px", }}
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className='col-lg-3 col-md-12 gx-0  ps-1 pe-1'>
                            <div className="d-none d-lg-block">
                                <div className='d-flex align-items-center mb-2'>
                                    <img
                                        src="/img/banner3.webp"
                                        alt=''
                                        style={{ width: '100%', borderRadius: "10px", }}
                                    />
                                </div>
                                <div className='d-flex align-items-center '>
                                    <img
                                        src="/img/banner2.webp"
                                        alt=''
                                        style={{ width: '100%', borderRadius: "10px", }}
                                    />
                                </div>
                            </div>
                            <div className="d-block d-lg-none">
                                <div className="row ">
                                    <div className="col-6 gx-0 ps-3 pe-1">
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src="/img/banner3.webp"
                                                alt=''
                                                style={{ width: '100%', borderRadius: "10px", }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6 gx-0 pe-3 ps-1">
                                        <div className='d-flex align-items-center '>
                                            <img
                                                src="/img/banner2.webp"
                                                alt=''
                                                style={{ width: '100%', borderRadius: "10px", }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MDBRow className='mt-2 '>
                        <Swiper
                            key="swiper-1"
                            className="swiper-1"
                            spaceBetween={20}
                            navigation={false}
                            modules={[Navigation]}
                            style={{ width: "100%" }}
                            breakpoints={{
                                // Màn nhỏ dưới 768px => hiển thị 2 sản phẩm
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                // Tablet
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },

                            }}
                        >
                            {/* Mỗi slide phải đặt width 100% */}
                            {commitments.map((item, index) => (
                                <SwiperSlide key={index} >
                                    <MDBCol className='mb-2'>
                                        <MDBCard className='commitment'>
                                            <MDBCardBody className='p-2'>
                                                <div className='d-flex align-items-center'>
                                                    <div className="" style={{ flex: 1 }}>
                                                        <img
                                                            src={`${item.image}`}
                                                            alt=''
                                                            style={{ width: "100%", height: "auto", objectFit: "contain" }}
                                                            className='rounded-circle'
                                                        />
                                                    </div>
                                                    <div className="ms-2" style={{ flex: 10 }}>
                                                        <p className='text-muted mb-0'>{item.label}</p>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </MDBRow>
                </Container >
            </div>
            {/* <AppAdvertisements></AppAdvertisements> */}

            <Container className='mt-4'>
                <MDBBtn className='mx-2' color='danger'>
                    Điện thoại cũ
                </MDBBtn>
                <div className='mt-4 row' >
                    <div className="col-lg-3 d-none d-lg-block ">
                        <img
                            src="/img/banner-cate.webp"
                            alt=""
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }}
                        />
                    </div>
                    <div className="col-md-12 d-block d-lg-none ">
                        <img
                            src="/img/banner-md.webp"
                            alt=""
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                                maxHeight: "127px",
                                borderRadius: "10px",
                                marginBottom: "10px"
                            }}
                        />
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div style={{ width: "100%" }}>
                            <Swiper

                                spaceBetween={20}
                                navigation={false}
                                modules={[Navigation]}
                                style={{ width: "100%" }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                    },
                                    // Tablet
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                    },
                                }}
                            >
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
                    {/* Cột phải chứa Swiper */}
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
