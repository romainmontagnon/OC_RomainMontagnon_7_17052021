import NavLogo from './Nav/Nav_Logo.jsx';
import NavGlobal from './Nav/Nav_Global.jsx';

const Navbar = (props) => {
    if (props.isLoggedIn) {
        return (
            <div className="flex flex-row justify-between items-center" >
                <NavLogo />
                <nav>
                    <NavGlobal />
                </nav>
            </div>
        );
    } else {
        return (
            <div className="flex flex-row justify-between items-center" >
                <NavLogo />
                <nav>
                </nav>
            </div>
        );
    }
}

export default Navbar;