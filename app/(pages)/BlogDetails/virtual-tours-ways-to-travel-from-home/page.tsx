import Image from 'next/image'
import React from 'react'

export default function VirtualToursWaysToTravelFromHome() {
  return (
    <>
      <div className="VirtualTours py-3 mb-3 text-white">
        <div className="container">
          <div className="mainImage rounded-3">
            <Image src={'/virtual-tour_20210331171226_0.jpg'} width={1400} height={480} alt={'virtual-tour'} className='mainBanner w-100 h-auto rounded-3' />
          </div>
        </div>
        <div className="mainContent">
          <div className="container">
            <div className="mainContent-body pt-4 bg-transparent h-100 w-100">
              <p className="card-text-top mainColor position-relative" style={{ fontSize: '12px', fontWeight: '700' }}>TRAVEL GUIDE</p>
              <p className="card-text mb-1">
                <small className="text-white">MAR. 31, 2021</small>
              </p>

              <h1 className="card-title fw-bold my-3">
                Virtual Tours - Ways to Travel
                From Home
              </h1>
              <p className="card-text">
                Virtual tours can open up amazing and awe-inspiring locations around the world that may otherwise be inaccessible to you. You can experience the majesty of the Sistine Chapel, the wonder of the Great Wall of China, or the beauty of Hawaii from the comfort of your own home.
              </p>

              <h3 className="card-title fw-bold my-3">
                Picking the Right Virtual Tour for You
              </h3>

              <p className="card-text">As you consider which virtual tour you want to take, try finding one that not only helps you explore a new place, but consider a place tied to your heritage. Learning more about your cultural heritage can help you become more resilient as you develop a deeper understanding of your story.
              </p>
            </div>

            <div className="subContent_1">
              <h3 className="card-title fw-bold my-5">
                1. Vatican Museums
              </h3>
              <Image src={'/vatican-museum.jpg'} alt={'vatican-museum'} width={500} height={500} className='img-fluid w-100 h-100 rounded-3'/>
              <p className="card-text my-3">
              This collection of virtual tours lets you see some of the masterpieces of the Renaissance, including the Sistine Chapel, Niccoline Chapel, Raphael’s Room, and more.
              </p>
            </div>
            <div className="subContent_2">
              <h3 className="card-title fw-bold my-5">
                2. Great Wall of China
              </h3>
              <Image src={'/great-wall-of-china.jpg'} alt={'vatican-museum'} width={500} height={500} className='img-fluid w-100 h-100 rounded-3'/>
              <p className="card-text my-3">
              The Great Wall is often regarded as a wonder of the world, making it a prime tourist attraction. By taking the tour online, you can skip the crowds and still experience the incredible view and Chinese history.
              </p>
            </div>
            <div className="subContent_3">
              <h3 className="card-title fw-bold my-5">
                3. Louvre
              </h3>
              <Image src={'/louvre.jpg'} alt={'vatican-museum'} width={500} height={500} className='img-fluid w-100 h-100 rounded-3'/>
              <p className="card-text my-3">
              The Louvre, located in Paris, is the largest art museum in the world. Three of the museum’s top exhibits are available online.
              </p>
            </div>
            <div className="subContent_4">
              <h3 className="card-title fw-bold my-5">
              4. Taj Mahal
              </h3>
              <Image src={'/taj-mahal.jpg'} alt={'vatican-museum'} width={500} height={500} className='img-fluid w-100 h-100 rounded-3'/>
              <p className="card-text my-3">
              This ivory marble mausoleum in India is one of the most famous buildings in the world. Emperor Shah Jahan had it built in 1632 for his wife Mumtaz Mahal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
