"use client"
import SpinnerLoading from '@/app/(components)/SpinnerLoading'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function AllBlogs() {
  interface BlogPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  const [data, setData] = useState<null | BlogPost[]>([]);
  // 
  const getBlogs = async () => {
    try {
      const { data } = await axios.get<BlogPost[]>('https://jsonplaceholder.typicode.com/posts');
      if(data.length>0){
        setData(data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  };

  if (data!=null) {
    // console.log(data)
  }
  useEffect(() => {
    getBlogs()
  }, [])


  return (
    <>
      <div className="All-Blog" style={{ backgroundColor: '#222222' }}>
        <div className="container">
          <h1 className='fw-bold pt-5 pb-3 text-white'>All Blog Posts</h1>

          {/* main Blog */}
          <div className="mainBlog">
            <Link href={'/BlogDetails/virtual-tours-ways-to-travel-from-home'} className='text-decoration-none'>
              <div className="card mb-3 rounded-3 overflow-hidden" style={{ maxWidth: '100%' }}>
                <div className="row g-0">
                  <div className="col-md-8">
                    <Image src={"/virtual-tour_20210331171226_0.jpg"} width={853} height={384} className=" rounded object-fit-cover w-100" alt="" loading='lazy' />
                  </div>
                  <div className="col-md-4">
                    <div className="card-body pt-4 bg-body-secondary h-100 w-100">
                      <p className="card-text-top mainColor position-relative" style={{ fontSize: '12px', fontWeight: '700' }}>TRAVEL GUIDE</p>
                      <p className="card-text mb-1"><small className="text-body-secondary">MAR. 31, 2021</small></p>

                      <h3 className="card-title fw-bold">Virtual Tours - Ways to Travel
                        From Home
                      </h3>
                      <p className="card-text">Virtual tours can open up amazing and awe-
                        inspiring locations around the world that may
                        otherwise be inaccessible to you. You can
                        experience the majesty of the Sistine Chapel, the...</p>

                    </div>
                  </div>
                </div>
              </div>
            </Link>

          </div>

          { /* all Blogs */ }
          {!data?.length ? <SpinnerLoading /> :

            <div className="allBlogs my-5">
              <div className="row gy-4">
                {data?.map((ele, idx) =>
                  <div className="col-md-4">
                    <Link href={`/BlogDetails/${ele.id}`} className='text-decoration-none'>

                      <div className="card">
                        <Image src={`https://placehold.co/600x400?text=Example+Placeholder+Image%20${idx + 1}`} width={600} height={400} className="card-img-top w-100 h-100" alt='aaa' loading='lazy' />
                        <div className="card-body">
                          <p className="card-text-top mainColor position-relative" style={{ fontSize: '12px', fontWeight: '700' }}>INFINITE SCROLL</p>
                          <p className="card-text mb-1"><small className="text-body-secondary">MAR. 31, 2021</small></p>

                          <h3 className="card-title fw-bold overflow-y-visible">{ele.title.split(' ').length <= 3 ? ele.title : `${ele.title.split(' ').slice(0, 3).join(' ')}...`}</h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>

          }
        </div>
      </div>
    </>
  )
}
