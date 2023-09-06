import React from 'react'
import { Image } from 'antd'
import img from '../../../../public/assert/imgs/pic1.jpg'
import Modal from '@/components/modal/Modal'

export default function page(props: any) {
    console.log('****************')
    console.log(props.params.id)
    let pic = props.params.id == '1' ? '/assert/imgs/pic1.jpg' : '/assert/imgs/pic2.jpg'
    return (
        <>
            <Modal>ddd</Modal>
        </>
    )
}
