'use client'
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { BASE_URL } from '../../../config/configApi'
import {
    MDBIcon, MDBInputGroup,
    MDBBtn
} from 'mdb-react-ui-kit';
import { IProduct } from '@/store/product/product.interface';
import AddComponentProduct from './addComponent';
import { useLazyGetProductsQuery } from '@/store/product/product.service';
import UpdateComponentProduct from './updateComponent';

const AdminProduct = () => {
    const [trigger, { data: listProducts, isLoading }] = useLazyGetProductsQuery()

    const [active, setActive] = useState(1);
    const [searchName, setSearchName] = useState("");
    const [expandedRows, setExpandedRows] = useState<number[]>([]);
    const [showModle, setShowModle] = useState<boolean>(false)
    const [showUpdateModle, setShowUpdateModle] = useState<boolean>(false)
    const [showRemoveModle, setShowRemoveModle] = useState<boolean>(false)
    const [product, setProduct] = useState<IProduct | null>(null)
    const toggleRow = (id: number): void => {
        setExpandedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };
    useEffect(() => {
        trigger({ page: active, searchName: searchName })
    }, [active])
    return (
        <div className="">
            <div className=" d-flex justify-content-between">
                <h2 className='mb-4'>Sản phẩm</h2>
                <Button className='mx-4 mb-4' variant="primary" onClick={() => setShowModle(true)} >Thêm mới</Button></div>
            <div className="row">
                <div className="col-6">
                    <MDBInputGroup className='mb-3 '>
                        <input className='form-control' placeholder="Nhập từ khóa..." type='text'
                        />
                        <MDBBtn outline >Tìm kiếm</MDBBtn>
                    </MDBInputGroup></div>
            </div>
            <table className="table table-bordered table-border">
                <thead>
                    <tr>

                        <th className='col-1'>Xem thêm</th>
                        <th>Tên sản phẩm</th>
                        <th>Thể loại</th>
                        <th>Giá bán</th>
                        <th>Giá cũ</th>
                        <th>Số lượng</th>
                        <th>Hoạt động</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {listProducts?.data.map((row) => (
                        <React.Fragment key={row.id}>
                            <tr>

                                <td>
                                    <button
                                        className="btn btn-sm btn-primary"
                                        onClick={() => toggleRow(row.id)}
                                    >
                                        {expandedRows.includes(row.id) ? '-' : '+'}
                                    </button>
                                </td>
                                <td>{row.name}</td>
                                <td>{row.category.name}</td>
                                <td>{row.price}</td>
                                <td>{row.old_price}</td>
                                <td>{row.quantity}</td>
                                <td><MDBIcon fas icon="circle" style={{ color: row.active === 1 ? '#34f881' : '#ccc ' }} /></td>
                                <td>
                                    <MDBIcon fas icon="edit" className=' me-3' onClick={() => { setShowUpdateModle(true), setProduct(row) }} style={{ color: '#14a44d' }} />
                                    <MDBIcon fas icon="trash-alt" style={{ color: '#dc4c64' }} onClick={() => { setShowRemoveModle(true), setProduct(row) }} />
                                </td>
                            </tr>
                            {expandedRows.includes(row.id) && (
                                <tr>
                                    <td colSpan={8}>
                                        <div className="d-flex flex-row ">
                                            {row?.images.map((preview, index) => (
                                                <div className="box-list-upload me-1" key={index}>
                                                    <img key={index} src={`${BASE_URL}/${preview.upload}`} alt={`Preview ${index}`} className='list-upload' />
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <AddComponentProduct setShowModle={setShowModle} showModle={showModle} />
            <UpdateComponentProduct setShowUpdateModle={setShowUpdateModle} showUpdateModle={showUpdateModle} product={product} setProduct={setProduct} />
        </div>
    );
};

export default AdminProduct;
