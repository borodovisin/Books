/*! grtp.co 2015-05-25 */
!function(){"use strict";function a(a){return document.querySelectorAll(a)}var b=a("[data-gratipay-username],[data-gittip-username]"),c=b.length,d=window.Gratipay||{},e=window.grtpAPI||"https://grtp.co/v1/";if(window._grtp=window._grtp||[],!d.widgets&&!a('script[src="'+e+'api.js"]').length){var f=document.createElement("script");f.src=e+"api.js",a("head")[0].appendChild(f)}for(var g=0;c>g;g++){var h=b[g];h.getAttribute("data-gratipay-readystatus")||(d.widgets?d.widgets.load(h):_grtp.push(h),h.setAttribute("data-gratipay-readystatus","loading"))}}();