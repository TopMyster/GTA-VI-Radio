import logo from "/assets/gta-vi-logo.png"
import Radio from './Radio.tsx'

export default function Content() {
  return (
    <div className="content">
      <div className="logo">
        <img src={logo} alt="GTA VI Logo"/>
        <h1>Radio</h1>
      </div>
      <Radio/>
    </div>
  )
}
