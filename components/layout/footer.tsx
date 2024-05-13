import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <nav>
            <div className="flex justify-between items-center h-24 w-[100vw-24px] mx-auto lg:max-w-[1440px] ">
                <div className="title">
                    <Link href="/">
                        首頁
                    </Link>
                </div>
                <div>
                    <Link href="https://imych.one">❤️ by @yc97463</Link>
                </div>
            </div>
        </nav>
    );
}

export default Footer;
