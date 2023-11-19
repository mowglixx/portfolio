import Navlink from "@/components/villages/Navlink";



export default function Home() {
  return (
    <header>
      <div className="navWrapper">
        <h1 className="navLogo">mowglixx</h1>
        <button className="navControls">
          <span className="srOnly">menu</span>
        </button>
      </div>
      <nav className={`mainNav`} aria-label="main navigation">
        <ul>
          <li><Navlink href="#" className="navLink" title="About">ABT</Navlink></li>
          <li><Navlink href="#" className="navLink" title="Work">WRK</Navlink></li>
          <li><Navlink href="#" className="navLink" title="Fun">FUN</Navlink></li>
          <li><Navlink href="#" className="navLink" title="Contact">CNT</Navlink></li>
        </ul>
      </nav>
    </header>
  )
}
