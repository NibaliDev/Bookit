import { Children } from "react"; 
import Link from "next/link";

export default function Btn ({ children, to }) { 
    return <>
        
            <div className="bookit-certified-div"> 
                <img src="./icons/checkmark.svg"/> 
                <p>Bookit certified</p> 
            </div> 
        
    </>
} 