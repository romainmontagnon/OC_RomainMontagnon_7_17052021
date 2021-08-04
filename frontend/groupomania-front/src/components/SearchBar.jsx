import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        alert(`Fonctionnalité non active\nVotre recherche : ${this.state.search}`)
    }

    render() {
        return (
            <form
                className='hidden sm:block'
                onSubmit={this.handleSubmit}
                aria-label='formulaire de recherche'
            >
                <div aria-label="Rechercher">
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Rechercher..."
                        name="search"
                        aria-label="rechercher"
                        onChange={this.handleInputChange}
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl text-center antialiased
                lg:w-60
                w-3/4'
                        
                    />
                    <button type="submit" className='ml-2' aria-label='Rechercher'>< FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </form>
        )
    }
};

export default SearchBar;