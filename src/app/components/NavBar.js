import { Children } from "react";

export default function NavBar ({ children }) { 
    return <>
        <header> 
            <h1>{children}</h1>  
        </header> 
        
    </>
}