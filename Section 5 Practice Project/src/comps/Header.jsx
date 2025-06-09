import headerImg from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header className="center" id="header">
        <img src={headerImg}/>
        <h1>React Investment Calculator</h1>
        <p>Calculate your investment growth over time!</p>
    </header>
  );
}