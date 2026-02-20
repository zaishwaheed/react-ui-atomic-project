import NavItems from "./NavItems"
import NavRightside from "./NavRightside"

const NavCenter = () => {
    return (
        <div className="flex items-center gap-50">

            <NavItems />

            <NavRightside />

        </div>
    )
}

export default NavCenter;