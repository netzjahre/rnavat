

# rnavat
# rnav waypoints austria, do not use for real navigation
Download the files rnavat.js and routes.js
Edit the file rnavat.js and replace in line 3 the text
 js.src = "https://your_https_path/routes.js";
by your own https-path where your routes.js will reside.
Upload the files to your https-site


Open https://flightradar24.com in your browser an zoom in Austria in Europe (e.g. Vienna airport)
Add the following text into the URL-field of the browser:

javascript:(function(){document.body.appendChild(document.createElement('script')).src='"https://your_https_path/rnavat.js";';})();

If you copy / paste then be aware that it begins with
javascript:


If you prefer, make a bookmarklet of it.
