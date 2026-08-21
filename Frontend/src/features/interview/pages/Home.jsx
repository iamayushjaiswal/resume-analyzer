import React from 'react'
import "../style/home.scss"
const Home = () => {
  return (
    <main className='home'>
     <div className="left">
        <textarea name="job-description" id="jobDescription" placeholder='Enter job description here...'></textarea>
        </div>   

        <div className="right">
            <div className="input-group">
                <label htmlFor="resume">Upload Resume </label>
            </div>
        </div>
        
     </main>
  )
}

export default Home