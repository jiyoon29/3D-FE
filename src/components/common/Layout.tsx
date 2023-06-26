import React, { ReactNode } from 'react'
import Header from './header/Header'
import SideNav from './sideNav/SideNav'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* @ts-expect-error Async Server Component */}
      <SideNav />
      <div className="ml-[24.4rem] h-full w-full">
        <Header />
        <main className="mt-[7.2rem] min-h-[calc(100vh-7.2rem)] bg-bg-2">{children}</main>
      </div>
    </div>
  )
}
