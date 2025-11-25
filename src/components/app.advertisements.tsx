'use client'
import { MDBBtn } from 'mdb-react-ui-kit';
// quảng cáo banner
const AppAdvertisements = () => {
    return (
        <div
            className='p-5 text-center bg-image mt-4'
            style={{ backgroundImage: "url('/img/banner4.jpg')", height: 400 }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(102, 100, 100, 0.1)' }}>
                <div className='d-flex justify-content-center align-items-center h-100 w-100' >
                    <div className='text-white' style={{ width: "100%" }}>
                        <div className="row">
                            <div className="col-md-3">
                                <img className="banner-advertisement" src="/img/banner4.jpg" alt="" />
                            </div>
                            <div className="col-md-9">
                                <h1 className='mb-3'>Heading</h1>
                                <h4 className='mb-3'>Subheading</h4>
                                <MDBBtn className='me-1' color='danger'>
                                    Danger
                                </MDBBtn>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
export default AppAdvertisements