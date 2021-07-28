import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <input
                type="text"
                id="header-search"
                placeholder="Rechercher..."
                name="search"
                className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl text-center antialiased
                lg:w-60
                w-3/4'
            />
            <button type="submit" className='ml-2' onClick={ () => {console.log(('hello wolrd !'))}}>< FontAwesomeIcon icon={faSearch} /></button>
        </label>
    </form>
);

export default SearchBar;