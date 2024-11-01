import apiInstance from "../config/apis/apis"

export default function Post() {

  const postData = () => {
    apiInstance.post('posts', {
      body: 'App',
      title: 'SPA',
      userId: 90
    })
  }

  return (
    <>
      <div>
        <button onClick={postData}>Post Data</button>
      </div>
    </>
  )
}