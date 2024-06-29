import React from 'react'

const CustomButton = ({ title, otherStyle }) => {
    return (
        <button className={`bg-gradient-to-t from-teal-800 to-green-400 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:from-green-800 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${otherStyle}`}>{title}</button>
    )
}

export default CustomButton