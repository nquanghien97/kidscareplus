'use client';

import MenuIcon from '@/assets/icons/MenuIcon'
import { ListHeader } from '@/config/ListHeader'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import AppSidebar from './Sidebar';
import MenuDropdown from './common/MenuDropdown';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <>
      <header className="md:h-[80px] md:bg-[#065691] h-[60px] shadow-sm shadow-black/20 fixed top-0 right-0 left-0 z-[100] bg-white">
        <div className="h-full flex justify-between max-w-6xl m-auto">
          <Link href="/" className="flex justify-center items-center max-md:w-full">
            <Image src="/logo.png" alt="logo" width={200} height={50} className="max-md:hidden w-auto" />
            <Image src="/logo-mini.png" alt="logo" width={200} height={50} className="md:hidden w-[50px] h-[50px]" />
          </Link>
          <div className="max-md:hidden flex items-center">
            <ul className="flex items-center gap-4 text-white">
              {ListHeader.map(item => (
                <li key={item.id} className={`px-3 py-1 font-bold ${pathname === item.path ? 'text-[#f18017]' : ''}`}>
                  {item.children ? (
                    <MenuDropdown
                      title={item.title}
                      path={item.path}
                      key={item.id}
                    >
                      <ul className="bg-white flex flex-col min-w-[15rem] border border-[#ffffff12] rounded-md text-black">
                        {item.children.map(childItem => (
                          <li key={childItem.id} className="border-b-[1px]">
                            <Link className={`cursor-pointer hover:text-[#f18017] p-4 w-full flex items-center duration-300`} href={childItem.path}>
                              {childItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </MenuDropdown>
                  ) : (
                    <Link key={item.id} href={item.path} className={`hover:text-[#f18017] duration-300 `}>
                      {item.title}
                    </Link>
                  )}
                </li>
              )
              )}
            </ul>
          </div>
          <div className="flex items-center mr-8 md:hidden">
            <div className="cursor-pointer p-1 hover:bg-[#e0e0e0] rounded-full duration-300" onClick={() => setIsOpenSidebar(true)}>
              <MenuIcon fill='black' />
            </div>
          </div>
        </div>
      </header>
      <AppSidebar
        open={isOpenSidebar}
        setOpen={setIsOpenSidebar}
        start="-24rem"
        end="0"
        exit="-24rem"
      >
        <div className="py-7">
          <ul className="flex max-md:flex-col text-black">
            {ListHeader.map(item => (
              <li key={item.path} className="px-3 md:py-1 py-4 max-md:border-b-2" onClick={() => setIsOpenSidebar(false)}>
                {item.children ? (
                  <MenuDropdown
                    title={item.title}
                    path={item.path}
                  >
                    <ul className="bg-[#0f0f10] flex flex-col min-w-[15rem] border border-[#ffffff12] rounded-md md:py-2">
                      {item.children.map(childItem => (
                        <li key={childItem.path}>
                          <Link className={`cursor-pointer hover:text-[#f18017] px-4 py-2 w-full flex items-center`} href={childItem.path}>
                            {childItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </MenuDropdown>
                ) : (
                  <Link href={item.path} className={`hover:text-[#f18017] duration-300 ${pathname === item.path ? 'text-[#f18017]' : ''}`}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </AppSidebar>
      <div className="md:h-[80px] h-[60px]" />
    </>
  )
}

export default Header