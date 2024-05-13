import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    return (
        <nav>
            <div className="flex justify-between items-center h-24 w-[100vw-24px] mx-auto lg:max-w-[1440px] ">
                <div className="title">
                    <a href="/">
                        <Image src="/img/logo-and-title.svg" alt="logo" width={289} height={31} />
                    </a>
                </div>
                <div>
                    <Link href="https://github.com/yc97463/ndhusa13th-dashboard">Github</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
