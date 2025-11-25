'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useRef, useEffect } from 'react';
import { useUpdateCategoryMutation } from '@/store/category/category.service';
import { ICategory } from '@/store/category/category.interface';
import { MDBSwitch } from 'mdb-react-ui-kit';
import { BASE_URL } from '../../../config/configApi'
interface IProp {
    setShowUpdateModle: (value: boolean) => void;
    showUpdateModle: boolean;
    category: ICategory | null;
    setCategory: (value: ICategory | null) => void
}
const UpdateComponentCategory = (props: IProp) => {
    const [updateCategory] = useUpdateCategoryMutation();
    const { showUpdateModle, setShowUpdateModle, category, setCategory } = props
    const [imagePreview, setImagePreview] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    //khai bao
    const [id, setId] = useState<number>(0)
    const [name, setName] = useState('')
    const [image, setImage] = useState<File | null>(null);
    const [is_active, setIsActive] = useState(Number)
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
    const handleSwitchChange = (e: any) => {
        const value = e.target.checked;
        if (value === true) {
            setIsActive(1)
        }
        else {
            setIsActive(0)
        }
    };
    useEffect(() => {
        if (category && category.id) {
            const srcImg = `${BASE_URL}/${category?.images}`
            setImagePreview(srcImg)
            setImageUrl(category?.images)
            setIsActive(category?.is_active)
            setName(category?.name)
            setId(category?.id)
        }
    }, [category])

    const handleSubmit = async () => {

        if (!name) {
            toast.error("Nhập tên thể loại")
            return;
        }

        else {
            if (id) {
                const formData = new FormData();
                formData.append("id", id.toString());
                formData.append("is_active", is_active.toString());
                formData.append("name", name);
                formData.append("image", image ? image : imageUrl);
                try {
                    const request: any = await updateCategory(formData).unwrap();

                    toast.success(request?.message);

                    setShowUpdateModle(false); // Đóng modal sau khi thêm thành công
                } catch (error) {
                    toast.error("Có lỗi xảy ra!");
                }
            }

        }

    }

    return (
        <>
            <Modal
                size="lg"
                show={showUpdateModle}
                onHide={() => { setShowUpdateModle(false) }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Thể loại </Form.Label>
                                    <Form.Control type="text" placeholder="..." value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <MDBSwitch checked={is_active === 1} id='flexSwitchCheckChecked' label='Hoạt động' onChange={handleSwitchChange} />
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
                    <Button variant="secondary" onClick={() => { setShowUpdateModle(false) }}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()} >Chỉnh sửa</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UpdateComponentCategory