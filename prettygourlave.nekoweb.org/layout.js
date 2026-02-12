// Everything in here is executed once the DOM (the HTML content of your website) has finished loading.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (document.body.classList.contains("no-layout")) return;

  // Inserting your header and footer:
  document.querySelector(".grid-container").insertAdjacentHTML("afterbegin", headerEl);
  document.querySelector(".grid-container").insertAdjacentHTML("beforeend", footerEl);

  // To insert something inside another element, e.g. for sidebars:
  const wrapperEl = document.querySelector(".my-wrapper"); // <- your selector here
  if (wrapperEl) wrapperEl.insertAdjacentHTML("afterbegin", `<b>Element at beginning of wrapper element.</b>`);
  if (wrapperEl) wrapperEl.insertAdjacentHTML("beforeend", `<b>Element at the end of wrapper element.</b>`);

  // Give class 'active' to links to the current page:
  initActiveLinks();

  // add your own JavaScript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el.getAttribute("href").replace(".html", "").replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/prettygourlave.nekoweb.org/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
    <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <header> element, but I recommend it.
const headerEl = `
             <section id="stat-bar" class="widget">
                <p> This Page Has <!--# views --> Views, <!--# updates --> Updates, and <!--# followers --> Followers!</p>
                <a id="mood" href="https://www.imood.com/users/prettygourlave">im currently feeling... <img src="https://moods.imood.com/display/uname-prettygourlave/imood.gif" alt="The current mood of prettygourlave at www.imood.com" border="0"></a>
                <div id="guestbook">
                    <img src="${nesting}/imgs/cat1.gif" aria-hidden="true"/>
                    <a href="https://prettygourlave.atabook.org/">sign my guest book!</a>
                </div>
                <div id="glenplayer02">
                    <div class="music-controls" onclick="songstart();">
                        <div class="playy">►</div>
                        <div class="pausee">♬</div>
                    </div>
                    <div class="sonata"> <marquee>House Tour - By Sabrina Carpenter</marquee> </div>
                    <div class="labeltext"></div>
                </div><!--end music player-->
        
        <audio id="tune" src="${nesting}/House Tour_spotdown.org.mp3""audio"></audio>
    </div>

        <div class="labeltext"> </div>
            </section>
            <header class="header">
                    <div class="main-header">
                       <a href="${nesting}/index.html"> <div id="iconandtext">
                        <img id="img1" src="${nesting}/imgs/header-icon.gif" aria-hidden="true"/>
                        <h2>welcome to prettygourlave!</h2>
                        </div></a>
                    </div>
                        <ul class="header-nav">
                            <li><a href="${nesting}/pages/about-me">about me</a></li>
                            <li><a href="${nesting}/pages/blog">blog</a></li>
                            <li><a href="${nesting}/pages/recents">recents</a></li>
                            <li><a href="${nesting}/pages/creds">credits</a></li>
                        </ul>         
            </header>    
                       <aside class="sidebar">
                <h2>widgets!</h2>
                <h4 class="widget-header">my socials!</h4>
                <section id="my-socials" class="widget"> 
                    <div id="socials-grid">
                        <a class="tumblr" href="https://www.tumblr.com/prettygourlave"></a>
                        <a class="tik-tok" href="https://www.tiktok.com/@daydream_edits10"></a>
                        <a class="pinterest" href="https://www.pinterest.com/prettygourlave/"></a>
                        <a class="letterboxd" href="https://letterboxd.com/fantasy1344/"></a>
                        <a class="spotify" href="https://open.spotify.com/user/31dfdtkbg6nmv32qfsnqf5ke33ea"></a>
                        <a class="serializd" href="https://www.serializd.com/user/fantasy1344/profile"></a> 
                    </div>
                </section>
                <h4 class="widget-header">clap for this page!</h4>
                <section id="clap" class="widget">
                    <!-- FC2 Clap tag starts here -->
                    <a href="//clap.fc2.com/post/prettygourlave/?url=https%3A%2F%2Fprettygourlave.nekoweb.org%2F&title=PrettyGourlAve" target="_blank" title="Web Clap by FC2"><img src="//clap.fc2.com/images/button/white/prettygourlave?url=https%3A%2F%2Fprettygourlave.nekoweb.org%2F&amp;lang=en" alt="Web Clap by FC2" style="border:none;" /></a>
                    <!-- FC2 Clap tag ends here -->
                    <img src="https://64.media.tumblr.com/ad1659aa29573da35d39fdabaab184d0/4af7bebb5f2971a8-9f/s250x400/f054c2a20fa8293f2d1ebfa4cafb59c5476ad969.gifv" alt="decor trail">
                </section>
                <section id="tamaNOTchi-section" class="widget">
                    <a class="tamaNOTchi" href="https://tamanotchi.world/30102c"><img src="https://tamanotchi.world/i2/30102" alt="It's tamaNOTchi! Click to feed!"></a>
                    <a class="tamaNOTchi" href="https://tamanotchi.world/29219c"><img src="https://tamanotchi.world/i2/29219" alt="It's tamaNOTchi! Click to feed!"></a>
                </section>
                <h4 class="widget-header">my music history!</h4>
                <section id="lastfm" class="widget">
                    <lastfm-tracks interval="35"  user="fantasy1344" apikey="cd6e9802478a9d98267ba23df232a3ca" tracks="15"> </lastfm-tracks>
                </section>
                <h4 class="widget-header">my pet!</h4>
                <section class="widget">
                    <iframe width="100%" height="250" scrolling="yes" src="https://gifypet.neocities.org/pet/pet.html?name=Fancy&dob=1770342858&gender=f&element=Water&pet=cat.gif&map=night.gif&background=paper.jpg&tablecolor=%23e0d0ff&textcolor=%23a577ff" frameborder="0"></iframe>
                </section>
            </aside>
	
`;

// Insert your footer HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <footer> element, but I recommend it.
const footerEl = `
	        <footer class="footer">
                <h3 class="widget-header">hotlinks</h3>
                <marquee behavior="scroll" direction="left" scrollamount="15" class="blinkies">
                    <a href="https://shishka.neocities.org"></a><img src="${nesting}/imgs/blinkes/nerd-and-proud.gif" alt="nerd-and-proud-blinky"/></a>
                    <a href="https://y2k.neocities.org"></a><img src="${nesting}/imgs/blinkes/purple.gif" alt="i love purple blinky"/></a>
                    <a href="https://y2k.neocities.org"></a><img src="${nesting}/imgs/blinkes/weird.gif" alt="im not weird, im gifted blinky"/></a>
                    <a href="https://blinkies.cafe/"></a><img src="${nesting}/imgs/blinkes/cinderella.gif" alt="cinderella"/></a>
                    <a href="https://y2k.neocities.org/blinkies"></a><img src="${nesting}/imgs/blinkes/daydreamer.gif" alt="daydreamer"/></a>
                    <a href="https://y2k.neocities.org/blinkies"></a><img src="${nesting}/imgs/blinkes/chocolate.gif" alt="im a chocoholic"/></a>
                    <a href="https://plasticdino.neocities.org/"></a><img src="${nesting}/imgs/blinkes/css.gif" alt="i heart css"/></a>
                    <a href="https://petrapixel.neocities.org/about/blinkies"></a><img src="${nesting}/imgs/blinkes/minecraft.gif" alt="minecraft"/></a>
                    <a href="https://petrapixel.neocities.org/about/blinkies"></a><img src="${nesting}/imgs/blinkes/diamonds.gif" alt="diamonds are a girls best friends"/>
                    <a href="https://petrapixel.neocities.org/about/blinkies"><img src="${nesting}/imgs/blinkes/smoking.gif" alt="smoking sucks"/></a>
                    <a href="https://www.deviantart.com/radiotrophic/art/PROUD-SIMMER-blinkie-F2U-1077113565"><img src="${nesting}/imgs/blinkes/simmer.gif" alt="proud simmer" />
                </marquee>
                <p class="footer_text"> most of the photos on this site are not mines! i did my best to credit everything i could but sometimes it was hard. to view all the credits <a href="${nesting}/pages/creds">here</a></p>
                <a href="https://nekoweb.org/"><img src="https://nekoweb.org/assets/buttons/button1.gif"></a><!-- button by neconotneko.nekoweb.org -->
                <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a>
            </footer>
            
`;