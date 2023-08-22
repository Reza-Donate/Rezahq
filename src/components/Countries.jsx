import React from 'react'
import CountryList from './CountryList'
import RW from '../assets/RW.png'
import CM from '../assets/CM.png'
import GH from '../assets/GH.png'
import KY from '../assets/KE.png'
import NG from '../assets/NG.png'
import UG from '../assets/UG.png'
import SA from '../assets/ZA.png'
import ZM from '../assets/ZM.png'
import { Store } from '../store/context/AppContext'


const Countries = () => {
    const {state} = Store()
  return (
    <div>
        {state && <div  className='w-[36%] max-h-36 overflow-scroll bg-white p-5 absolute top-[23rem] '>
    <CountryList flag = {RW} name = {'Rwanda'} />
    <CountryList flag = {CM} name = {'Cameroon'} />
    <CountryList flag = {GH} name = {'Ghana'} />
    <CountryList flag = {KY} name = {'Kenya'} />
    <CountryList flag = {NG} name = {'Nigeria'} />
    <CountryList flag = {UG} name = {'Uganda'} />
    <CountryList flag = {SA} name = {'South Africa'} />
    <CountryList flag = {ZM} name = {'Zambia'} />


    </div>
        }
    </div>
  )
}

export default Countries