import React from 'react';

import Comment from './Comment';
import { getAllPost } from '../js/fetchRequest';
import { routes } from '../js/routes'
import { loadFromSessionStorage, storeToSessionStorage } from '../js/sesssion';

class Feeds extends React.Component {
    state = {
        message: '',
        image: '',
        userId: ''
    }

    handleFeeds() {
        let token = loadFromSessionStorage('token');
        getAllPost(token,routes.urlPost);
    }

    render() {
        return (
            <div className='w-3/4 mx-auto my-10 bg-white bg-opacity-40 px-4 py-4 rounded-3xl'>

                <button
                    className='mb-4 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase'
                    onClick={this.handleFeeds}>
                    Click
                </button>
                
                <div className='flex flex-col justify-around items-center
            border-solid border-b-2 border-mandy-500 border-opacity-80'>
                    <div className='w-5/6 flex flex-col'>
                        <div className='my-1'>les publications</div>
                        <div className='my-1'>Affichage des commentaires</div>
                        <div className='my-1 divide-y-4 divide-mandy-700 divide-solid'>
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Feeds;