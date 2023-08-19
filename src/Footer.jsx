const Footer=()=>{
    return(
      <>
      <div>
      <section>
        <hr className="footer-line"/>
    </section>
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="w-33">
                    <img src="img/nerko.svg" alt=""/>
                    <p className="footer-paragraf">Join our Discord channel or follow us on Twitter to keep up to date with
                        our latest work and announcements.</p>
                    
                </div>
                <div className="w-33">
                    <h4 className="fw-title">Quick Link</h4>
                    <ul>
                        <li>About</li>
                        <li>Collection</li>
                        <li>Roadmap</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="w-33">
                    <h4 className="fw-title">Community</h4>
                    <ul>
                        <li>How it works!</li>
                        <li>Blockchain</li>
                        <li>Get in touch</li>

                    </ul>
                </div>
            </div>
            <p className="copyright">Copyright © 2023 Nerko All Rights Reserved. <span className="justify-between">Privacy
                    policy
                    Terms of Use
                </span></p>
        </div>
    </footer>
      </div>
      </>
    )
}
export default Footer;