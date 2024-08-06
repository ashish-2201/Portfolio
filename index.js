document.getElementsByTagName("title")[0].innerHTML = `Ashish Agrawal's Personal Website`;
document.getElementById('css_sheet').setAttribute('href', `./style.css`);
const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

// const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
// document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

const bodycnt = `   <div class="scroll-up-btn">
    <i class="fas fa-angle-up"></i>
</div>
<nav class="navbar">
    <div class="max-width">
        <div class="logo"><a href="#"><span>ASHISH.</span></a></div>
        <ul class="menu">
            <li><a href="#home" class="menu-btn">Home</a></li>
            <li><a href="#about" class="menu-btn">About Me</a></li>
            <li><a href="#skills" class="menu-btn">Portfolio</a></li>
            <li><a href="#contact" class="menu-btn">Contact Me</a></li>
        </ul>
        <div class="menu-btn">
            <i class="fas fa-bars"></i>
        </div>
    </div>
</nav>

<!-- home section start -->
<section class="home" id="home">
    <div class="max-width">
        <div class="home-content">
            <div class="text-1">Hello, my name is</div>
            <div class="text-2">Ashish Agrawal</div>
            <div class="text-3">And I'm a <span class="typing"></span></div>
            <a href="mailto::codewithash2201@gmail.com" target= "_blank">Have an opportunity</a>
        </div>
    </div>
</section>

<!-- about section start -->
<section class="about" id="about">
    <div class="max-width">
        <h2 class="title">ABOUT ME</h2>
        <div class="about-content">
            <div class="column left">
                <img src="./images/icon3.png" >
            </div>
            <div class="column right">
                <div class="text">I'm Ashish and I'm a <span class="typing-2"></span></div>
                    <p>I am a Front-end Web Developer, Game Developer, Competitive Programmer and Designer. I have completed my undergraduation from Indian Institute of Technology Indore in the discipline of Electrical Engineering with a CGPA of 8.52. I have interest in Web Developement and Competetive Programming. I have contributed in many projects of Web Developement and have participated in various Competitive Programming contests. I am a very good learner and I can learn the concepts much easily in a friendly manner. </p>
                <a href="https://drive.google.com/file/d/17f62PMlTFF9ipJNjEp7N2hPiJ7h_9gzp/view?usp=sharing" target= "_blank">RESUME</a>
            </div>
        </div>
    </div>
</section>

<!-- services section start -->
<section class="services" id="services">
    <div class="max-width">
        <h2 class="title">SERVICES</h2>
        <div class="serv-content">
            <div class="card">
                <div class="box">
                    <i class="fas fa-code"></i>
                    <div class="text">Web Design</div>
                    <p>I have done many projects in the web developement such as making of website for a gym, online shop for goods, online fruit selling, restaurant etc.</p>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <i class="fas fa-copyright"></i>
                    <div class="text">Competitive Programming</div>
                    <p>I have participated in various programming contests and secured decent ranks in most of the contests including Google Kickstart, CodeJam and Hashcode. I am proficient in C++ language. I am eager to learn anything new as each passing day. </p>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <i class="fas fa-user"></i>
                    <div class="text">Game Design</div>
                    <p>I am a beginner in this field and learning the new commands daily.</p>
                </div>
            </div>
           </div>
        </div>
    </div>
</section>

<!-- skills section start -->
<section class="skills" id="skills">
    <div class="max-width">
        <h2 class="title">SKILLS</h2>
        <div class="skills-content">
            <div class="column left">
                <div class="text">My creative skills & experiences.</div>
                <p>My technical expertise spans across C/C++, Python, Data Structures and Algorithms, and web development frameworks including MERN stacks. I've completed internships and projects that showcase my ability to develop responsive web applications and enhance userexperiences. With strong problem-solving skills, competitive programming achievements, and hands-on experience in technologies like PEGA and GenAI, I am well-prepared to contribute effectively to the projects.</p>
                <a href="https://drive.google.com/file/d/1qpxEZ3zyohqBjQwgX6DJW028ZpwYRyhy/view?usp=drive_link" target= "_blank">Read more</a>
            </div>
            <div class="column right">
                <div class="bars">
                    <div class="info">
                        <span>Data Structures and Algorithm</span>
                        <span>80%</span>
                    </div>
                    <div class="line dsa"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>MERN Stack</span>
                        <span>75%</span>
                    </div>
                    <div class="line mern"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Structured Query Language</span>
                        <span>80%</span>
                    </div>
                    <div class="line sql"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>HTML CSS JS</span>
                        <span>75%</span>
                    </div>
                    <div class="line html"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>PEGA and GEN AI</span>
                        <span>60%</span>
                    </div>
                    <div class="line pega"></div>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Portfolio section start -->
<section class="portfolio" id="portfolio">
    <div class="max-w">
        <h2 class="title">PORTFOLIO</h2>
        <div class="portfolio-content">
            <div class="gallery">
                <img src="./images/service1.png" alt="" >
                <img src="./images/service2.png" alt="" >
                <img src="./images/service3.png" alt="" >
                <img src="./images/service4.png" alt="" >
                <img src="./images/service5.png" alt="" >
                <img src="./images/service6.png" alt="" >
            </div>
        </div>
    </div>

</section>

<!-- contact section start -->
<section class="contact" id="contact">
    <div class="max-width">
        <h2 class="title">CONTACT ME</h2>
        <div class="contact-content">
            <div class="column left">
                <div class="text">Wanna know More</div>
                <p>You can contact me through the below given details. I will always be available for any type of help. </p>
                <div class="icons">
                    <div class="row">
                        <i class="fas fa-user"></i>
                        <div class="info">
                            <div class="head">Name</div>
                            <div class="sub-title">Ashish Agrawal</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="info">
                            <div class="head">Address</div>
                            <div class="sub-title">Patna, Bihar</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="fas fa-envelope"></i>
                        <div class="info">
                            <div class="head">Email</div>
                            <div class="sub-title">ee200002013@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column right">
                <div class="text">Message me</div>
                <form action="#">
                    <div class="fields">
                        <div class="field name">
                            <input type="text" placeholder="Name" required>
                        </div>
                        <div class="field email">
                            <input type="email" placeholder="Email" required>
                        </div>
                    </div>
                    <div class="field">
                        <input type="text" placeholder="Subject" required>
                    </div>
                    <div class="field textarea">
                        <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                    </div>
                    <div class="button-area">
                        <a href="mailto:codewithash2201@gmail.com" target= "_blank">
                        <button type="submit">Send message</button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- footer section start -->
<footer>
    <span>Created By <a href="C:\Users\ASHISH\OneDrive\Documents\GitHub\Portfolio/index.html#">Ashish Agrawal</a>  | <span class="far fa-copyright"></span> 2020 All rights reserved.</span>
</footer>`;
document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
document.querySelectorAll(".navbar")[1].remove();
document.querySelector(".whole").remove();
document.querySelector("#footer").remove();


$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Game Developer", "Competitive Programmer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Game Developer", "Competitive Programmer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
