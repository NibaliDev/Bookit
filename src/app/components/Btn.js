import { Children } from "react"; 
import Link from "next/link";

export default function Btn ({ children, to }) { 
    return <>
        <header> 
            <div className="btn">
                <Link className="btn-text" href="href">{children}</Link> 
            </div>
            
        </header> 
        
    </>
} 