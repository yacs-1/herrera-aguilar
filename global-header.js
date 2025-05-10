/**
This script will inject the global page header into teh #gheader div of each page
**/

const INJECTION = '<div id="global-preheader"><h1 class="heading">Welcome to my website!</h1><ul id="nav-list"><li><a href="https://yacs-1.github.io/herrera-aguilar/index.html">Home</a></li><li><a href="https://yacs-1.github.io/herrera-aguilar/photo-albums/index.html">Photos</a><ul><li><a href="#">Outdoors</a></li><li><a href="#">Concerts</a></li><li><a href="#">Misc.</a></li></ul></li><li><a href="#">Music</a><ul><li><a href="#">Artists</a></li><li><a href="#">Albums</a></li><li><a href="#">Songs</a></li></ul></li><li><a href="/herrera-aguilar/web-dev/index.html">Web Dev</a><ul><li><a href="/herrera-aguilar/wdsub/recipe.html">Week 2</a></li><li><a href="/herrera-aguilar/wdsub/anchors.html">Week 3</a></li><li><a href="/herrera-aguilar/wdsub/poems.html">Week 4</a></li><li><a href="/herrera-aguilar/wdsub/reviews.html">Week 5</a></li><li><a href="/herrera-aguilar/wdsub/Newspaper.html">Week 6</a></li><li><a href="/herrera-aguilar/wdsub/band-page.html">Week 7</a></li><li><a href="/herrera-aguilar/wdsub/list-maker.html">Week 8</a></li><li><a href="/herrera-aguilar/wdsub/pythag.html">Week 9</li></ul></li></ul></div>';
let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
