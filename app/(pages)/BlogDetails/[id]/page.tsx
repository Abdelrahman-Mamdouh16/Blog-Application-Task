"use client"
import SpinnerLoading from '@/app/(components)/SpinnerLoading';
import axios from 'axios';
import Image from 'next/image'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function BlogDetailsById() {
  interface BlogPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const [data, setData] = useState<BlogPost | null>(null);

  const { id } = useParams<{ id: string }>();

  const getBlogDetailsById = async () => {
    try {
      const { data } = await axios.get<BlogPost>(`https://jsonplaceholder.typicode.com/posts/${id}`); // Typed response and id parameter
      if (data != null) {
        setData(data);
      }
    } catch (error) {
      console.error('Error fetching blog details:', error);

    }
  };

  useEffect(() => {
    getBlogDetailsById();
  }, []);
  // if (data)
  // console.log(data);


  return (
    <>
      {!data ? <SpinnerLoading /> :
        <div className="BlogDetails py-3 text-white" style={{ backgroundColor: '#222222' }}>
          <div className="container">
            <div className="mainImage rounded-3">
              <Image src={'https://placehold.co/600x200?text=Example+Placeholder+Image'} width={1400} height={480} alt={'virtual-tour'} className='mainBanner w-100 h-auto rounded-3' />
            </div>
          </div>
          <div className="mainContent">
            <div className="container">
              <div className="mainContent-body pt-4 bg-transparent h-100 w-100">
                <p className="card-text-top mainColor position-relative" style={{ fontSize: '12px', fontWeight: '700' }}>
                  TRAVEL GUIDE
                </p>
                <p className="card-text mb-1">
                  <small className="text-white">MAR. 31, 2021</small>
                </p>

                <h1 className="card-title fw-bold my-3">
                  {data?.title}
                </h1>
                <p className="card-text">
                  {data?.body}
                </p>

                <h3 className="card-title fw-bold my-3">
                  {data?.title}
                </h3>

                <p className="card-text">
                  {data?.body}
                </p>
              </div>

              <div className="subContent_1">
                <h3 className="card-title fw-bold my-5">
                  1. Vatican Museums
                </h3>
                <Image src={'https://placehold.co/600x400?text=Example+Placeholder+Image'} alt={'vatican-museum'} width={500} height={500} className='img-fluid w-100 h-100 rounded-3' />
                <p className="card-text my-3">
                  This collection of virtual tours lets you see some of the masterpieces of the Renaissance, including the Sistine Chapel, Niccoline Chapel, Raphael’s Room, and more.
                </p>
              </div>
              <div className="subContent_2">
                <h3 className="card-title fw-bold my-5">
                  2. Great Wall of China
                </h3>
                <Image src={'https://placehold.co/600x400?text=Example+Placeholder+Image'} alt={'vatican-museum'} width={500} height={500} className='img-fluid w-100 h-100 rounded-3' />
                <p className="card-text my-3">
                  The Great Wall is often regarded as a wonder of the world, making it a prime tourist attraction. By taking the tour online, you can skip the crowds and still experience the incredible view and Chinese history.
                </p>
              </div>
              <div className="subContent_3">
                <h3 className="card-title fw-bold my-5">
                  3. Louvre
                </h3>
                <Image src={'https://placehold.co/600x400?text=Example+Placeholder+Image'} alt={'vatican-museum'} width={500} height={500} className='img-fluid w-100 h-100 rounded-3' />
                <p className="card-text my-3">
                  The Louvre, located in Paris, is the largest art museum in the world. Three of the museum’s top exhibits are available online.
                </p>
              </div>
              <div className="subContent_4">
                <h3 className="card-title fw-bold my-5">
                  4. Taj Mahal
                </h3>
                <Image src={'https://placehold.co/600x400?text=Example+Placeholder+Image'} alt={'vatican-museum'} width={500} height={500} className='img-fluid w-100 h-100 rounded-3' />
                <p className="card-text my-3">
                  This ivory marble mausoleum in India is one of the most famous buildings in the world. Emperor Shah Jahan had it built in 1632 for his wife Mumtaz Mahal.
                </p>
              </div>
            </div>
          </div>

        </div>
      }
    </>

  )
}
