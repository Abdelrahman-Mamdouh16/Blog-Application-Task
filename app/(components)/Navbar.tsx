"use client"
import React from 'react'
import navimg from '../../public/travel-blog-logo.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function Navbar() {
    const pathName=usePathname()
    // console.log(pathName);
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white py-4">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <Image src={navimg} alt='' className='w-25 h-25 me-3' priority={true}/>
                        <span className='fw-bold d-none d-sm-inline' style={{ color: '#243e63' }}>My Blog App</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                            <li className="nav-item">
                                <Link className={`nav-link ${pathName==='/'?'activeLink':''}`} aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathName==='/All-Blogs'?'activeLink':''}`} href="/All-Blogs">
                                    All Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathName==='/Create-Blog'?'activeLink':''}`} href="/Create-Blog">
                                    Create Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathName==='/About'?'activeLink':''}`} href="/About">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
