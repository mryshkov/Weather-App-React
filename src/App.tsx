
import "./App.css";

import Day from "./components/Day.tsx";
import Hour from "./components/Hour.tsx";
import Header from "./components/Header.tsx";
import {useState} from "react";

export default function App(){

  const [daunclass, setdaunclass] = useState<string>();

  return (
    <>
      <Header />
      <div className="containerr">
        <div className="days container">
          <div id="daun" className={daunclass}>
            <Day day="Monday"/>
            <Day day="Tuesday"/>
            <Day day="Wednesday"/>
            <Day day="Thursday"/>
            <Day day="Friday"/>
          </div>
        </div>
        
        <button className="btn-outline-primary" onClick={() => setdaunclass("visually-hidden")}>clickme</button>
        <button className="btn-outline-primary" onClick={() => setdaunclass("")}>clickme</button>
        <div className="hours container">
          <Hour hour="Zero"/>
          <Hour hour="Three"/>
          <Hour hour="Six"/>
          <Hour hour="Nine"/>
          <Hour hour="Twelve"/>
          <Hour hour="Fifteen"/>
          <Hour hour="Eighteen"/>
          <Hour hour="Twenty-one"/>
          
          <Hour hour="Zero"/>
          <Hour hour="Three"/>
          <Hour hour="Six"/>
          <Hour hour="Nine"/>
          <Hour hour="Twelve"/>
          <Hour hour="Fifteen"/>
          <Hour hour="Eighteen"/>
          <Hour hour="Twenty-one"/><Hour hour="Zero"/>
          <Hour hour="Three"/>
          <Hour hour="Six"/>
          <Hour hour="Nine"/>
          <Hour hour="Twelve"/>
          <Hour hour="Fifteen"/>
          <Hour hour="Eighteen"/>
          <Hour hour="Twenty-one"/><Hour hour="Zero"/>
          <Hour hour="Three"/>
          <Hour hour="Six"/>
          <Hour hour="Nine"/>
          <Hour hour="Twelve"/>
          <Hour hour="Fifteen"/>
          <Hour hour="Eighteen"/>
          <Hour hour="Twenty-one"/>
        </div>
      </div>
      
    </>
  )
}