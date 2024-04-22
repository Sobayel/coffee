import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-center mt-3 gap-5">
            <NavLink to='/'><button className="btn btn-primary">Home</button></NavLink>
            <NavLink to='/users'><button className="btn btn-primary">Users</button></NavLink>
            <NavLink to='/signUp'><button className="btn btn-primary">Sign Up</button></NavLink>
            <NavLink to='/signIn'><button className="btn btn-primary">Sign In</button></NavLink>
        </div>
    );
};

export default Header;