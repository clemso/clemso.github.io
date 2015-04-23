function flyweg(a){document.getElementById(a).style.display="none";return true;}
var to=Math.floor(0+(80+1)*(Math.random()));var le=Math.floor(0+(75+1)*(Math.random()));document.write("<div id=\"fly\" style=\"top:"+to+"%;position:absolute;left:"+le+"%;\" onmouseover=\"return flyweg('fly')\" ><img src=\"static/img/fly.gif\" /></div>");



