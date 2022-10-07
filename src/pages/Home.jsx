import React from 'react'
import Header from '../components/HomeComponent/Header/Header'
import Schedule from '../components/HomeComponent/Schedule/Schedule'
import Solution from '../components/HomeComponent/Solution/Solution'
import Team from '../components/HomeComponent/Team/Team'



const Home = () => {
  return (
   <div>
     <Header/>
     <Schedule/>
     <Team/>
     <Solution/>
   </div>
  )
}

export default Home