const Card = ({name, role, bgColor}) => {
    return (
        <div>
            <div className={`w-80 ${bgColor} h-100 rounded-3xl flex flex-col justify-end items-center px-4 py-4`}>
                <div className="bg-[#E7E5E7] w-full px-4 py-4 rounded-2xl">
                     <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-sm font-thin">{role}</p>
                </div>
                   
                
            </div>

        </div>
    )
}

export default Card