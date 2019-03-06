// ==UserScript==
// @name         unClosed captions
// @namespace    wwww.site.com
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.netflix.com/watch/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

$(function(){
    console.log("unClosed Captions Enabled!");
    var elements = [];
    var newText;
    var newerText;
    var isEnabled = true;

    $('.track list-subtiles').append('li class="track" tabindex="0" data-uia="track-subtitle-noCC">English</li>');
    //implement
    window.setInterval(function(){



        if(isEnabled && $('.player-timedtext-text-container').find('span') != elements){
            //console.log("CHANGE");
            $('.player-timedtext-text-container').find('span').each(function(){
                newText = $(this).text();
                
                newerText = ($(this).text().replace(/\[.+\]/,""));
                if(newerText!=newText){
                   console.log('change');
                   $(this).text($(this).text().replace(/\[.+\]/,""));
                }

            });
            elements = $('.player-timedtext-text-container').find('span');
        }


    }, 250);
  //  $(document).on("change", ".player-timedtext-text-container", function () {
});
