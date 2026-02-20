import NavCenter from "./NavCenter"
import NavImg from "./NavImg"

const Navbar = () => {
    return (

        <div className="flex items-center justify-between px-6 py-2">

            <NavImg />
            <NavCenter />

        </div>

    )
}

export default Navbar