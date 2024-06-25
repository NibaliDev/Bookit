import { Children } from "react"  
import Link from "next/link" 
import Image from "next/image" 
import Btn from "../components/Btn" 
import '../globals.css' 


export default function Post ({ ImgSrc, title, price, to}) { 
    
    return <>   
        <Link className="post-div-link" href={to}> 
            <div className="post-div"> 
                <div className="post">
                <img 
                className="post-image" 
                src={ImgSrc} 
                alt="Picture of the author"      
                /> 
                

                
                

                <div className="content-in-post"> 
                    <h1>{title}</h1> 
                    <h2>{price} kr</h2> 
                    
                </div> 
                <div className="bookit-certified-div"> 
                    <img src="./icons/checkmark.svg"/> 
                    <p>Bookit certified</p> 
                </div> 
            
                

            </div>
            
        </div> </Link> 
        
        
    </> 
} 
