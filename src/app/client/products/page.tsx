'use client'
import AppCategory from '@/components/app.category';
import { Row, Image, Container } from 'react-bootstrap';
import AppItemProduct from '@/components/app.product';
import AppBanner from '@/components/app.banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from "react";
import {
    MDBPagination, MDBPaginationItem, MDBPaginationLink,
    MDBBtn,
    MDBInputGroup,
    MDBListGroup, MDBListGroupItem,
    MDBRadio,
    MDBIcon
} from 'mdb-react-ui-kit';
import { useGetCategoriesActiveQuery } from '@/store/category/category.service';
const AppProduct = () => {
    const title = 'Sản Phẩm'
    const background = '/img/banner4.jpg'
    const products = [];
    for (let i = 0; i < 9; i++) {

        products.push(<AppItemProduct key={i} />);
    }
    const { data: listCateActive, isLoading } = useGetCategoriesActiveQuery();

    // State quản lý sản phẩm hiển thị
    const [currentIndex, setCurrentIndex] = useState(0);

    // Số lượng sản phẩm hiển thị mỗi lần
    const itemsPerPage = 4;

    // Hàm xử lý chuyển tiếp
    const handleNext = () => {
        if (currentIndex + itemsPerPage < products.length) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    // Hàm xử lý quay lại
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };
    // Lấy các sản phẩm hiện tại hiển thị
    const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);
    if (!listCateActive) {
        return <div>Lỗi truy vấn...</div>
    }
    return (
        <>
            <AppBanner title={title} background={background} />
            <Container className='mt-4' >

                <div className="row">
                    <div className="col-md-3">
                        <MDBBtn className='mx-2 mb-4' color='danger'>
                            Các loại hàng
                        </MDBBtn>
                        <AppCategory categories={listCateActive?.data} />
                        <MDBBtn className='mx-2 my-4' color='danger'>
                            Lọc giá
                        </MDBBtn>
                        <MDBListGroup light small>
                            <MDBListGroupItem> <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Trên 50.000 vnđ' defaultChecked /></MDBListGroupItem>
                            <MDBListGroupItem> <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Trên 50.000 vnđ' defaultChecked /></MDBListGroupItem>
                            <MDBListGroupItem> <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Trên 50.000 vnđ' defaultChecked /></MDBListGroupItem>
                            <MDBListGroupItem> <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Trên 50.000 vnđ' defaultChecked /></MDBListGroupItem>
                            <MDBListGroupItem> <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Trên 50.000 vnđ' defaultChecked /></MDBListGroupItem>
                            <MDBListGroupItem> <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Trên 50.000 vnđ' defaultChecked /></MDBListGroupItem>
                        </MDBListGroup>
                    </div>
                    <div className="col-md-9  ">
                        <div className="row d-flex justify-content-end">
                            <div className="col-6">
                                <MDBInputGroup className='mb-3  ' >
                                    <input className='form-control' placeholder="Sản phẩm..." type='text' />
                                    <MDBBtn outline>Tìm kiếm</MDBBtn>
                                </MDBInputGroup></div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-4 " > <AppItemProduct /></div>
                            <div className="col-md-4 mb-4" > <AppItemProduct /></div>
                            <div className="col-md-4 mb-4 " > <AppItemProduct /></div>
                            <div className="col-md-4 mb-4 " > <AppItemProduct /></div>
                            <div className="col-md-4 mb-4 " > <AppItemProduct /></div>
                            <div className="col-md-4 mb-4 " > <AppItemProduct /></div>
                            <div className="col-md-4 mb-4 " > <AppItemProduct /></div>
                            <div className="col-md-4 mb-4 " > <AppItemProduct /></div>
                            <div className="col-md-4 mb-4 " > <AppItemProduct /></div>
                        </div>
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
                <div className="row d-flex justify-content-between">
                    <div className="col-3">
                        <MDBBtn className='mx-2 mb-4' color='danger'>
                            Sản phẩm liên quan
                        </MDBBtn></div>
                    <div className="col-3 ">
                        <div className=" mx-2 mb-4 float-end" >
                            <MDBBtn outline className='mx-2' color='warning' onClick={handlePrev} disabled={currentIndex === 0} >
                                <MDBIcon fas icon="angle-left" />
                            </MDBBtn>
                            <MDBBtn outline className='mx-2' color='warning' onClick={handleNext}
                                disabled={currentIndex + itemsPerPage >= products.length}>
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
            </Container >
        </>
    )
}
export default AppProduct