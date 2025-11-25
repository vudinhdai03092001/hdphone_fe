'use client'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,

    MDBIcon
} from 'mdb-react-ui-kit';
import Link from 'next/link'
const AppItemProduct = () => {
    return (

        <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom'>
                <MDBCardImage className='item-image' src='/img/item1.avif' fluid alt='...' />
                <Link href={'/product/1'}>
                    <div className='mask' style={{ backgroundColor: 'rgba(209, 209, 209, 0.15)' }}></div>
                </Link>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle className='placeholder-glow'>
                    <Link href={'/product/1'}>   <span className=' col-6'>Sản phẩm A</span></Link>
                </MDBCardTitle>
                <MDBCardText className='placeholder-glow'>
                    <span className=' col-7 mb-4'>Giá: 70.000 vnd</span>
                    <br></br>
                    <br></br>
                    <span className=' col-8 pt-3' style={{ paddingTop: "20px !important" }}>
                        <MDBIcon fas icon="star" className='color-star' />
                        <MDBIcon fas icon="star" className='color-star' />
                        <MDBIcon fas icon="star" className='color-star' />
                        <MDBIcon fas icon="star" className='color-star' />
                        <MDBIcon fas icon="star" className='color-star-gray' />
                    </span>

                </MDBCardText>
                <MDBBtn color='danger'><MDBIcon fas icon="cart-plus" /></MDBBtn>
            </MDBCardBody>
        </MDBCard>

    )

}
export default AppItemProduct