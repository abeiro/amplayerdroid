Ampache Player
==============


Ampache Player or amplayer is an HTML5 remote player for AMPACHE.

Currently is packaged as a Chrome APP.

https://chrome.google.com/webstore/detail/ampache-player/fgmlgjpjedpnhbbpahgcknnjkhlbjhgp

As is written in javascript and HTML5 can work also as a Web App. Just upload it to
your web server and open window.html in your browser.


Uses:

* HTML5 audio tag capabilities
* HTML5 localStorage (chrome.storage.local if used as an Chrome packaged APP)
* Playlists from your Ampache Server
* CD Covers from your Ampache Server
* Fan art from http://fanart.tv
* Musicbrainz info. http://musicbrainz.org/
* Publish song "likes" on Facebook
* Support for lyrics (http://lyrics.wikia.com)


Using it
========

Click settings, configure and play


LICENSING
=========

* GPL v3

3rd party Software

* jQuery. (1.10) 		MIT 			http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
* jQuery dataTables.  	BSD-3/GPL-2  	http://datatables.net/license_gpl2   http://datatables.net/license_bsd
* CryptoJS v3.1.2		BSD-3	 		http://code.google.com/p/crypto-js/wiki/License 
* xml2array.js			BSD-3 			http://www.openjs.com/scripts/xml_parser/
* Cordova 				ASF				http://www.apache.org/licenses/LICENSE-2.0


SOME NOTES ABOUT PRIVACY
========================

Since version 0.6, all traffic to musicbrainz is proxied through chicago.amplayer.xyz. This proxy routes traffic
to 3 musicbrainz mirrors. Reason is musicbrainz server is returning errors (too many connections) lately.

Traffic to lyrics wikia is proxied too, since content given by this server changes according to browser user agent,
which made service unusable from cellphones.

Anyway, all traffic is anonymous and no personal data is stored in this proxy.



