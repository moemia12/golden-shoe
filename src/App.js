import React from 'react';
import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


export default function App() {
 

  return (
    <div className="app">
      {/** Top Bar */}
        <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
          <div class="container text-light">
              <div class="w-100 d-flex justify-content-between">
                  <div>
                      <i class="fa fa-envelope mx-2"></i>
                      <a class="navbar-sm-brand text-light text-decoration-none" href="#">info@goldenshoe.com</a>
                      <i class="fa fa-phone mx-2"></i>
                      <a class="navbar-sm-brand text-light text-decoration-none" href="#">020-800-1234</a>
                      <i class="fa fa-phone mx-2"></i>
                      <a class="navbar-sm-brand text-light text-decoration-none" href="#">Live Chat</a>
                  </div>
                  <div>
                      <a class="text-light" href="#" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
                  </div>
              </div>
          </div>
        </nav>
       {/** Nav Bar */}
        <nav class="navbar navbar-expand-lg navbar-light shadow">
          <div class="container d-flex justify-content-between align-items-center">

              <a class="navbar-brand text-success logo h1 align-self-center"  href="#">
                 <h2 id='logo'>Golden Shoe</h2> 
              </a>

              <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                  <div class="flex-fill">
                      <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                          <li class="nav-item">
                              <a class="nav-link" href="#">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">About</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Shop</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Contact</a>
                          </li>
                      </ul>
                  </div>
                  <div class="navbar align-self-center d-flex">
                      <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                          <div class="input-group">
                              <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..." />
                              <div class="input-group-text">
                                  <i class="fa fa-fw fa-search"></i>
                              </div>
                          </div>
                      </div>
                      <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                          <i class="fa fa-fw fa-search text-dark mr-2"></i>
                      </a>
                      <a class="nav-icon position-relative text-decoration-none" href="#">
                          <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                          <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                      </a>
                      <a class="nav-icon position-relative text-decoration-none" href="#">
                          <i class="fa fa-fw fa-user text-dark mr-3"></i>
                          <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                      </a>
                  </div>
              </div>

          </div>
        </nav>
       
        {/** Body */}
        <div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_01.jpg" alt="" />
                          </div>
                          <div class="col-lg-6 mb-0 d-flex align-items-center">
                              <div class="text-align-left align-self-center">
                                  
                                  <h3 class="h2">A REVOLUTION IN SHOE CRAFT</h3>
                                  <p>
                                    Golden Shoe has been creating hand-crafted shoes for all genders and ages since the 1960's. We have our flagship store in Oxford Circus and an online presence 
                                    serving customers all over the world. 
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              
          </div>
          <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
              <i class="fas fa-chevron-left"></i>
          </a>
          <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
              <i class="fas fa-chevron-right"></i>
          </a>
        </div>
        
        {/** Categories */}
        <section class="container py-5">
          <div class="row text-center pt-3">
              <div class="col-lg-6 m-auto">
                  <h1 class="h1">Categories of The Month</h1>
                  <p>
                   Browse our award winning designs 
                  </p>
              </div>
          </div>
          <div class="row">
              <div class="col-12 col-md-4 p-5 mt-3">
                  <a href="#"><img src="https://www.revzilla.com/product_images/0103/1978/tcx_boots_x_blend_wp_vintage_size_euus_vintage_750x750.jpg" class="rounded-circle img-fluid border" /></a>
                  <h5 class="text-center mt-3 mb-3">Boots</h5>
                  <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
              </div>
              <div class="col-12 col-md-4 p-5 mt-3">
                  <a href="#"><img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/49e5514bb83e4c5d8bf5ad9100ef2815_9366/Ultraboost_22_Shoes_White_GX5459_01_standard.jpg" class="rounded-circle img-fluid border" /></a>
                  <h2 class="h5 text-center mt-3 mb-3">Sports</h2>
                  <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
              </div>
              <div class="col-12 col-md-4 p-5 mt-3">
                  <a href="#"><img src="https://cdn.shopify.com/s/files/1/0530/4113/5788/products/new-barker-shoes-winsford-black-polish_8776aaa3-9943-49df-929f-b43cbccebfdc.jpg?v=1619772037" class="rounded-circle img-fluid border" /></a>
                  <h2 class="h5 text-center mt-3 mb-3">Formal</h2>
                  <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
              </div>
          </div>
        </section>
        {/** Featured Product */}
        <section class="bg-light">
          <div class="container py-5">
              <div class="row text-center py-3">
                  <div class="col-lg-6 m-auto">
                      <h1 class="h1">Featured Product</h1>
                      <p>
                        Take a look at our featured and most popular products! We have spent a lot of effort hand crafting our shoes and we know you'll love them!  </p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-shoes-1610418585.jpg?crop=0.502xw:1.00xh;0.282xw,0&resize=640:*" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      
                                  </li>
                                  <li class="text-muted text-right">£240.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">Gentlemen</a>
                              <p class="card-text">
                                  Solid build and smart design
                              </p>
                              <p class="text-muted">Reviews (24)</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://johnlewis.scene7.com/is/image//JohnLewis/WW-shoes-hyb1-221021?resmode=sharp" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-muted fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">£480.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">Lady</a>
                              <p class="card-text">
                                Sleek design and formal
                              </p>
                              <p class="text-muted">Reviews (48)</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg?crop=1xw:1xh;center,top&resize=480:*" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">£360.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">Sports</a>
                              <p class="card-text">
                                Robust and extremely comfortable
                              </p>
                              <p class="text-muted">Reviews (74)</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        {/** Footer */}
        <footer class="bg-dark" id="tempaltemo_footer">
          <div class="container">
              <div class="row">

                  <div class="col-md-4 pt-5">
                      <h2 id='footerlogo'>Golden Shoe</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li>
                              <i class="fas fa-map-marker-alt fa-fw"></i>
                              London, UK
                          </li>
                          <li>
                              <i class="fa fa-phone fa-fw"></i>
                              <a class="text-decoration-none" href="#">020-800-1234</a>
                          </li>
                          <li>
                              <i class="fa fa-envelope fa-fw"></i>
                              <a class="text-decoration-none" href="#">info@goldenshoe.com</a>
                          </li>
                      </ul>
                  </div>

                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li><a class="text-decoration-none" href="#">Luxury</a></li>
                          <li><a class="text-decoration-none" href="#">Sport Wear</a></li>
                          <li><a class="text-decoration-none" href="#">Men's Shoes</a></li>
                          <li><a class="text-decoration-none" href="#">Women's Shoes</a></li>
                          <li><a class="text-decoration-none" href="#">Popular Dress</a></li>
                          <li><a class="text-decoration-none" href="#">Gym Accessories</a></li>
                          <li><a class="text-decoration-none" href="#">Sport Shoes</a></li>
                      </ul>
                  </div>

                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li><a class="text-decoration-none" href="#">Home</a></li>
                          <li><a class="text-decoration-none" href="#">About Us</a></li>
                          <li><a class="text-decoration-none" href="#">Shop Locations</a></li>
                          <li><a class="text-decoration-none" href="#">FAQs</a></li>
                          <li><a class="text-decoration-none" href="#">Contact</a></li>
                      </ul>
                  </div>

              </div>

              <div class="row text-light mb-4">
                  <div class="col-12 mb-3">
                      <div class="w-100 my-3 border-top border-light"></div>
                  </div>
                  <div class="col-auto me-auto">
                      <ul class="list-inline text-left footer-icons">
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                          </li>
                      </ul>
                  </div>
                  <div class="col-auto">
                      <label class="sr-only" for="subscribeEmail">Email address</label>
                      <div class="input-group mb-2">
                          <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                          <div class="input-group-text btn-success text-light">Subscribe</div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="w-100 bg-black py-3">
              <div class="container">
                  <div class="row pt-2">
                      <div class="col-12">
                          <p class="text-left text-light">
                              Copyright &copy; 2021 Company Name 
                              | Designed by <a rel="sponsored" href="#" target="_blank">AND Digital</a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>

        </footer>
    </div>
  );
}