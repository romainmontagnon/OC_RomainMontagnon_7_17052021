import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Publish = () => {
    return (
        <div className='w-2/4 mx-auto bg-white bg-opacity-40 px-4 py-4 rounded-3xl flex flex-row justify-around items-center'>
            <form>
                <textarea
                    id="user-publication"
                    placeholder="One upon a time..."
                    rows={4}
                    name="user-publication"
                    className='w-80 h-20 bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl text-left px-2 py-1 my-2 resize-none'
                />
            </form>
            <div className="flex flex-col">
                <button
                    className='mb-4 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase'
                    onClick={() => {
                    }}>
                    < FontAwesomeIcon icon={faCameraRetro} />
                </button>
                <button
                    className='rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase'
                    onClick={() => {
                    }}>
                    Publier
                    < FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    )
};

export default Publish;