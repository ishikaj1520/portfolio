const Portfolio = () => {
    return (  
        <div className="portfolio" id="Portfolio" style={{backgroundColor:"#FFCB05",marginTop:"80px",textAlign:"center"}}>
           <h1 style={{padding:"30px"}} >Portfolio</h1>
           <div class="container">
  <div class="row row-cols-2">
    <div class="col"><div class="card" style={{width: '18rem',marginTop:"30px"}}>
  <img src="./assets/shopping-pic.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Shopping cart</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" class="btn btn-primary">Go </a>
  </div>
</div></div>
    <div class="col"> <div class="card" style={{width: "18rem",marginTop:"30px"}}>
  <img src="./assets/blogg-pic.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dojo Blog</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" class="btn btn-primary">Go</a>
  </div> 
</div></div>
    <div class="col"><div class="card" style={{width: "18rem",marginTop:"20px",marginBottom:"25px"}}>
  <img src="./assets/call-pic.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">calculator</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
     <a href="#" class="btn btn-primary">Go</a>
  </div>
</div></div>
    <div class="col"><div class="card" style={{width: "18rem",marginTop:"20px",marginBottom:"25px"}}>
  <img src="./assets/time-pic.jpg" class="card-img-top" alt="..."/>
  <div class="card-body"> 
     <h5 class="card-title">Timer</h5>
    <a href="#" class="btn btn-primary">Go </a>
  </div> 
 </div> </div>
  </div>
</div>

</div>
    );
}
 
export default Portfolio;