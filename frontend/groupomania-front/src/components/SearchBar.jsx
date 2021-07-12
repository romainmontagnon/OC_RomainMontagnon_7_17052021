import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <input
                type="text"
                id="header-search"
                placeholder="Rechercher un membre"
                name="search"
                className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center'
            />
            <button type="submit" className='mx-1'>< FontAwesomeIcon icon={faSearch} /></button>
        </label>
    </form>
);

export default SearchBar;