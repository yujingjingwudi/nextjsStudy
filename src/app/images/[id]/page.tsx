import React from 'react'
import { Image } from 'antd'
import img from '../../../../public/assert/imgs/pic1.jpg'

export default function page(props: any) {
    console.log('****************')
    console.log(props)
    let pic = props.params.id == '1' ? '/assert/imgs/pic1.jpg' : '/assert/imgs/pic2.jpg'
    return (
        <>
            <Image src={pic} alt='哆啦A梦' />
        </>
    )
}
