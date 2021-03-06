/********************************************************************************************
Copyright 2012 Augusto Beiro
This file is part of Foobar.
Foobar is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the 
Free Software Foundation, either version 3 of the License, 
or (at your option) any later version.
Ampache Player is distributed in the hope that it will be useful, 
but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or 
FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with Ampache Player. 
If not, see http://www.gnu.org/licenses/.
/********************************************************************************************/
function _getCachedData(i, durl, ret) 
{
    var request = $.ajax({
        url : durl, type : "GET", dataType : "text" 
    });
    request.done(function (rawdata) 
    {
        xml = xml2array($.parseXML(rawdata));
        ret(xml);
    });
}

function _getCachedDataNew(cmd, durl, ret) 
{
    var request = $.ajax({
        url : durl, type : "GET", dataType : "xml" 
    });
    request.done(function (rawdata) 
    {
		songsNodes=rawdata.getElementsByTagName("song");
		r=new Object();
		r.root=new Object()
		r.root.song=new Array();
		i=0;
		for (i=0;i<songsNodes.length;i++) { 
			r.root.song[i]=new Object();
			r.root.song[i].id=songsNodes[i].attributes[0].value;
			for (j=0;j<songsNodes[i].childNodes.length;j++) {
			//for (j=0;j<songsNodes[i].children.length;j++) {
				//r.root.song[i][songsNodes[i].children[j].nodeName]=songsNodes[i].children[j].textContent;
				if (songsNodes[i].childNodes[j].nodeName!="#text")
					r.root.song[i][songsNodes[i].childNodes[j].nodeName]=songsNodes[i].childNodes[j].textContent;
				if (songsNodes[i].childNodes[j].nodeName=="album")	
					r.root.song[i].album_id=songsNodes[i].childNodes[j].id;

			}
			// for (j=0;j<mysongs[0].children.length;j++) { console.log(mysongs[0].children[j].nodeName) }
		}
        
        ret(r);
    });
}



function _getCachedDataXML(i, durl, ret) 
{
    var request = $.ajax({
        url : durl, type : "GET", dataType : "text" ,
		error:function(XMLHttpRequest,textStatus, errorThrown) {     
			alert("Error status :"+textStatus);  
			alert("Error type :"+errorThrown);  
			alert("Error message :"+XMLHttpRequest.responseXML);  
		}
    });
    request.done(function (rawdata) 
    {
		xmldata=$.parseXML( rawdata )
		console.log(xmldata);
        ret(xmldata);
    });
}