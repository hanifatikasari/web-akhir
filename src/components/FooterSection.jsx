import FooterItem from "./FooterItem";
function FooterSection() {
    return (
        <footer>
            <div className="footer-container px-5">
                <div className="footer-link">
                    <h3>kontak kami</h3>
                    <FooterItem
                        image="images/customer-service.png"
                        alt="contact"
                        href="#"
                        text="021 234567890" />

                    <FooterItem
                        image="images/whatsapp.png"
                        alt="whatsapp"
                        href="#"
                        text="0898 7654 3210" />
                </div>


                <div className="footer-logo">
                    <img src="images/logo.png" alt="logo" />
                </div>

                <div className="footer-link">
                    <h3>media sosial</h3>
                    <FooterItem
                        image="images/instagram.png"
                        alt="instagram"
                        href="#"
                        text="velocity_rent" />

                    <FooterItem
                        image="images/facebook.png"
                        alt="facebook"
                        href="#"
                        text="VR_car" />
                </div>
            </div>
        </footer>
    );
}
export default FooterSection;