import Link from "next/link"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>



      <div className="footer">
        <div className="logo-div footer-div" > 
          <Link href="/"><img src="./icons/search.svg"></img> </Link> 
        </div>
      </div> 
    </html>
  )
}
