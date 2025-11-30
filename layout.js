document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>

        <div class="header-content">
	        <div class="header-title">Owen's Website</div>
	        
	        <!-- NAVIGATION -->
	        <nav>
	          <ul>
	            <li><a href="/">Home</a></li>
	            <li>
	                <strong>Hobbies (hover to show)</strong>
	                <ul>
	                  <li><a href="/pets/">Pets</a></li>
	                  <li><a href="/pcs/">Games And Computers</a></li>
	                </ul>
	            </li>
	          </ul>
	        </nav>
        	
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
        
        <div class="sidebar-section">
          <div class="sidebar-title">Buttons!</div>
          	<img src="/neocities.gif" alt="NeoCities">
          	<img src="/piracy-now.gif" alt="Piracy Now!">
          	<img src="/queer.png" alt="You're telling me, a queer coded this?">
          	<img src="/Computer.gif" alt="I LIKE COMPUTER">
          </marquee>
        </div>
        
          <div class="sidebar-section">
          <div class="sidebar-title">Stamps!</div>
            <img src="/sonicova.gif" alt="Sonic OVA">
          	<img src="/bfdi.gif" alt="Battle For Dream Island">
        </div>
         
         <div class="sidebar-section">
          <div class="sidebar-title">Blinkies!</div>
          <img src="0113-autism.gif">
          <img src="Ilovemy3ds.gif">
          <img src="hacker.gif">
          <img src="minor.gif">
           <div class="sidebar-section">
          <div class="sidebar-title">TamaNOTchi!</div>
        <a href="https://tamanotchi.world/27793c"><img src="https://tamanotchi.world/i2/27793" alt="It's tamaNOTchi! Click to feed!"></a></div>
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div><h2>Have a nice day. <br> Contact me on MSN (Escargot)! keaneob3@escargot.chat</h></div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
