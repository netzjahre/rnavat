# rnavat
# RNAV waypoints Austria, do not use for real navigation or real flight plans !!!
This is a child of
https://github.com/microtony/fr24-overlay-vhhk


Download the files rnavat.js and routes.js
Edit the file rnavat.js and replace the text in line 3

js.src = "https://your_https_path/routes.js";

by your own https-path where your routes.js will reside.
Upload the files to your prefered directory in your https-site


Open https://flightradar24.com in your browser an zoom in Austria in Europe (e.g. Vienna airport)
Add the following text into the URL-field of the browser:

javascript:(function(){document.body.appendChild(document.createElement('script')).src='"https://your_https_path/rnavat.js";';})();

If you copy / paste then be aware that it begins with
javascript:


If you prefer, make a bookmarklet of it.
