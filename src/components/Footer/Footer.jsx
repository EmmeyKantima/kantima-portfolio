import { ArrowUp } from "lucide-react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-bottom">
                <p>
                    &copy; 2026 Kantima. All rights reserved.
                </p>

                <a href="#top" className="back-to-top">
                    Back to top
                    <ArrowUp size={16} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;