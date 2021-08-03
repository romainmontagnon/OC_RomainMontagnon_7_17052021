import NavLogo from './Nav/Nav_Logo.jsx';
import NavGlobal from './Nav/Nav_Global.jsx';

const Navbar = (props) => {
    if (props.isLoggedIn) {
        return (
            <div className="flex flex-row lg:justify-between justify-evenly items-center
            animate__animated animate__backInLeft animate__slow" >
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