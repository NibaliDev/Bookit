import { Children } from "react"  
import Link from "next/link" 
import Image from "next/image" 
import Btn from "../components/Btn" 
import BookitCertified from "../components/BookitCertified" 
import '../globals.css' 


export default function Post ({}) { 
    let title = "Gräsklippning" 
    let price = "200" 
    let description = "Hej! Jag erbjuder trädgårdsservice av hög kvalitet. Jag klipper hela din gräsmatta, för endast 200 kr/ h. " 
    
    return <>
        <header> 
            <div className="post">
            <img 
            className="post-image" 
            src="/Hammaro.jpg" 
            alt="Picture of the author"      
            />  
            <div className="post-icon-div">
                <img className="post-icons" src="./icons/heart.svg"/> 
                <img className="post-icons"src="./icons/comment.svg"/>
                <img className="post-icons" src="./icons/star.svg"/> 
                <p>1 Likes, 2 Kommentarer</p> 
            </div> 

            
            

            <div className="content-in-post"> 
                <h1>{title}</h1> 
                <h2>{price} kr</h2> 
                <Btn>Beställ</Btn> 
                <p>{description}</p> 
            </div> 
            

            <BookitCertified></BookitCertified>

            <div className="logo-div">
                <img src="./icons/star.svg"/> 
                <h2><Link href="/accounts?new=Gröna Fingrar">Gröna Fingrar</Link></h2> 
            </div> 

            <div className="bottom-page-margin"></div> 

            
                

            </div>
            
        </header> 
        
    </> 
} 
