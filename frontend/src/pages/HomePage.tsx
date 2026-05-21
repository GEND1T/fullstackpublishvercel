import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Beranda</Link></li>
                    <li><Link to="/Competition">Competition</Link></li>
                    <li><Link to="/Workshop">Workshop</Link></li>
                    <li><Link to="/Seminar">Seminar</Link></li>
                </ul>
            </nav>
            <h1>HomePage</h1>

        </div>
    );
}