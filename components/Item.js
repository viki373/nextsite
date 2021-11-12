import React from 'react'

export default function Item({src, alt}) {
    return (
        <>
            <div className="item_img d-flex justify-content-center align-items-center">
                <img src={src} alt={alt} className="w-100" />
            </div>
        </>
    )
}
