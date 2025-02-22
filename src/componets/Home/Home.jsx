import React, { useContext } from 'react'
import RecentProudct from '../../context/RecentProudct/RecentProudct'
import CategariesSilder from '../CategariesSilder/CategariesSilder'
import MainSlider from '../MainSlider/MainSlider'





export default function Home() {
 
  
  return (
    <div>
<MainSlider/>
<CategariesSilder/>
  <RecentProudct />
    </div>
  )
}
