import React from 'react'
import A from './A';
export default function Card ({data}) {
    const path = '/category/'
    let slug = data.url_parent;
    let dataSlug = data.slug;
    return (
        
            <div className="col-3 ">
                <A href={path + slug + '/' + dataSlug}
                    text={data.name}
                />
            </div>

    )
}

