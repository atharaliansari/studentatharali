import React, { useState } from 'react'
import apiInstance from '../config/apis/apis';

function Users() {

  const [postData, setPostData] = useState([])

  const getData = () => {
    apiInstance.get('users')
      .then((res) => {
        console.log(res.data)
        setPostData([...res.data])
      })
      .catch((err) => {
        console.log(err, 'no data')
      })
  }

  return (
    <>
      <div>
        <div>
          <button onClick={getData}>Get data</button>
        </div>
        <div>
          {postData.map((x, i) => (
            <div className='border rounded-sm justify-center m-2 p-2' key={i}>
              <p><b>Body:</b> {x.id}</p>
              <p><b>Title:</b> {x.name}</p>
              <p><b>UserID:</b> {x.email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Users;