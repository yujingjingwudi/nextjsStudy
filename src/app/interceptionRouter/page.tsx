import Link from 'next/link'
import React from 'react'

export default function defaultImg() {
    return (
        <div>
            <p><Link href={'/images/1'}>AAAAAAAAAAAAA</Link></p>
            <p><Link href={'/interceptionRouter/images/2'}>BBBBBBBBBBB</Link></p>
        </div>
    )
}
