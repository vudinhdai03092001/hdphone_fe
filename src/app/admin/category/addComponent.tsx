'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useRef, useEffect } from 'react';
import { useAddCategoryMutation } from '@/store/category/category.service';

interface IProp {
    setShowModle: (value: boolean) => void;
    showModle: boolean
}
const AddComponentCategory = (props: IProp) => {
    const [addCategory] = useAddCategoryMutation();
    const { showModle, setShowModle } = props
    const [imagePreview, setImagePreview] = useState("/img/logofruit.png");
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('')
    const [image, setImage] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleClickImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleSubmit = async () => {
        if (!name) {
            toast.error("Nhập tên thể loại")
            return;
        }
        if (!image) {
            toast.error("Chọn hình ảnh")
            return;
        }

        else {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("image", image);
            try {
                const request: any = await addCategory(formData).unwrap();
                toast.success(request.message);
                setName('');
                setImagePreview('/img/logofruit.png')
                setShowModle(false); // Đóng modal sau khi thêm thành công
            } catch (error) {
                toast.error("Có lỗi xảy ra!");
            }
        }

    }
    return (
        <>
            <Modal
                size="lg"
                show={showModle}
                onHide={() => { setShowModle(false) }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Thể loại</Form.Label>
                                    <Form.Control type="text" placeholder="..." value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <div className="">
                                    <img className='img-handle' src={imagePreview} alt="" onClick={() => handleClickImage()} />
                                </div>
                                <Form.Control
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    hidden
                                />
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setShowModle(false) }}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>Thêm mới</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddComponentCategory