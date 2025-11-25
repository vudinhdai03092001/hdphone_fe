'use client'
import { Row, Image, Container } from 'react-bootstrap';
import AppBanner from '@/components/app.banner';
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBInputGroup } from 'mdb-react-ui-kit';

import React, { useState } from "react";
import AppItemProduct from '@/components/app.product';
const AppContact = () => {
    const title = 'Sản Phẩm'
    const background = '/img/banner4.jpg'
    let listImages = ['/img/item2.avif', '/img/item1.avif', '/img/banner4.jpg', '/img/item.jpg', '/img/item2.avif', '/img/item1.avif', '/img/banner4.jpg']
    const products = [];
    for (let i = 0; i < 9; i++) {

        products.push(<AppItemProduct key={i} />);
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexCate, setCurrentIndexCate] = useState(0);

    // Số lượng sản phẩm hiển thị mỗi lần
    const itemsPerPage = 4;
    // Hàm xử lý chuyển tiếp
    const handleNext = () => {
        if (currentIndex + itemsPerPage < listImages.length) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    // Hàm xử lý quay lại
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };
    const handleNextCategory = () => {
        if (currentIndexCate + itemsPerPage < products.length) {
            setCurrentIndexCate((prevIndex) => prevIndex + 1);
        }
    };

    // Hàm xử lý quay lại
    const handlePrevCategory = () => {
        if (currentIndexCate > 0) {
            setCurrentIndexCate((prevIndex) => prevIndex - 1);
        }
    };
    // Lấy các sản phẩm hiện tại hiển thị
    const visiblelistImages = listImages.slice(currentIndex, currentIndex + itemsPerPage);
    const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);


    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(quantity + 1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <>
            <AppBanner title={title} background={background} />
            <Container className='mt-4' >
                <div className="row">
                    <div className="col-md-5">
                        <div className="hover-zoom"><img src="/img/item.jpg" className='detail-product mb-4 ' alt="" /></div>

                        <div className="multi-item-carousel">
                            <div className="row product-container">
                                {visiblelistImages.map((product) => (
                                    <div className="" style={{ width: '120px' }} >
                                        <img src={product} alt="" className='w-100 ' style={{ height: '100px', objectFit: 'cover' }} />
                                    </div>
                                ))}
                                <div className="btn-arrow">
                                    <MDBIcon fas icon="angle-left" onClick={handlePrev} className='arrow-left' />
                                    <MDBIcon fas icon="angle-right" onClick={handleNext}
                                        className='arrow-right' />
                                </div>

                            </div>
                        </div>
                        <div className="row d-flex justify-content-end">
                            <div className="col-6 ">
                                <div className=" mx-2 mb-4 float-end" >


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="mt-4  ">
                            <h4> <MDBIcon fas icon="circle" className='font-size-item' /> Mặt hàng:<span> Sản phẩm A </span></h4>
                            <h5> <MDBIcon fas icon="circle" className='font-size-item' /> Giá:<span style={{ color: "red" }}> 50000 vnd</span></h5>
                            <h5> <MDBIcon fas icon="circle" className='font-size-item' /> Số lượng: 5</h5>
                            <h5> <MDBIcon fas icon="circle" className='font-size-item' /> Kích thước</h5>
                            <MDBBtnGroup aria-label='Basic example' style={{ width: "230px" }}>
                                <MDBBtn color='light' >
                                    Left
                                </MDBBtn>
                                <MDBBtn color='light' >
                                    Middle
                                </MDBBtn>
                                <MDBBtn color='light' >
                                    Right
                                </MDBBtn>
                            </MDBBtnGroup>
                            <MDBInputGroup className="mdb-input-group mt-4 "  >
                                <MDBBtn className='btn-decrease' color='tertiary' onClick={handleDecrease} >-</MDBBtn>
                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    style={{ width: '50px' }}
                                />
                                <MDBBtn className='btn-decrease' color='tertiary' onClick={handleIncrease}>+</MDBBtn>
                            </MDBInputGroup>

                            <MDBBtn className=' my-4' color='danger' style={{ width: "200px" }}>
                                <MDBIcon fas icon="cart-plus" />  Thêm vào giỏ
                            </MDBBtn>
                        </div>
                    </div>
                    <div className="content">
                        <h4>Mô tả</h4>
                        <p>nội dunn</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-6">
                        <MDBBtn className=' mb-4' color='danger'>
                            Sản phẩm liên quan
                        </MDBBtn></div>
                    <div className="col-6 ">
                        <div className=" mx-2 mb-4 float-end" >
                            <MDBBtn outline className='mx-2' color='warning' onClick={handlePrevCategory}  >
                                <MDBIcon fas icon="angle-left" />
                            </MDBBtn>
                            <MDBBtn outline className='mx-2' color='warning' onClick={handleNextCategory}
                            >
                                <MDBIcon fas icon="angle-right" />
                            </MDBBtn>
                        </div>
                    </div>
                </div>
                <div className="multi-item-carousel">
                    <div className="row">
                        {visibleProducts.map((product) => (
                            <div className="col-md-3 mb-4" >
                                {product}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    )
}
export default AppContact