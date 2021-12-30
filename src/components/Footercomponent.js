import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlenderPhone, faCircle, faCopyright, faEnvelope, faIdCard,faMoneyBill,faPhone,faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faGooglePlusSquare, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
function Footercomponent(){
    return(
        <footer className='bg-dark container mt-5'>
            <div className='d-flex justify-content-evenly align-items-center'>
                <div >
                    <p className="h2 text-light">Our Adress</p>
                    <address className='text-light'>
                        121,Clear Water Bay Road<br></br>Clear Water Bay,Kowloon<br></br>HONGKONG
                    </address>
                    <p><FontAwesomeIcon icon={faPhone} className='text-light' /><span className='text-light' >:+852 1234 5678</span></p>
                    <p><FontAwesomeIcon icon={faBlenderPhone} className='text-light' /><span className='text-light'>:+852 1234 5678</span></p>
                    <p><FontAwesomeIcon icon={faEnvelope} className='text-light' />:<a className='text-light' href='#'>confusion@food.net</a></p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGooglePlusSquare} className='text-danger fs-2' />
                    <FontAwesomeIcon icon={faFacebook} className='text-primary fs-2 ms-1'/>
                    <FontAwesomeIcon icon={faLinkedin} className='text-info fs-2 ms-1'/>
                    <FontAwesomeIcon icon={faTwitter} className='text-info fs-2 ms-1'/>
                    <FontAwesomeIcon icon={faYoutube} className='text-danger fs-2 ms-1'/>
                    <FontAwesomeIcon icon={faEnvelope} className='text-light fs-2 ms-1'/>
                </div>
            </div>
            <div>
                <p className='text-center text-light'><FontAwesomeIcon className='text-light' icon={faCopyright}/>Copyright 2018 Ristorante Con Fusion</p>
            </div>
        </footer>
    )
}
export default Footercomponent