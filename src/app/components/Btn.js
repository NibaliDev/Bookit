import { Children } from "react"; 
import Link from "next/link";

export default function Btn ({ children, to }) { 
    return <>
        <header> 
            <div>
                <Link class="btn" href="href">{children}</Link> 
            </div>
            
        </header> 
        
    </>
} 