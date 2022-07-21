import React from "react"
import './tabs.css'
import { data } from "./Listaedomain"
const Tab = (props)=> {
    return(
        <div classname ='TAB'>
        
      
        <div className='Box'>
          <div className='Tabs'>
            <div className='Tab tabi-aktiv'>
              Domains
            </div>
            <div className='Tab'>
              Web Hosting
            </div>
            <div className='Tab'>
              Dedicaed Server
            </div>
            <div className='Tab'>
              Virtual Cloud Server
            </div>
            <div className='Tab'>
              WordPress Hosting
            </div>
            <div className='Tab'>
              Email Hosting
            </div>
            <div className='Tab'>
              VPS Hosting Server
            </div>
            <div className='Tab'>
              Free Hosting
            </div>
            </div>
          </div>

        
        {data.map((props) =>{
            return(
      <div className='content'>
        
        <div className='Content content-aktiv'>
            <h5>{props.title}</h5>
            

        </div>
        </div>
            )

            })}
      
    
    
      
      </div>
      
      
 
         
    )
    
}
export default Tab