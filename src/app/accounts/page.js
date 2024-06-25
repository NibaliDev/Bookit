"use client"

import Link from "next/link" 
import { useSearchParams } from 'next/navigation' 
import BookitCertified from "../components/BookitCertified" 
import Post from '../components/Post.js' 
import "../globals.css" 




export default function Btn ({}) { 
    

    const searchParams = useSearchParams()

    const newParam = searchParams.get('new')


    return <>
        <header> 
            <div className="account-top-div">
                <h1>{newParam}</h1> 
            </div> 
            <div className="logo-div account-div" > 
                <img  src="./icons/starGold.svg"></img> 
                <img  src="./icons/starGold.svg"></img> 
                <img  src="./icons/starGold.svg"></img> 
                <img  src="./icons/starGold.svg"></img> 
                <img  src="./icons/starGold.svg"></img> 
                
            </div> 
            <BookitCertified></BookitCertified>
            
            <p className="title"><b>Annonser</b></p> 

            <div className="home-div"> 

                <Post ImgSrc="/Hammaro.jpg" title="Gräsklippning" price="200" to="/new"></Post> 
                <Post ImgSrc="/Hammaro.jpg" title="Gräsklippning" price="200" to="/new"></Post> 
                <Post ImgSrc="/Hammaro.jpg" title="Gräsklippning" price="200" to="/new"></Post> 
                <Post ImgSrc="/Hammaro.jpg" title="Gräsklippning" price="200" to="/new"></Post> 
                <Post ImgSrc="/Hammaro.jpg" title="Gräsklippning" price="200" to="/new"></Post> 
                <Post ImgSrc="/Hammaro.jpg" title="Gräsklippning" price="200" to="/new"></Post> 
                <Post ImgSrc="/Hammaro.jpg" title="Gräsklippning" price="200" to="/new"></Post> 
                <Post ImgSrc="/Hammaro.jpg" title="Gräsklippning" price="200" to="/new"></Post> 

            </div>

            <div className="bottom-page-margin"></div> 

        </header> 
        
    </>
} 