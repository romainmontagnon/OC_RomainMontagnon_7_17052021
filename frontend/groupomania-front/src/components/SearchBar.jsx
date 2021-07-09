import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Rechercher un membre"
            name="s" 
        />
        <button type="submit">< FontAwesomeIcon icon={faSearch} /></button>
    </form>
);

export default SearchBar;