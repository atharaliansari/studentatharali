import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar';

function Notification() {
  const [postData, setPostData] = useState([]);

  const getpostData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data);
        setPostData(res.data); // Response data ko state mein set karte hain
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  useEffect(() => {
    getpostData();
  }, []);

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <br/>
      <br/>
      <br/>
   
      <div className="flex flex-wrap">
        {postData.map((x, i) => (
          <div key={i} className="w-[300px] rounded shadow-lg border m-3 p-3">
            <img src=''/>
            <p className="text-xl font-bold">Title: {x.title}</p>
            <p className="">Description: {x.description}</p>
            <p>Price: ${x.price}</p>
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Notification;
