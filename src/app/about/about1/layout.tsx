import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function Layout(props: {
    children: React.ReactNode
    child3: React.ReactNode
    child2: React.ReactNode
  }) {
    return (
      <>
        {props.children}
        {props.child3}
        {props.child2}
        666666
      </>
    )
  }
