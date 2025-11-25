'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ICategory } from '@/store/category/category.interface';
import { useDeleteCategoryMutation } from '@/store/category/category.service';
interface IProp {
    setShowRemoveModle: (value: boolean) => void;
    showRemoveModle: boolean;
    category: ICategory | null;

}
const RemoveComponentCategory = (props: IProp) => {
    const [id, setId] = useState<number>(0)
    const [removeCategory] = useDeleteCategoryMutation();
    const { showRemoveModle, setShowRemoveModle, category } = props
    useEffect(() => {
        if (category && category.id) {
            setId(category.id)
        }
    }, [category])

    const handleSubmit = async () => {
        try {
            const request: any = await removeCategory(id).unwrap();
            toast.error(request.message);
            setShowRemoveModle(false)
        } catch (error) {
            toast.error("Có lỗi xảy ra!");
        }
    }
    return (
        <>
            <Modal
                size="sm"
                show={showRemoveModle}
                onHide={() => { setShowRemoveModle(false) }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Xóa bỏ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <p>Bạn chắc chắn xóa bản ghi này ?</p>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setShowRemoveModle(false) }}>
                        Đóng
                    </Button>
                    <Button variant="danger" onClick={() => handleSubmit()}>Xóa bỏ</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default RemoveComponentCategory