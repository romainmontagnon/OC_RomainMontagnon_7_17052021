import React from 'react';

import Comment from './Comment';

const Feeds = () => {
    return (
        <div className='w-3/4 mx-auto my-10 bg-white bg-opacity-40 px-4 py-4 rounded-3xl'>
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
};

export default Feeds;