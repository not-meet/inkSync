import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header">
      <Link href='/' className="md:flex-1">
        <div className="flex flex-row">
          <Image src='/assets/icons/logo-icon.svg' alt="logo with name" width={32} height={32} className="hidden md:block" />
          <p className="text-28-semibold hidden md:block">InkSync</p>
        </div>
        <Image src='/assets/icons/logo-icon.svg' alt="logo" width={32} height={32} className="mr-2 md:hidden" />
      </Link>
      {children}
    </div>
  )
}

export default Header;
