import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.handleShowContact = this.props.handler;
    }
    render() {
        return (
            <div className='w-1/3 sm:w-80 text-midnight-600 mx-auto bg-white bg-opacity-70 rounded-lg px-2 py-2
            animate__animated animate__fadeInTopLeft'>
                <div className='flex flex-row justify-between'>
                    <h4 className='font-bold antialiased'>Contact</h4>
                    <button
                        className='font-extrabold w-6 h-6 flex flex-row justify-center items-center
                            transition transform motion-reduce:transition-none motion-reduce:transform-none
                            duration-300 ease-in-out hover:scale-125 rounded-xl hover:bg-mandy-300'
                        onClick={this.handleShowContact}
                    >X</button>
                </div>
                <div className='my-5 '>
                    <div className='my-2 flex flex-row items-center'>
                        <FontAwesomeIcon className='text-2xl text-midnight-400' icon={faMapMarkerAlt} />
                        <div className="hidden sm:inline-block">
                            <p className='ml-2 antialiased'>
                                Groupomania
                                <br />
                                11 Wall Street, NYC
                            </p>
                        </div>
                        <a href="https://www.google.com/maps/place/11+Wall+St,+New+York,+NY+10005,+États-Unis/@40.7068661,-74.0135076,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a1721b556e9:0x326f0128a0f35c86!8m2!3d40.7068661!4d-74.0113189"
                        target="_blank"
                        className=' ml-2 antialiased sm:hidden'>Lien</a>
                    </div>
                    <p className='my-2 antialiased'>
                        < FontAwesomeIcon className='text-2xl text-midnight-400' icon={faEnvelopeOpenText} />
                        <a
                            className=' ml-2 antialiased'
                            href="mailto: john.doe@groupomania.eu"><span className="hidden sm:inline-block">john.doe@groupomania.eu  (lien)</span><span className="sm:hidden">Cliquez</span></a>
                    </p>
                </div>
            </div>
        )
    }
};

export default Contact;