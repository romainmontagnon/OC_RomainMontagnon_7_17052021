import NavLogo from './Nav/Nav_Logo.jsx';
import NavGlobal from './Nav/Nav_Global.jsx';

const Navbar = (props) => {
    if (props.isLoggedIn) {
        return (
            <div className="flex flex-row lg:justify-between justify-evenly items-center" >
                <NavLogo />
                <nav>
                    <NavGlobal isLoggedIn={props.isLoggedIn} isAdmin={props.isAdmin} login={props.login} />
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