'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useRef, useEffect } from 'react';
import { useGetCategoriesActiveQuery } from '@/store/category/category.service';
import { useAddProductMutation } from '@/store/product/product.service';
import { MDBIcon } from 'mdb-react-ui-kit';
import AppTinyMce from '@/components/app.tinymce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
interface IProp {
    setShowModle: (value: boolean) => void;
    showModle: boolean
}
const AddComponentProduct = (props: IProp) => {
    const { data: listCateActive, isLoading } = useGetCategoriesActiveQuery();
    const [addProduct] = useAddProductMutation()
    const { showModle, setShowModle } = props
    const [imagePreview, setImagePreview] = useState("/img/upload.png");

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState<number | undefined>()
    const [oldPrice, setOldPrice] = useState<number | undefined>()
    const [quantity, setQuantity] = useState<number | undefined>()
    const [image, setImage] = useState<string[]>([])
    const [getFiles, setFiles] = useState<File[]>([]);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files
        if (selectedFiles) {
            const previews: string[] = []; // Mảng lưu trữ các ảnh preview
            const filesArray: File[] = []; // Mảng lưu trữ các file thực tế
            Array.from(selectedFiles).forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    previews.push(reader.result as string);
                    filesArray.push(file);
                    if (previews.length === selectedFiles.length) {
                        setImage(previews); // Khi đã xử lý hết tất cả các tệp, lưu vào state
                        setFiles(filesArray);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleRemoveImage = (index: number) => {
        const updatedPreviews = image.filter((_, idx) => idx !== index);
        const updatedFiles = getFiles.filter((_, idx) => idx !== index);
        setImage(updatedPreviews); // Cập nhật lại state sau khi xóa ảnh
        setFiles(updatedFiles);
    };
    const handleClickImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleContentChange = (newContent: string) => {
        setDescription(newContent);
    };

    const handleSubmit = async () => {
        if (!category) return toast.error("Chọn loại sản phẩm")
        if (!name) return toast.error("Nhập tên sản phẩm")
        if (oldPrice === undefined) return toast.error("Nhập giá cũ")
        if (price === undefined) return toast.error("Nhập giá mới")
        if (quantity === undefined) return toast.error("Nhập số lượng")
        if (!getFiles) return toast.error("Chọn hình ảnh")
        if (!description) return toast.error("Nhập mô tả")
        else {
            const formData = new FormData();
            formData.append("category_id", category);
            formData.append("name", name);
            formData.append("old_price", oldPrice?.toString() ?? "");
            formData.append("price", price?.toString() ?? "");
            formData.append("quantity", quantity?.toString() ?? "");
            formData.append("description", description);
            getFiles.forEach((file, index) => {
                formData.append("image", file);
            });
            try {
                const request: any = await addProduct(formData).unwrap();
                toast.success(request.message);
                setName('');
                setOldPrice(undefined);
                setPrice(undefined);
                setQuantity(undefined)
                setCategory('')
                setImage([]);
                setFiles([]);
                setDescription('')
                setImagePreview('/img/upload.png')
                setShowModle(false); // Đóng modal sau khi thêm thành công
            } catch (error) {
                toast.error("Có lỗi xảy ra!");
            }
        }
    }
    if (!listCateActive) {
        return <div>Lỗi truy vấn...</div>
    }
    if (isLoading) return <p>Loading...</p>;
    return (
        <>
            <Modal
                size="xl"
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

                                <div className="">
                                    <img className='img-handle' style={{ border: 'none ', width: '100px', height: '100px' }} src={imagePreview} alt="" onClick={() => handleClickImage()} />
                                </div>
                                <Form.Control
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    multiple
                                    hidden
                                />
                                <Form.Label className='mt-1'>Hình ảnh</Form.Label>
                                <div className="d-flex flex-row mt-4">
                                    {image?.map((preview, index) => (
                                        <div className="box-list-upload me-1" key={index}>
                                            <img key={index} src={preview} alt={`Preview ${index}`} className='list-upload' />
                                            <FontAwesomeIcon className='delete-btn' icon={faTrashCan} onClick={() => handleRemoveImage(index)} />

                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Form.Label>Loại sản phẩm</Form.Label>
                                <Form.Select aria-label="Default select example" className='mb-3' onChange={(e) => setCategory(e.target.value)} >
                                    <option>Chọn thể loại</option>
                                    {listCateActive?.data.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    })}
                                </Form.Select>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Tên sản phẩm</Form.Label>
                                    <Form.Control type="text" value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Giá cũ</Form.Label>
                                            <Form.Control type="number" value={oldPrice}
                                                onChange={(e) => setOldPrice(parseFloat(e.target.value))} />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                            <Form.Label>Giá mới</Form.Label>
                                            <Form.Control type="number" value={price}
                                                onChange={(e) => setPrice(parseFloat(e.target.value))} />
                                        </Form.Group>
                                    </div>
                                </div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                    <Form.Label>Số lượng</Form.Label>
                                    <Form.Control type="number" value={quantity}
                                        onChange={(e) => setQuantity(parseFloat(e.target.value))} />
                                </Form.Group>
                            </div>
                        </div>
                        <Form.Label>Mô tả</Form.Label>
                        <AppTinyMce onContentChange={handleContentChange} />
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
export default AddComponentProduct