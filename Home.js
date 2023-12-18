import { Link } from "react-router-dom";
import "./Main.css";

export default function Home() {
  return(
    <> 
      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" id="mainNav">
          <div class="container">
              <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="logo">Naari Kalyan Kendra</span>
              </a>
              <button class="navbar-toggler navbar-toggler-right" 
              type="button" data-toggle="collapse" data-target="#navbarResponsive" 
              aria-controls="navbarResponsive" aria-expanded="false" 
              aria-label="Toggle navigation">Menu
              <i class="fas fa-bars ml-1"></i>
            </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav text-uppercase ml-auto">
                      <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#home">Home</a></li>
                  <li class="nav-item">
                 <a class="nav-link js-scroll-trigger" href="#causes">Causes</a></li>
                  <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#project">Projects</a></li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about">About</a></li>
               <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#team">Team</a></li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#blog">Blog</a></li>
                 <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                  </ul>
              </div>
          </div>
      </nav>
      
      <header class="hero">
          <div class="container">
          <div class="hero-heading text-uppercase">We care for you </div>
       { localStorage.getItem("email")===null ? <Link class="btn btn-danger btn-lg text-uppercase js-scroll-trigger" 
        to="/login">Login</Link> : <div> <p>Wellcome {localStorage.getItem("email")}</p> <br/> <button class="btn btn-danger btn-lg text-uppercase js-scroll-trigger">Logout</button></div> }
          </div>
      </header>
      
      <section class="mt-5 page-section" id="services">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase font-weight-bold">Major Causes</h2>
                <h3 class="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div class="row text-center">
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                      <i class="fas fa-circle fa-stack-2x text-danger"></i>
                      <i class="fas fa-hand-holding-usd fa-stack-1x fa-inverse"></i>
                      
                    </span>
                    <h4 class="my-3">Give Donations</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur 
                      adipisicing elit. Minima maxime quam architecto quo inventore 
                      harum ex magni, dicta impedit.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                      <i class="fas fa-circle fa-stack-2x text-warning"></i>
                      <i class="fas fa-lightbulb fa-stack-1x fa-inverse"></i>
                      </span>
                    <h4 class="my-3">Give Inspiration</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, 
                      consectetur adipisicing elit. Minima maxime quam 
                      architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                      <i class="fas fa-circle fa-stack-2x text-success"></i>
                      <i class="fas fa-tshirt fa-stack-1x fa-inverse"></i>
                    </span>
                   
                    <h4 class="my-3">Become Volunteer</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur 
                      adipisicing elit. Minima maxime quam architecto quo inventore
                       harum ex magni, dicta impedit.</p>
                </div>
            </div>
        </div>
    </section>
      

    <section class="proj-section bg-light py-5" id="project">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Projects</h2>
                <h3 class="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div class="row">
              
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="project-item">
                      <a class="project-link" data-toggle="modal"
                       href="#projectModal1">
                       <div class="project-hover">
                       <div class="project-hover-content">
                         <i class="fas fa-plus fa-3x"></i>
                        </div>
                      </div>
                    <img src="Images/porj1.jpg" class="img-fluid" alt=""/></a>
                        <div class="project-caption">
                            <div class="project-caption-heading">Lorem</div>
                            <div class="project-caption-subheading text-muted">
                              Ipsum</div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="project-item">
                        <a class="project-link" data-toggle="modal" 
                        href="#projectModal2"
                            ><div class="project-hover">
                                <div class="project-hover-content">
                                  <i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="Images/porj2.jpg" alt=""
                        /></a>
                        <div class="project-caption">
                            <div class="project-caption-heading">Factories</div>
                            <div class="project-caption-subheading text-muted">Smoke</div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="project-item">
                   <a class="project-link" data-toggle="modal"href="#projectModal3"
                            ><div class="project-hover">
                                <div class="project-hover-content">
                                  <i class="fas fa-plus fa-3x"></i></div>
                            </div>
                      <img class="img-fluid" src="Images/porj3.jpg" alt=""/></a>
                        <div class="project-caption">
                       <div class="project-caption-heading">Flowers</div>
                  <div class="project-caption-subheading text-muted">Kinds</div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-sm-6 mb-4">
                  <div class="project-item">
                 <a class="project-link" data-toggle="modal"href="#projectModal3"
                          ><div class="project-hover">
                              <div class="project-hover-content">
                                <i class="fas fa-plus fa-3x"></i></div>
                          </div>
                    <img class="img-fluid" src="Images/porj4.jpg" alt=""/></a>
                      <div class="project-caption">
                     <div class="project-caption-heading">Nature</div>
                <div class="project-caption-subheading text-muted">Peace</div>
                      </div>
                  </div>
              </div>
              
              <div class="col-lg-4 col-sm-6 mb-4">
                <div class="project-item">
               <a class="project-link" data-toggle="modal"href="#projectModal3"
                        ><div class="project-hover">
                            <div class="project-hover-content">
                              <i class="fas fa-plus fa-3x"></i></div>
                        </div>
                  <img class="img-fluid" src="Images/porj5.jpg" alt=""/></a>
                    <div class="project-caption">
                   <div class="project-caption-heading">Earth</div>
              <div class="project-caption-subheading text-muted">Water</div>
                    </div>
                </div>
            </div>
            
                <div class="col-lg-4 col-sm-6 mb-4">
                  <div class="project-item">
                 <a class="project-link" data-toggle="modal"href="#projectModal3"
                          ><div class="project-hover">
                              <div class="project-hover-content">
                                <i class="fas fa-plus fa-3x"></i></div>
                          </div>
                    <img class="img-fluid" src="Images/porj6.jpg" alt=""/></a>
                      <div class="project-caption">
                     <div class="project-caption-heading">Plants</div>
                <div class="project-caption-subheading text-muted">Fruits</div>
                      </div>
                  </div>
              </div>
              
                             
                    </div>
                </div>
            
    </section>
       
    <section class="about-section mt-5" id="about">
  <div class="container">
      <div class="text-center">
          <h2 class="section-heading text-uppercase">About</h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      
    <section id="about" class="about">
      <div class="container-fluid">

        <div class="row">
          <div class="col-xl-5 col-lg-6 d-flex justify-content-center align-items-stretch" data-aos="fade-right">
             <img src="Images/about.jpg" class="img-fluid" alt=""/>
          </div>

          <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" 
          data-aos="fade-left">
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon"><i class="fas fa-file-invoice-dollar"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>

            <div class="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon"><i class="fas fa-gifts"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>

            <div class="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon"><i class="fas fa-mug-hot"></i></div>
              <h4 class="title"><a href="">Dine Pad</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

          </div>
        </div>

      </div>
    </section>
    </div>
    </section>
       

   
   


   
   <section class="team-section mt-5"  id="team">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="team-member box">
                  <div class="img-box">
                    <img src="Images/team.jpg" alt=""/>
                  </div>
                  <div class="content">
                    <h4 class="text-dark">Kavita Kailash Panigrahy</h4>
                    <p class="text-muted">President of Naari Kalyan Kendra</p>
                     </div>
                      </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member box">
                <div class="img-box">
                  <img src="Images/team2.jpg" alt=""/>
                </div>
                <div class="content">
                  <h4 class="text-dark">Sunita Panigrahi</h4>
                  <p class="text-muted">Secretary of Naari Kalyan Kendra</p>
                  </div>
                </div>
          </div>
          <div class="col-lg-4">
            <div class="team-member box">
              <div class="img-box">
                <img src="Images/team3.jpg" alt=""/>
              </div>
              <div class="content">
                <h4 class="text-color">Sagarika Shridhar Das</h4>
                <p class="text-muted">Treasurer of Naari Kalyan Kendra</p>
                </div>
              </div>
        </div>
       </div>
    </div>
</section>

<section class="page-section mt-5"  id="blog">
  <div class="container">
      <div class="text-center">
          <h2 class="section-heading text-uppercase">Latest Blogs</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="card mb-4 shadow color">
            <div class="card-body ">
              <img src="Images/about3.jpg" class="card-img-top"/>
              <div class="ribbon text font-weight-bold">Post-Title</div>
              <article>
                <header class="mb-2">
                   <div class="font-weight-bold">Author Name</div>
                  <div class="small">Posted on: <time datetime="2017-03-12T10:24">May 10, 2020 at 01:44 PM</time></div>
                 </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed sed arcu bibendum massa euismod scelerisque. Morbi porttitor 
                  tellus tempor metus posuere dictum.</p>
                <a href="blog-post-text.html" class="btn btn-color">Read more</a>
              </article>
            </div>
          </div>
        </div>
        
        <div class="col-12 col-lg-4">
          <div class="card mb-4 shadow color">
            <div class="card-body ">
              <img src="Images/about2.jpg" class="card-img-top"/>
              <div class="ribbon text font-weight-bold">Post-Title</div>
              <article>
                <header class="mb-2">
                   <div class="font-weight-bold">Author Name</div>
                  <div class="small">Posted on: <time datetime="2017-03-12T10:24">May 10, 2020 at 01:44 PM</time></div>
                 </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed sed arcu bibendum massa euismod scelerisque. Morbi porttitor 
                  tellus tempor metus posuere dictum.</p>
                <a href="blog-post-text.html" class="btn btn-color">Read more</a>
              </article>
            </div>
          </div>
        </div>
        
        <div class="col-12 col-lg-4">
          <div class="card mb-4 shadow color">
            <div class="card-body ">
              <img src="Images/about1.jpg" class="card-img-top"/>
              <div class="ribbon text font-weight-bold">Post-Title</div>
              <article>
                <header class="mb-2">
                   <div class="font-weight-bold">Author Name</div>
                  <div class="small">Posted on: <time datetime="2017-03-12T10:24">May 10, 2020 at 01:44 PM</time></div>
                 </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed sed arcu bibendum massa euismod scelerisque. Morbi porttitor 
                  tellus tempor metus posuere dictum.</p>
                <a href="blog-post-text.html" class="btn btn-color">Read more</a>
              </article>
            </div>
          </div>
        </div>


      </div>  
    </div>
  </section>



 
 <div class="project-modal modal fade" 
 id="projectModal1" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <i class="fas fa-window-close"></i>
            </div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8">
                      <div class="modal-body">
              
                <h2 class="text-uppercase">Project Name</h2>
               <p class="item-intro text-muted">Lorem ipsum dolor sit amet 
                 consectetur.</p>
             <img class="img-fluid d-block mx-auto" src="Images/porj1.jpg" alt="" />
           <p>Use this area to describe your project. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Est blanditiis dolorem 
              culpa incidunt minus dignissimos deserunt repellat aperiam 
              quasi sunt officia expedita beatae cupiditate, maiores 
              repudiandae, nostrum, reiciendis facere nemo!</p>
         <ul class="list-inline">
                              <li>Date: May 2020</li>
                              <li>Category: lorem Ipsum</li>
                          </ul>
                          <button class="btn btn-danger" 
                          data-dismiss="modal" type="button">
                          <i class="fas fa-times mr-1"></i>Close Project</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

<div class="project-modal modal fade" 
id="projectModal2" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <i class="fas fa-window-close"></i></div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8">
                      <div class="modal-body">
                          
                          <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet
                   consectetur.</p>
             <img  src="Images/porj2.jpg" class="img-fluid d-block mx-auto"alt="" />
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                           <ul class="list-inline">
                              <li>Date: May 2020</li>
                               <li>Category: Lorem Ipsum</li>
                          </ul>
         <button class="btn btn-danger" data-dismiss="modal" type="button">
           <i class="fas fa-times mr-1"></i>Close Project</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

<div class="project-modal modal fade" id="projectModal3" 
tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <i class="fas fa-window-close"></i>
          </div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8">
                      <div class="modal-body">
                 
                <h2 class="text-uppercase">Project Name</h2>
             <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
             <img src="Images/porj3.jpg" class="img-fluid d-block mx-auto" alt="" />
                          <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                          <ul class="list-inline">
                              <li>Date: May 2020</li>
                              <li>Category: Lorem Ipsum</li>
                          </ul>
                          <button class="btn btn-danger" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Close Project</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

<div class="project-modal modal fade" 
id="projectModal4" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <i class="fas fa-window-close"></i>
          </div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8">
                   <div class="modal-body">
                    
                 <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
             <img src="images/porj4.jpg"class="img-fluid d-block mx-auto" alt="" />
                          <p>Use this area to describe your project. 
                            Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit. Est blanditiis dolorem 
                            culpa incidunt minus dignissimos deserunt 
                            repellat aperiam quasi sunt officia expedita 
                            beatae cupiditate, maiores repudiandae, nostrum, 
                            reiciendis facere nemo!</p>
                          <ul class="list-inline">
                              <li>Date: May 2020</li>
                               <li>Category: Lorem Ipsum</li>
                          </ul>
                          <button class="btn btn-danger" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Close Project</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

<div class="project-modal modal fade" id="projectModal5" 
tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <i class="fas fa-window-close"></i>
          </div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8">
                      <div class="modal-body">
                          
                          <h2 class="text-uppercase">Project Name</h2>
           <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
       <img  src="Images/porj5.jpg"class="img-fluid d-block mx-auto" alt=""/>
                          <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                          <ul class="list-inline">
                              <li>Date: May 2020</li>
                             <li>Category: lorem Ipsum</li>
                          </ul>
                          <button class="btn btn-danger" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Close Project</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

<section class="signup-section mt-5" id="signup">
  <div class="container">
      <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto text-center">
         <h2 class="text-dark mb-5">Subscribe to receive updates!</h2>
              <form class="form-inline d-flex">
              <input class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
               id="inputEmail" type="email" placeholder="Enter email address..."/>
               <button class="btn btn-danger mx-auto" type="submit">
                 Subscribe</button>
                </form>
          </div>
      </div>
  </div>
</section>

<section id="contact" class="contact mt-5">
  <div class="container">
    <div class="text-center">
      <h2 class="section-heading text-uppercase">Contact </h2>
    <br/>
  </div>

    <div class="row">

      <div class="col-lg-6">
        <div class="row">
          <div class="col-lg-6 info">
            <i class="fas fa-map"></i>
            <h4>Address</h4>
            <p>Room No. 2, Manisha Niwas, Nandadeep Nagar Chkkinaka, Pune Link Road, <br/>Kalyan East, Kalyan, Maharashtra 421306</p>
          </div>
          <div class="col-lg-6 info">
            <i class="fas fa-phone"></i>
            <h4>Call Us</h4>
          <br/>
            <p>+91 9987094655<br/></p>
          </div>
          <div class="col-lg-6 info">
            <i class="fas fa-envelope"></i>
            <h4>Email Us</h4>
          
            <p>NaariKalyanKendra@gmail.com</p>
          </div>
          <div class="col-lg-6 info">
            <i class="fas fa-clock"></i>
            <h4>Working Hours</h4>
            <p>Mon - Fri: 10AM to 8PM<br/>Sunday: 10AM to 1PM</p>
          </div>
        </div>
      </div>
        <div class="col-lg-6">
        <form>
          <div class="form-group">
            <input placeholder="Your Name" type="text" name="name" 
            class="form-control"/>
             </div>
          <div class="form-group">
            <input placeholder="Your Email" type="email" class="form-control"
             name="email"/>
              </div>
          <div class="form-group">
            <input placeholder="Subject" type="text" class="form-control" 
            name="subject"/>
            </div>
          <div class="form-group">
            <textarea placeholder="Message" class="form-control" 
            name="message" rows="5"></textarea>
            <div class="validate"></div>
          </div>
            <div class="text-center">
              <button type="submit" 
              class="btn btn-danger rounded-cor">Send Message</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</section>

 <footer class="mt-5" id="footer">
    <div class="container d-md-flex py-4">
    <div class="mr-md-auto text-center text-md-left">
      <div class="copyright">
        &copy; Copyright <strong><span>Naari Kalyan Kendra</span></strong>. All Rights Reserved
      </div>
       </div>
    <div class="social-links text-center text-md-right pt-3 pt-md-0">
      <ul class="social">
        <li class="list-item">
          <a class="list-link" href="#">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li class="list-item">
          <a class="list-link" href="#">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="list-item">
          <a class="list-link" href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="list-item">
          <a class="list-link" href="#">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
     </div>
  </div>
</footer>













    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </>
  );
}
