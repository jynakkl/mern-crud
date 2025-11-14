import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <h1 className="btn btn-ghost text-xl">Mern Crud</h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/create"}>Create</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header