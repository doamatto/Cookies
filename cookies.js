function fetchCookies(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(i);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expire = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function editCookie(cname,cvalue,exdays) {
    cookieTemp = (document.cookie.match(/^(?:.*;)?\s*cname\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
    if(!cookieTemp === undefined) {
      console.log("Cookie Not Found.")
    } else {
      var d = new Date();
      document.cookie = cname + "=" + cvalue +";" + expires + ";path=/";
    }
}
