const Banner=()=>{
return(
    //  banner
    <section className="banner">
        <div className="container">
            <div className="row align-items-center">
                <div className="w-50 banner-content xl-6 lg-6 md-12 sm-12 xs-12 pt-5">
                    <h2 className="title white-color">High Quality NFT Collection</h2>
                    <p className="desc">A 890 piece custom Nerko's collection is joining the NFT space on Opensea.</p>
                    <img src="img/01.png" className="man-img" srcset=""/>
                    <img src="img/02.png" className="man-img" srcset=""/>
                    <img src="img/03.png" className="man-img" srcset=""/>

                    <h5 className="count">47k+</h5>
                    <span>Community members</span>
                </div>
                <div className="w-50 banner-img xl-6 lg-6 md-12 sm-12 xs-12">
                    <img src="img/13.png" width="600"/>
                </div>
            </div>
        </div>
    </section>
)
}
export default Banner;