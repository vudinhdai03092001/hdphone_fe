'use client'
import Button from 'react-bootstrap/Button';
import AddComponentCategory from './addComponent';
import UpdateComponentCategory from './updateComponent';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../../config/configApi'
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import {
    MDBTableHead, MDBTableBody, MDBIcon, MDBInputGroup,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useLazyGetCategoriesQuery, } from '@/store/category/category.service';
import { ICategory } from '@/store/category/category.interface';
import RemoveComponentCategory from './removeComponent';


const AdminCategory = () => {
    const [trigger, { data: listCategories, isLoading }] = useLazyGetCategoriesQuery();
    const [active, setActive] = useState(1);
    const [items, setItems] = useState<any[]>([]);
    const [showModle, setShowModle] = useState<boolean>(false)
    const [category, setCategory] = useState<ICategory | null>(null)
    const [showUpdateModle, setShowUpdateModle] = useState<boolean>(false)
    const [showRemoveModle, setShowRemoveModle] = useState<boolean>(false)
    const [searchName, setSearchName] = useState("");
    const handleSearch = () => {

        trigger({ page: active, searchName });
    };
    useEffect(() => {
        trigger({ page: active, searchName: searchName })
    }, [active])
    const handlePageChange = (page: number) => {
        setActive(page);
    };

    useEffect(() => {
        if (listCategories?.data) {
            const totalPages = listCategories?.pagination.totalPages;
            if (!totalPages) return;
            const paginationItems = [];

            paginationItems.push(<Pagination.Prev key="prev" onClick={() => handlePageChange(Math.max(active - 1, 1))} />);
            if (active > 3) {
                paginationItems.push(<Pagination.Ellipsis key="ellipsis-start" />);
            }
            const pageRange = [];
            for (let i = Math.max(1, active - 2); i <= Math.min(totalPages, active + 2); i++) {
                pageRange.push(
                    <Pagination.Item key={i} active={i === active} onClick={() => handlePageChange(i)}>
                        {i}
                    </Pagination.Item>
                );
            }
            paginationItems.push(...pageRange);

            if (active < totalPages - 2) {
                paginationItems.push(<Pagination.Ellipsis key="ellipsis-end" />);
            }

            paginationItems.push(<Pagination.Next key="next" onClick={() => handlePageChange(Math.min(active + 1, totalPages))} />);
            setItems(paginationItems);
        }
    }, [listCategories?.data, active]);
    // pagination
    if (isLoading) return <p>Loading...</p>;
    return (
        <div className="">
            <div className=" d-flex justify-content-between">
                <h2 className='mb-4'>Thể loại</h2>
                <Button className='mx-4 mb-4' variant="primary" onClick={() => setShowModle(true)} >Thêm mới</Button></div>
            <div className="row">
                <div className="col-6">
                    <MDBInputGroup className='mb-3 '>
                        <input className='form-control' placeholder="Nhập từ khóa..." type='text' value={searchName}
                            onChange={(e) => setSearchName(e.target.value)} />
                        <MDBBtn outline onClick={handleSearch}>Tìm kiếm</MDBBtn>
                    </MDBInputGroup></div>
            </div>
            <Table bordered hover className='table-border '>
                <MDBTableHead>
                    <tr>
                        <th className='col-1'>#</th>
                        <th className='col-5'>Thể loại</th>
                        <th className='col-2'>Hình ảnh</th>
                        <th className='col-1'>Hoạt động</th>
                        <th className='col-1'>Thao tác</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {listCategories?.data.map((item, index) => {
                        const srcImg = `${BASE_URL}/${item.images}`
                       
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td><img src={srcImg} alt="" className='img-table' /></td>
                                <td><MDBIcon fas icon="circle" style={{ color: item.is_active === 1 ? '#34f881' : '#ccc ' }} /></td>
                                <td>
                                    <MDBIcon fas icon="edit" className=' me-3' onClick={() => { setShowUpdateModle(true), setCategory(item) }} style={{ color: '#14a44d' }} />
                                    <MDBIcon fas icon="trash-alt" style={{ color: '#dc4c64' }} onClick={() => { setShowRemoveModle(true), setCategory(item) }} />
                                </td>
                            </tr>
                        );
                    })}

                </MDBTableBody>
            </Table>
            < AddComponentCategory setShowModle={setShowModle} showModle={showModle} />
            <UpdateComponentCategory setShowUpdateModle={setShowUpdateModle} showUpdateModle={showUpdateModle} category={category} setCategory={setCategory} />
            <RemoveComponentCategory showRemoveModle={showRemoveModle} setShowRemoveModle={setShowRemoveModle} category={category} />
            <div>
                <Pagination size="sm">{items}</Pagination>
            </div>
        </div>
    )
}
export default AdminCategory