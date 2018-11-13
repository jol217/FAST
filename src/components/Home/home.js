import React from 'react'
import Header from '../Header/header'
import Sidebar from '../Sidebar/sidebar'
import './home.css'
const listingid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const listingtitles = ["Buy this Banana", "Buy this house", "empty"];
const images = ['https://i5.walmartimages.ca/images/Large/580/6_r/875806_R.jpg',
                'https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1'];
const listingprice = [50, 1200, 20, 30, 40, 50, 40, 854, 234]
const listingdescriptions = ["this banana is so cheap you'd have to be stupid not to buy it",
"unbelievably expensive single in the living room for $1200 a month",
"empty"];

const getListings = listingid.map((id) =>
  <div className="listing">
    <div className="listing-title"><b>{listingtitles[id]}</b></div>
    <img className="listing-picture" src={images[id]} alt="did not load" />
    <center>${listingprice[id]}</center><br />
    {listingdescriptions[id]}
  </div>
);

const Home = () => (
  <div>
    <Header />
    <div className="content">
      <Sidebar />
      <div className="content-listings">
        {getListings}
      </div>
    </div>
  </div>
)

export default Home