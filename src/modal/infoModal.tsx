import React from 'react'

interface IInfoModal {
    name: string,
    message: string,
    detail: string,
    activeModal: boolean
}

const InfoModal: React.FC<IInfoModal> = ({ name, message, detail, activeModal }) => {
    return (
        <div className={`text-sm font-semibold fixed top-24 right-5 ml-auto transition-all duration-500 ${activeModal ? "scale-1" : "scale-0"} ${detail === "info" && "bg-yellow-400 text-veryDarkBlue"} ${detail === "warning" && "bg-primaryRed"} ${detail === "success" && "bg-green-500"} rounded-md max-w-[300px] p-2`}>{name} {message}</div>
    )
}

export default InfoModal