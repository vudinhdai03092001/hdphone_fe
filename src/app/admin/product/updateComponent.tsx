'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useRef, useEffect } from 'react';
import { useGetCategoriesActiveQuery } from '@/store/category/category.service';
import { useUpdateProductMutation } from '@/store/product/product.service';
import { MDBIcon } from 'mdb-react-ui-kit';
import AppTinyMce from '@/components/app.tinymce';
import { BASE_URL } from '../../../config/configApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { IProduct, IProductImage } from '@/store/product/product.interface';
interface IProp {
    setShowUpdateModle: (value: boolean) => void;
    showUpdateModle: boolean;
    product: IProduct | null
    setProduct: (value: IProduct | null) => void
}
const UpdateComponentProduct = (props: IProp) => {
    const { data: listCateActive, isLoading } = useGetCategoriesActiveQuery();
    const [updateProduct] = useUpdateProductMutation()
    const { showUpdateModle, setShowUpdateModle, product, setProduct } = props
    const [imagePreview, setImagePreview] = useState("/img/upload.png");

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('')
    const [category, setCategory] = useState(Number)
    const [id, setId] = useState(Number)
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState<number | undefined>()
    const [oldPrice, setOldPrice] = useState<number | undefined>()
    const [quantity, setQuantity] = useState<number | undefined>()
    const [image, setImage] = useState<IProductImage[]>([])
    const [imageUpload, setImageUpload] = useState<string[]>([])

    const [idRemove, setIdRemove] = useState<IProductImage[]>([])
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
                        setImageUpload(previews)// Khi đã xử lý hết tất cả các tệp, lưu vào state
                        setFiles(filesArray);

                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleRemoveImage = (index: number, id: number) => {
        const updatedPreviews = image.filter((_, idx) => idx !== index);
        const idDelete = image.find((item, idx) => item.id === id);
        if (idDelete) {
            setIdRemove((prevDeleted) => [...prevDeleted, idDelete])
        }
        setImage(updatedPreviews);

    };
    const handleRemoveImagePre = (index: number) => {
        const removePre = imageUpload.filter((_, idx) => idx !== index);
        const updatedFiles = getFiles.filter((_, idx) => idx !== index);
        setFiles(updatedFiles);
        setImageUpload(removePre)
    }
    const handleClickImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleContentChange = (newContent: string) => {
        setDescription(newContent);
    };

    useEffect(() => {

        if (product && product.id) {
            const imageUrls = product.images
            setCategory(product.category_id)
            setDescription(product.description)
            setOldPrice(product.old_price)
            setPrice(product.price)
            setName(product.name)
            setQuantity(product.quantity)
            setImage(imageUrls)
            setId(product.id)
        }

    }, [product])
    const handleSubmit = async () => {
        // if (!category) return toast.error("Chọn loại sản phẩm")
        if (!name) return toast.error("Nhập tên sản phẩm")
        if (oldPrice === undefined) return toast.error("Nhập giá cũ")
        if (price === undefined) return toast.error("Nhập giá mới")
        if (quantity === undefined) return toast.error("Nhập số lượng")
        if (!getFiles) return toast.error("Chọn hình ảnh")
        if (!description) return toast.error("Nhập mô tả")
        else {

            const formData = new FormData();
            formData.append("id", id.toString());
            formData.append("category_id", category?.toString() ?? "");
            formData.append("name", name);
            formData.append("old_price", oldPrice?.toString() ?? "");
            formData.append("price", price?.toString() ?? "");
            formData.append("quantity", quantity?.toString() ?? "");
            formData.append("description", description);
            idRemove.forEach(item => {
                formData.append("imagesRemove", item.id.toString());  // Assuming item.id is a string or number
            });
            // formData.append("imagesRemove", idRemove);
            getFiles.forEach((file, index) => {
                formData.append("image", file);
            });
            try {
                const request: any = await updateProduct(formData).unwrap();
                toast.success(request.message);
                setName('');
                setOldPrice(undefined);
                setPrice(undefined);
                setQuantity(undefined)
                // setCategory('')
                setImage([]);
                setImageUpload([]);
                setFiles([]);
                setDescription('')
                setImagePreview('/img/upload.png')
                setShowUpdateModle(false); // Đóng modal sau khi thêm thành công
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
                                            <img key={index} src={`${BASE_URL}/${preview.upload}`} alt={`Preview ${index}`} className='list-upload' />
                                            <FontAwesomeIcon className='delete-btn' icon={faTrashCan} onClick={() => handleRemoveImage(index, preview.id)} />
                                        </div>
                                    ))}

                                    {imageUpload?.map((preview, index) => (
                                        <div className="box-list-upload me-1" key={index}>
                                            <img key={index} src={preview} alt={`Preview ${index}`} className='list-upload' />
                                            <FontAwesomeIcon className='delete-btn' icon={faTrashCan} onClick={() => handleRemoveImagePre(index)} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Form.Label>Loại sản phẩm</Form.Label>
                                <Form.Select aria-label="Default select example" className='mb-3' value={category ?? ''} onChange={(e) => setCategory(Number(e.target.value))} >
                                    {listCateActive?.data.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}  >{item.name}</option>
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
                    <Button variant="secondary" onClick={() => { setShowUpdateModle(false) }}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>Chỉnh sửa</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UpdateComponentProduct