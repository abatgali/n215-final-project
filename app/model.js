var _home = `<header>
<h1>Header goes here</h1>
<p style="color: #EE4367; position: relative; top: -2em;">Less important text goes here</p>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam reprehenderit quia, quos reiciendis beatae perspiciatis? </p>
<div class="button">Read More</div>    
</header>
<div id="site-content">
<section id="ceo-msg">
    <p id="quote">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”
    </p>
    <p id="by">John Smith <br>
        <span>Corporation CEO, books author.</span>
    </p>
</section>
<section id="events">
    <div id="heading">
        UPCOMING EVENTS:
    </div>
    <div id="dates">
        <div class="card">
            <div class="box">
                <h1>06</h1>
                <p>JUN</p>
            </div>
            <div class="text">
                <h4>Sed et persipiatis unde omnis iste natus</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
           
        </div>
        <div class="card">
            <div class="box">
                <h1>06</h1>
                <p>JUN</p>
            </div>
            <div class="text">
                <h4>Sed et persipiatis unde omnis iste natus</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
           
        </div>
        <div class="card">
            <div class="box">
                <h1>06</h1>
                <p>JUN</p>
            </div>
            <div class="text">
                <h4>Sed et persipiatis unde omnis iste natus</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
           
        </div>
        <div class="card">
            <div class="box">
                <h1>06</h1>
                <p>JUN</p>
            </div>
            <div class="text">
                <h4>Sed et persipiatis unde omnis iste natus</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
           
        </div>
        <div class="card">
            <div class="box">
                <h1>06</h1>
                <p>JUN</p>
            </div>
            <div class="text">
                <h4>Sed et persipiatis unde omnis iste natus</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
           
        </div>
    </div>
</section>
</div>`;

var _about = `
<div class="content">
    <div class="image_header">
    </div>
    <h1 id="about_h1">OUR HISTORY: </h1>

    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>`;

var _gallery = `
<div class="content">
    <h1>GALLERY:</h1>
    <div id="gallery-grid">
        <div class="row"> 
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
        </div>
        <div class="row">
            <div id="four"></div>
            <div id="five"></div>
         
        </div>
        
    </div>
    <script type="module">
        import {updateView} from './app/model.js';

        function gListener() {
            $("#gallery-grid .row div").on("click", function (e) {
                let dID = e.currentTarget.id;

                let gpage = "galleryPage" + dID;
                console.log(gpage);

                updateView(gpage);
            });
        }

        $(document).ready(function(){
            gListener();
        })
    </script>
</div>
`;

var _galleryPageone = `
<div class="content">
    <div class="gallery_header" id="gallery_one">
        <div class="gallery_title">
            <div class="number">
                1.
            </div>
            <div class="title">
                food festival
            </div>
        </div>
    </div>
    
    <div class="paras">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate maxime minima ratione autem excepturi labore, expedita placeat praesentium libero animi dolorem debitis iusto voluptatum in sit facilis assumenda voluptatibus? Ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quae nostrum debitis nisi quasi, aliquam dolores numquam nam totam natus minima saepe quod dolor modi. Esse voluptatibus iure voluptates minus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi corrupti dolorem eligendi velit accusantium eius. Labore, obcaecati quibusdam! Error ipsum unde maiores dolore tempora nesciunt neque rem quas deserunt voluptatum.</p>
    </div>
                
</div>
`;

var _galleryPagetwo = `
<div class="content">
    <div class="gallery_header" id="gallery_two">
        <div class="gallery_title">
            <div class="number">
                2.
            </div>
            <div class="title">
                dee-jay
            </div>
        </div>
    </div>
    
    <div class="paras">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate maxime minima ratione autem excepturi labore, expedita placeat praesentium libero animi dolorem debitis iusto voluptatum in sit facilis assumenda voluptatibus? Ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quae nostrum debitis nisi quasi, aliquam dolores numquam nam totam natus minima saepe quod dolor modi. Esse voluptatibus iure voluptates minus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi corrupti dolorem eligendi velit accusantium eius. Labore, obcaecati quibusdam! Error ipsum unde maiores dolore tempora nesciunt neque rem quas deserunt voluptatum.</p>
    </div>
                
</div>
`;

var _galleryPagethree = `
<div class="content">
    <div class="gallery_header" id="gallery_three">
        <div class="gallery_title">
            <div class="number">
                3.
            </div>
            <div class="title">
                speech
            </div>
        </div>
    </div>
    
    <div class="paras">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate maxime minima ratione autem excepturi labore, expedita placeat praesentium libero animi dolorem debitis iusto voluptatum in sit facilis assumenda voluptatibus? Ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quae nostrum debitis nisi quasi, aliquam dolores numquam nam totam natus minima saepe quod dolor modi. Esse voluptatibus iure voluptates minus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi corrupti dolorem eligendi velit accusantium eius. Labore, obcaecati quibusdam! Error ipsum unde maiores dolore tempora nesciunt neque rem quas deserunt voluptatum.</p>
    </div>
                
</div>
`;

var _galleryPagefour = `
<div class="content">
    <div class="gallery_header" id="gallery_four">
        <div class="gallery_title">
            <div class="number">
                4.
            </div>
            <div class="title">
                open foodfest
            </div>
        </div>
    </div>
    
    <div class="paras">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate maxime minima ratione autem excepturi labore, expedita placeat praesentium libero animi dolorem debitis iusto voluptatum in sit facilis assumenda voluptatibus? Ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quae nostrum debitis nisi quasi, aliquam dolores numquam nam totam natus minima saepe quod dolor modi. Esse voluptatibus iure voluptates minus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi corrupti dolorem eligendi velit accusantium eius. Labore, obcaecati quibusdam! Error ipsum unde maiores dolore tempora nesciunt neque rem quas deserunt voluptatum.</p>
    </div>
                
</div>
`;

var _galleryPagefive = `
<div class="content">
    <div class="gallery_header" id="gallery_five">
        <div class="gallery_title">
            <div class="number">
                5.
            </div>
            <div class="title">
                international
            </div>
        </div>
    </div>
    
    <div class="paras">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate maxime minima ratione autem excepturi labore, expedita placeat praesentium libero animi dolorem debitis iusto voluptatum in sit facilis assumenda voluptatibus? Ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quae nostrum debitis nisi quasi, aliquam dolores numquam nam totam natus minima saepe quod dolor modi. Esse voluptatibus iure voluptates minus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi corrupti dolorem eligendi velit accusantium eius. Labore, obcaecati quibusdam! Error ipsum unde maiores dolore tempora nesciunt neque rem quas deserunt voluptatum.</p>
    </div>
                
</div>
`;

var _blog = `
<div class="content">
                <h1>BLOG:</h1>
                <div id="blogs">
                    <div class="blog_card" id="bone">
                        <div class="box-blog">
                            <h4>06</h4>
                            <p>JUN</p>
                        </div>
                        <div class="post-thumb">
                            <div class="postpic"></div>
                            <div>
                                <p >Sed ut perspiciatis unde omnis iste natus</p>
                                <p style="color: #EE4367;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            </div>
                        </div>
                    </div>
                    <div class="blog_card" id="btwo">
                        <div class="box-blog">
                            <h4>30</h4>
                            <p>JUL</p>
                        </div>
                        <div class="post-thumb">
                            <div class="postpic"></div>
                            <div>
                                <p >Sed ut perspiciatis unde omnis iste natus</p>
                                <p style="color: #EE4367;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            </div>
                        </div>
                    </div>
                    <div class="blog_card" id="bthree">
                        <div class="box-blog">
                            <h4>30</h4>
                            <p>AUG</p>
                        </div>
                        <div class="post-thumb">
                            <div class="postpic"></div>
                            <div>
                                <p >Sed ut perspiciatis unde omnis iste natus</p>
                                <p style="color: #EE4367;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            </div>
                        </div>
                    </div>
                    <div class="blog_card" id="bfour">
                        <div class="box-blog">
                            <h4>23</h4>
                            <p>NOV</p>
                        </div>
                        <div class="post-thumb">
                            <div class="postpic"></div>
                            <div>
                                <p >Sed ut perspiciatis unde omnis iste natus</p>
                                <p style="color: #EE4367;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            </div>
                        </div>
                    </div>
                    <div class="blog_card" id="bfive">
                        <div class="box-blog">
                            <h4>23</h4>
                            <p>DEC</p>
                        </div>
                        <div class="post-thumb">
                            <div class="postpic"></div>
                            <div>
                                <p >Sed ut perspiciatis unde omnis iste natus</p>
                                <p style="color: #EE4367;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <script type="module">
                    import {updateView} from './app/model.js';

                    function gListener() {
                        $("#blogs div").on("click", function (e) {
                            let dID = e.currentTarget.id;

                            let bpage = "blogPage" + dID;
                            console.log(bpage);

                            updateView(bpage);
                        });
                    }

                    $(document).ready(function(){
                        gListener();
                    })
                </script>
                
`;

var _blogPagebone = `

<div class="content">
                <div class="blog_header">
                    
                </div>
                <div class="blog-content">
                    <div class="box_blog_bigger">
                        <h4>06</h4>
                        <p>JUN</p>
                    </div>
                    <div class="blog-text">
                        <h5>Header #1:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab non assumenda ipsam ea odio molestiae unde officiis incidunt, officia omnis voluptatibus maxime quisquam autem sapiente hic et soluta quos!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, quae culpa tenetur possimus porro reprehenderit animi dolorum pariatur nisi odio qui distinctio recusandae! Aperiam, commodi quae. Doloribus magnam similique ipsa.</p>
                        <h5>Header #2:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sunt ex? Nihil placeat natus minus molestiae officia impedit dolore, autem atque reiciendis sed id exercitationem. Voluptatem eaque nostrum perspiciatis quibusdam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maiores et sint deleniti. Tempora minima beatae voluptatem saepe cumque, eligendi recusandae, animi consequuntur illum vel assumenda perspiciatis, repudiandae cum eaque.</p>
                    </div>
                </div>
                
            </div>
            
`;

var _blogPagebtwo = `

<div class="content">
                <div class="blog_header">
                    
                </div>
                <div class="blog-content">
                    <div class="box_blog_bigger">
                        <h4>30</h4>
                        <p>JUL</p>
                    </div>
                    <div class="blog-text">
                        <h5>Header #1:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab non assumenda ipsam ea odio molestiae unde officiis incidunt, officia omnis voluptatibus maxime quisquam autem sapiente hic et soluta quos!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, quae culpa tenetur possimus porro reprehenderit animi dolorum pariatur nisi odio qui distinctio recusandae! Aperiam, commodi quae. Doloribus magnam similique ipsa.</p>
                        <h5>Header #2:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sunt ex? Nihil placeat natus minus molestiae officia impedit dolore, autem atque reiciendis sed id exercitationem. Voluptatem eaque nostrum perspiciatis quibusdam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maiores et sint deleniti. Tempora minima beatae voluptatem saepe cumque, eligendi recusandae, animi consequuntur illum vel assumenda perspiciatis, repudiandae cum eaque.</p>
                    </div>
                </div>
                
            </div>
            
`;

var _blogPagebthree = `

<div class="content">
                <div class="blog_header">
                    
                </div>
                <div class="blog-content">
                    <div class="box_blog_bigger">
                        <h4>30</h4>
                        <p>AUG</p>
                    </div>
                    <div class="blog-text">
                        <h5>Header #1:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab non assumenda ipsam ea odio molestiae unde officiis incidunt, officia omnis voluptatibus maxime quisquam autem sapiente hic et soluta quos!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, quae culpa tenetur possimus porro reprehenderit animi dolorum pariatur nisi odio qui distinctio recusandae! Aperiam, commodi quae. Doloribus magnam similique ipsa.</p>
                        <h5>Header #2:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sunt ex? Nihil placeat natus minus molestiae officia impedit dolore, autem atque reiciendis sed id exercitationem. Voluptatem eaque nostrum perspiciatis quibusdam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maiores et sint deleniti. Tempora minima beatae voluptatem saepe cumque, eligendi recusandae, animi consequuntur illum vel assumenda perspiciatis, repudiandae cum eaque.</p>
                    </div>
                </div>
                
            </div>
            
`;

var _blogPagebfour = `

<div class="content">
                <div class="blog_header">
                    
                </div>
                <div class="blog-content">
                    <div class="box_blog_bigger">
                        <h4>23</h4>
                        <p>NOV</p>
                    </div>
                    <div class="blog-text">
                        <h5>Header #1:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab non assumenda ipsam ea odio molestiae unde officiis incidunt, officia omnis voluptatibus maxime quisquam autem sapiente hic et soluta quos!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, quae culpa tenetur possimus porro reprehenderit animi dolorum pariatur nisi odio qui distinctio recusandae! Aperiam, commodi quae. Doloribus magnam similique ipsa.</p>
                        <h5>Header #2:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sunt ex? Nihil placeat natus minus molestiae officia impedit dolore, autem atque reiciendis sed id exercitationem. Voluptatem eaque nostrum perspiciatis quibusdam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maiores et sint deleniti. Tempora minima beatae voluptatem saepe cumque, eligendi recusandae, animi consequuntur illum vel assumenda perspiciatis, repudiandae cum eaque.</p>
                    </div>
                </div>
                
            </div>
            
`;

var _blogPagebfive = `

<div class="content">
                <div class="blog_header">
                    
                </div>
                <div class="blog-content">
                    <div class="box_blog_bigger">
                        <h4>23</h4>
                        <p>DEC</p>
                    </div>
                    <div class="blog-text">
                        <h5>Header #1:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab non assumenda ipsam ea odio molestiae unde officiis incidunt, officia omnis voluptatibus maxime quisquam autem sapiente hic et soluta quos!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, quae culpa tenetur possimus porro reprehenderit animi dolorum pariatur nisi odio qui distinctio recusandae! Aperiam, commodi quae. Doloribus magnam similique ipsa.</p>
                        <h5>Header #2:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sunt ex? Nihil placeat natus minus molestiae officia impedit dolore, autem atque reiciendis sed id exercitationem. Voluptatem eaque nostrum perspiciatis quibusdam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maiores et sint deleniti. Tempora minima beatae voluptatem saepe cumque, eligendi recusandae, animi consequuntur illum vel assumenda perspiciatis, repudiandae cum eaque.</p>
                    </div>
                </div>
                
            </div>
            
`;
var _contact = `<div class="content">
<h1>CONTACT US:</h1>
<div class="contact"> 
    <div class="contact-items">
        <section id="form-contact">
            <form action="">
                <input type="text" placeholder="Your name..."> <br>
                <input type="text" placeholder="Email Address..."><br>
                <input type="text" placeholder="Company..."><br>
                <input type="textarea" aria-rowspan="5" placeholder="Message..." id="message-box"><br>
    
                <div class="send">SEND MESSAGE</div>
            </form>
        </section>
        <section id="location">
            <div class="map"></div>
        </section>
       
        
    </div>
    
    </div>
</div>
`;



export function updateView(pageName) {
    let content = "_" + pageName;

    $("#app").html(eval(content));

    if(pageName == "home") {
        $("nav").addClass("border-white");
        $("nav #links").addClass("link_white");
        $("#logo").removeClass("logo-black");

    } else {
        $("nav").removeClass("border-white");
        $("#logo").addClass("logo-black");
        $("nav #links").removeClass("link_white");

    }
}