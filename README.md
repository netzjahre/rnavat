# rnavat
# Show RNAV waypoints of Austria in flightradar24
# Do not use for real navigation !!!


This is a child of
https://github.com/microtony/fr24-overlay-vhhk


Download the file routes.js
Upload the file to your prefered directory in your https-site (it must be https !!!)


Open https://flightradar24.com in your browser and zoom in Austria in Europe (e.g. Vienna airport)
Add the following text into the URL-field of the browser:

javascript:(function(){document.body.appendChild(document.createElement("script")).src="https://netzjahre.com/rnav/routes.js";})();

If you copy / paste then be aware that it begins with
javascript:


If you prefer, make a bookmarklet of it.
