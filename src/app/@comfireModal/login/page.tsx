'use client'
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter()
    return (
        <div>
            <div style={{ width: "400px", height: "500px", backgroundColor: "cyan" }}></div>
            <button onClick={() => router.back()}>Close modal</button>
            <h1>Login</h1>
            ...
        </div>
    )
}