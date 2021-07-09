import NavLogo from './Nav_Logo.jsx';
import NavMenu from './Nav_Menu.jsx';

function Nav() {
    return (
        <div className="flex flex-row justify-between items-center" >
            <NavLogo />
            <NavMenu />
        </div>
    );
}

export default Nav;