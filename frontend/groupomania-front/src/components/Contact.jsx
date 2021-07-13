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
            <div className='w-2/4 text-midnight-600 mx-auto bg-white bg-opacity-40 rounded-lg px-2 py-2 contact'>
                <div className='flex flex-row justify-between'>
                    <h4 className='font-bold'>Contact</h4>
                    <button
                        className='font-extrabold'
                        onClick={this.handleShowContact}
                    >X</button>
                </div>
                <article className='my-5'>
                    <div className='my-2 flex flex-row items-center'>
                        <FontAwesomeIcon className='text-2xl text-midnight-400' icon={faMapMarkerAlt} />
                        <p className='ml-2'>
                            Groupomania
                            <br />
                            Rue de la Bourse
                        </p>
                    </div>
                    <p className='my-2'>
                        < FontAwesomeIcon className='text-2xl text-midnight-400' icon={faEnvelopeOpenText} />
                        <a
                            className=' ml-2'
                            href="mailto: john.doe@groupomania.eu">john.doe@groupomania.eu (lien)</a>
                    </p>
                </article>
            </div>
        )
    }
};

export default Contact;