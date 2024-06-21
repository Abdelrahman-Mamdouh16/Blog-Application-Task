import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className=" bg-black mt-auto" dir="ltr">
            <div className="row justify-content-center justify-content-md-between align-items-center gx-0">
                <div className="col-6 col-md-4  d-flex justify-content-center justify-content-md-start ">
                    <div className="Image ms-3" style={{ width: "100px", height: '70px' }}>
                        <Image src='/travel-blog-logo.png' width={100} height={100} className="w-100 h-100" alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-6 d-md-none d-flex justify-content-end align-items-center ">
                    <ul className="social d-flex align-items-center m-0 text-decoration-none">
                        <li >
                            <Link href="/" >
                                <Image src='/facebook.svg' width={100} height={100} className="footerImg" alt="facebook" priority={false} />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image src='/twitter.svg' width={100} height={100} className="footerImg" alt="twitter" priority={false} />
                            </Link>
                        </li>
                        <li >
                            <Link href="/">
                                <Image src='/instagram.svg' width={100} height={100} className="footerImg" alt="instagram" priority={false} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 text-center my-3 my-md-0">
                    <p className="text-white m-0">Copyright 2024 My Blog-App.com powered by Abdelrahman Mamdouh</p>
                </div>
                <div className="col-md-4 d-none d-md-flex justify-content-end align-items-center ">
                    <ul className="social d-none d-md-flex align-items-center m-0 text-decoration-none">
                        <li >
                            <Link href="/" >
                                <Image src='/facebook.svg' width={100} height={100} className="footerImg" alt="facebook" priority={false} />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image src='/twitter.svg' width={100} height={100} className="footerImg" alt="twitter" priority={false} />
                            </Link>
                        </li>
                        <li >
                            <Link href="/">
                                <Image src='/instagram.svg' width={100} height={100} className="footerImg" alt="instagram" priority={false} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
