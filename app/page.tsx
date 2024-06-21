import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className="homePage text-white py-5" style={{ backgroundColor: '#222222' }}>
        <div className="container">
          <div className="firstSection">
            <div className="row gy-5 flex-column-reverse flex-md-row">
              <div className='col-md-5 text-center text-md-start'>
                <div className="content h-100 w-100 d-flex flex-column justify-content-center">
                  <p className='fs-6 mainColor'>WANDER THE WORLD</p>
                  <h1 className='fw-bolder'>From short breaks to long adventures</h1>
                  <p className='fs-5'>Travel blog featuring travel tips, guides, and photography from around the world. Whether you need guidance for your first trip, or you're a seasoned traveler looking for destination inspiration, you've come to the right place!</p>
                  <div>
                    <Link href={'/All-Blogs'} className='text-white'>
                      <button className='btn mainBGColor px-3 py-2'>Read our blog</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-md-7 py-5'>
                <div className="img d-flex justify-content-end overflow-hidden" >
                  <Image src='/gaddafi-rusli-2ueUnL4CkV8-unsplash 1.jpg' width={600} height={600} alt="gaddafi-rusli-2ueUnL4CkV8-unsplash" className='rounded-2 homeImgTop img-fluid' priority={false} />
                </div>
              </div>
            </div>
          </div>

          <div className="secSection">
            <div className="row">
              <div className='col-md-7 py-5 '>
                <div className="img d-flex justify-content-start">
                  <Image src='/travel-photography_20210331143648_0.jpg' width={600} height={600} alt="gaddafi-rusli-2ueUnL4CkV8-unsplash" className='rounded-2 homeImgDown img-fluid' priority={false} />
                </div>
              </div>
              <div className='col-md-5 text-center text-md-start'>
                <div className="content h-100 w-100 d-flex flex-column justify-content-center">
                  <p className='fs-6 mainColor'>ABOUT US</p>
                  <h1 className='fw-bolder'>Adventurers and Storytellers</h1>
                  <p className='fs-5'>Through our award-winning blog, we love to provide travelers with guidance and inspiration and connect them to meaningful experiences as they travel the world with curiosity!</p>
                  <div>
                    <Link href={'/About'} className='text-white'>
                      <button className='btn mainBGColor px-3 py-2'>Learn about us</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div >
    </>
  )
}
