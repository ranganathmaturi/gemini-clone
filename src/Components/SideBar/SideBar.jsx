import React, { useContext, useState } from "react";
import './Sidebar.css';
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const SideBar = () =>{
     const [extended,setExtended]=useState(false);
     const {onSent,previous,setRecent,setShowResult,newChat}=useContext(Context)
     

     const loadPrompt= async (prompt )=>{
        setRecent(prompt);
         await onSent(prompt);
     }
     


    return(
        <div className="side-bar">
            <div className="top">
               <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
               <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended? <p onClick={()=>newChat()}>New Chat</p>:null} 
               </div>
               {extended ?
               <div className="recent">
                <p className="recent-title" >Recent</p>
                {previous.map((item,i)=>{
                     return (
                        <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                     <p onClick={()=>loadPrompt(item)}>{item.slice(0,18)}...</p>
                      </div>

                     )
                })}
                
            </div>:null}
            </div>
            
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                </div>
               
            </div>

        </div>
    )
}
export default SideBar;