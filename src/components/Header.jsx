import { currentYear } from "../data";

export default function Header() {
    return(
        <header className="header">
            <h1>{currentYear} Year in Months</h1>
        </header>
    );
}