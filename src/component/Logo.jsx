import React from 'react'
import { arrow2 } from '../contents/image'
import { Typography } from '@mui/material'

const Logo = () => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            fontSize="large"
            fontWeight={"bold"}
            style={{ color: "#74CC7E" }}
        >
            One
            <span className='text-secondary relative'>
                <span className='z-50'>
                    Click
                </span>
                <img src={arrow2} className='absolute bottom-0 right-0 h-2 w-12 z-0' alt="" />
            </span>
        </Typography>
    )
}

export default Logo