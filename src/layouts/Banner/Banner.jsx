import React from 'react'
import BannerImg from '../../assets/SS_Banner.jpg'

function Banner() {
    return (
        <>
            <div className='col-12 px-0'>
                <img
                    src={BannerImg}
                    className=""
                    style={{maxWidth: '100%'}}
                    alt="SS logo"
                />
            </div>
        </>
    )
}

export default Banner