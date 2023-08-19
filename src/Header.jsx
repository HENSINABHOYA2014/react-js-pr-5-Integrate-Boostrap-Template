const Header=()=>{
    return(
        
        <div class="container">
        <nav className="navbar navbar-expand-lg navbar-light body ">
  <div className="container-fluid">
    <a className="navbar-brand " href="#"><img src="img/secondary_logo.svg"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav ">
      <ul className="navbar-nav justify-content-between  align-items-center text-align-center margin-auto nav-menu">
        <li className="nav-item p-4 h5">
          <a className="nav-link active  text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item p-4 h5">
          <a className="nav-link  text-white" href="#">Collection</a>
        </li>
        <li className="nav-item p-4 h5">
          <a className="nav-link  text-white" href="#">Choose</a>
        </li>
        <li className="nav-item p-4 h5">
          <a className="nav-link  text-white" href="#">About</a>
        </li>
        <li className="nav-item p-4 h5">
          <a className="nav-link  text-white" href="#">Roadmap</a>
        </li>
        <li className="nav-item p-4 h5">
          <a className="nav-link  text-white" href="#">Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}
export default Header;