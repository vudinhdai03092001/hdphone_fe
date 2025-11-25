import { MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link'
interface IProps {
    title: String,
    background: String
}
const AppBanner = (props: IProps) => {
    const { title, background } = props
    return (
        <div className="" style={{ paddingTop: "80px" }}>
            <div
                className='p-5 text-center bg-image mt-4'
                style={{ backgroundImage: `url('${background}')`, height: 200 }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(102, 100, 100, 0.1)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100 w-100' >
                        <div className='text-white' style={{ width: "100%" }}>
                            <div className="row">                            
                                <div className="col-md-12">
                                    <Link href={'/'}><h4 className='mb-3'>Trang chủ</h4></Link>
                                    <MDBBtn className='me-1' color='danger'>
                                        {title}
                                    </MDBBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppBanner