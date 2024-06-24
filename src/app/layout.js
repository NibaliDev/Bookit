import { Inter } from 'next/font/google' 
import NavBar from './components/NavBar.js' 
import Btn from './components/Btn.js' 
import './globals.css'
import Link from 'next/link.js' 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <body>
      <div class="title-bar"> 
        <Btn to="/">Bookit</Btn> 
      </div>
      
    </body> 
  )
} 
