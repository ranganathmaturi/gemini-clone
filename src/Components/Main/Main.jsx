import React, { useContext } from "react";
import './Main.css';
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main=()=>{

    const {onSent,recent,showResult,loading,resultData,setInput,input,setPrevious} = useContext(Context);



    return(
    <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
        
        
                
        <div className="main-container">
        {!showResult ?<>
                
            <div className="greet">
                    <p><span>Hello,Geek.</span></p>
                    <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card" onClick={()=>{onSent('Suggest beautiful places to see on an upcoming road trip')
                setPrevious((prev)=>[...prev,'Suggest beautiful places to see on an upcoming road trip']);
                    
                }}>
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div 
                className="card" 
                onClick={()=>{onSent('Briefly Summarize this concept:Urban Planning')
                    setPrevious((prev)=>[...prev,'Briefly Summarize this concept:Urban Planning']);
                        
                    }}>
                    <p>Briefly Summarize this concept:Urban Planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div 
                className="card"
                onClick={()=>{onSent('Brainstorm team bonding activities for our  work retreat')
                    setPrevious((prev)=>[...prev,'Brainstorm team bonding activities for our  work retreat']);
                        
                    }}>
                    <p>Brainstorm team bonding activities for our  work retreat</p>
                 <img src={assets.message_icon} alt="" />
                </div>
                <div 
                className="card"
                onClick={()=>{onSent('Improve the Readability of the following code')
                    setPrevious((prev)=>[...prev,'Improve the Readability of the following code']);
                        
                    }}>
                    <p>Improve the Readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>:
            <div className="result">
                 <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recent}</p>
                 </div>
                 <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<div className="loader">
                       <hr />
                       <hr />
                      <hr />
                    </div>
                    
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}

                 </div>


             </div>}
             
                
                
               
            
                
        
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Enter Prompt Here" onChange={(e)=>setInput(e.target.value)} value={input}/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                    {input?    <img src={assets.send_icon} alt="" onClick={()=>onSent()} />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info,including about people,so double-check responses.Your privacy and Gemini Apps

                </p>
            </div>

        </div>    
            
           

        </div>
    )
}
export default Main;
