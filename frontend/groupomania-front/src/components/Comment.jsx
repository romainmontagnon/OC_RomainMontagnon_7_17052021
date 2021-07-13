import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Comment = () => {
    return (
        <div className='w-3/4 bg-white bg-opacity-40 px-4 py-4 rounded-3xl'>
            <h3>Laisser un commentaire</h3>
            <div className='flex flex-row justify-evenly items-center'>
                <form>
                    <textarea
                        id="user-publication"
                        placeholder="I have something to say..."
                        rows={2}
                        name="user-publication"
                        className='w-60 h-16 bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl text-left px-2 py-1 my-2 resize-none'
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
                        < FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Comment;