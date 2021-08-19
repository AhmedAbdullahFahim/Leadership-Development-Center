function trimTrailingSlash(string)
{
  if(string != null) {
    return string.replace(/\/+$/, '');
  } else {
    return string;
  }
}
if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
ctrHref = trimTrailingSlash('https://www.symptoma.ro/'.trim());
ctrHref2 = trimTrailingSlash('https://www.symptoma.ro/'.trim());
eInDoc = function(e) {
  while (e=e.parentNode) {
   if (e==document) {
      return true;
    }
   }
   return false;
};
lCheck = function(l) {
  if (null != l && null != l.getAttribute('href') && (ctrHref === '' || trimTrailingSlash(l.getAttribute('href').trim()) == ctrHref || trimTrailingSlash(l.href.trim()) == ctrHref || trimTrailingSlash(l.getAttribute('href').trim()) == ctrHref2 || trimTrailingSlash(l.href.trim()) == ctrHref2)) {
    return true;
  }
  else {
    return false;
  }
};
linkfound = false;
window.onload = function () {
    els = document.getElementsByTagName('a');
    l = els.length;
    for (i = 0; i < l; i++) {
       el = els[i];
       if (trimTrailingSlash(el.href) === ctrHref || trimTrailingSlash(el.getAttribute('href')) === ctrHref || trimTrailingSlash(el.href) === ctrHref2 || trimTrailingSlash(el.getAttribute('href')) === ctrHref2) {
        linkfound = true;
        if(el.getAttribute('rel')=='nofollow' || !eInDoc(el) || !lCheck(el)) {
          linkfound = false;
        }
        linktext = el.innerHTML;
        if(linktext == undefined) {
          linkfound = false;
        }
        else if(linktext.trim() == '') {
          linkfound = false;
        }
        if(el.offsetHeight != undefined && el.offsetHeight < 8) {
          linkfound = false;
        }
        
        break;
      }
    }

    if(linkfound) {
  linkToHide = el;
  linkToHide.innerHTML = '';
}

    if (linkfound == false) {
      
            var div = document.createElement('div');
            div.id = 'error_';
            div.innerHTML = '<a href="http://besucherzaehler.co/?id=3b04e7b9a18eee3e5cea8589c02c60bd1e625365">BesucherzÃ¤hler Fehler: Code nicht Ã¤ndern. Hier klicken, um den neue Code zu generieren!</a>';
            
 if(document.getElementById('besucherzaehler2') != null) { document.getElementById('besucherzaehler2').parentNode.insertBefore(div, document.getElementById('besucherzaehler2').nextSibling); } else { document.body.appendChild(div); }

      widget = document.getElementById('besucherzaehler2');
      if(widget) {
        widget.style.visibility = 'hidden';
      }
    }
}

document.write('<a href="https://free-hit-counters.net/stats/2u3e" style="text-decoration: none;"><svg width="100" height="45" id="besucherzaehler2"><g><rect width="100" height="45" x="0" y="0" style="fill: #ffffff;" fill-opacity="0.0" stroke="#565656"/><text x="6" y="38" style="" font-family="Roboto, sans-serif" font-size="11" fill="#565656">Total: 124 688</text><rect width="3" height="9" x="6" y="14" style="fill: #565656;"/><rect width="3" height="17" x="11" y="6" style="fill: #565656;"/><rect width="3" height="13" x="16" y="10" style="fill: #565656;"/><text x="25" y="23" style="font-weight: bold;" font-family="Roboto, sans-serif" font-size="11" fill="#565656">Visitors</text></g></svg></a>');