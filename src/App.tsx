
import Day from "./components/Day.tsx";
import Hour from "./components/Hour.tsx";
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <>
      <Header />
      <div className="days container">
        <Day day="Monday"/>
        <Day day="Tuesday"/>
        <Day day="Wednesday"/>
        <Day day="Thursday"/>
        <Day day="Friday"/>
      </div>
      <div className="hours container">
        <Hour hour="Zero"/>
        <Hour hour="Three"/>
        <Hour hour="Six"/>
        <Hour hour="Nine"/>
        <Hour hour="Twelve"/>
        <Hour hour="Fifteen"/>
        <Hour hour="Eighteen"/>
        <Hour hour="Twenty-one"/>
      </div>
    </>
  )
}