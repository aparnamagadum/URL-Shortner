import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [url , setUrl]=useState("");
  const [shortCode, setShortedUrl] = useState(null);
  async function longUrl(e){
    e.preventDefault();
    const response=await axios.post("https://url-shortner-client-2n6y.onrender.com/addUrl",{url});
    console.log("url added");
    setShortedUrl(response.data.shortUrl);
  }
  return (
     <>
      <fieldset>
      <form onSubmit={longUrl}>
        <h1>URL Shortner</h1>
        <label htmlFor="longUrl">Enter long URL</label>
        <input type="text" name="longUrl" onChange={(e)=>setUrl(e.target.value)}/>
        <button type='submit'>Shorten</button>
      </form>
      {shortCode && <p>Shortened URL: <a href={shortCode}  target="_blank">{shortCode}</a></p>}
      </fieldset>
    </>
  )
}

export default App
