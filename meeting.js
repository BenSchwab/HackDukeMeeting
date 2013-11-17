


   $( document ).ready(function() {

$("#meeting_number").keyup(function(event){
    if(event.keyCode == 13){
        setUpImages($("#meeting_number").val());
    }
});


function setUpImages(meeting_number){

    console.log("Yes!");
    console.log(""+meeting_number);
    var width = $("#image1").width();
    var height = $("#image1").height();

         /*$("#canvas_one").height(height);
       $("#canvas_one").width(width);
        $("#canvas_two").height(height);
       $("#canvas_two").width(width);
        $("#canvas_three").height(height);
       $("#canvas_three").width(width);
        $("#canvas_four").height(height);
       $("#canvas_four").width(width); */


  var movementOne = new Firebase('https://hackduke.firebaseio.com/meetings/'+meeting_number+'/0m/movements/');
  var movementTwo = new Firebase('https://hackduke.firebaseio.com/meetings/'+meeting_number+'/1m/movements/');
  var movementThree = new Firebase('https://hackduke.firebaseio.com/meetings/'+meeting_number+'/2m/movements/');
  var movementFour = new Firebase('https://hackduke.firebaseio.com/meetings/'+meeting_number+'/3m/movements/');

   var imageOneRef = new Firebase('https://hackduke.firebaseio.com/meetings/'+meeting_number+'/0/');
   var imageTwoRef = new Firebase('https://hackduke.firebaseio.com/meetings/'+meeting_number+'/1/');
   var imageThreeRef = new Firebase('https://hackduke.firebaseio.com/meetings/'+meeting_number+'/2/');
   var imageFourRef = new Firebase('https://hackduke.firebaseio.com/meetings/'+meeting_number+'/3/');

    var questionsRef = new Firebase('https://hackduke.firebaseio.com/meetings/'+meeting_number+'/question_array/');


      movementOne.on('value', function(snapshot) {
        console.log("IN movement");
        if(snapshot.val()!==null){
            var x= snapshot.val().x *8;
            var y= snapshot.val().y *8;
            var pone = $("#p_one");
            pone.css('margin-left',x+'px');
            pone.css('margin-top',y+'px');
            console.log(x);
            console.log(y);
        }


      });

  movementTwo.on('value', function(snapshot) {
        console.log("IN movement");
        if(snapshot.val()!==null){
            var x= snapshot.val().x *8;
            var y= snapshot.val().y *8;
            var pone = $("#p_two");
            pone.css('margin-left',x+'px');
            pone.css('margin-top',y+'px');
            console.log(x);
            console.log(y);
        }


      });
  movementThree.on('value', function(snapshot) {
        console.log("IN movement");
        if(snapshot.val()!==null){
            var x= snapshot.val().x *8;
            var y= snapshot.val().y *8;
            var pone = $("#p_three");
            pone.css('margin-left',x+'px');
            pone.css('margin-top',y+'px');
            console.log(x);
            console.log(y);
        }


      });
    movementFour.on('value', function(snapshot) {
        console.log("IN movement");
        if(snapshot.val()!==null){
            var x= snapshot.val().x *8;
            var y= snapshot.val().y *8;
            var pone = $("#p_four");
            pone.css('margin-left',x+'px');
            pone.css('margin-top',y+'px');
            console.log(x);
            console.log(y);
        }


      });





      imageOneRef.on('value', function(snapshot) {
        var image= snapshot.val();
       // var canvas = document.getElementById("canvas_one");
        displayImage(image,"one",$("#image1"));
      });
      imageTwoRef.on('value', function(snapshot) {
        var image= snapshot.val();
        //var canvas = document.getElementById("canvas_two");
        displayImage(image,"two",$("#image2"));
      });

        imageThreeRef.on('value', function(snapshot) {
        var image= snapshot.val();
        //var canvas = document.getElementById("canvas_three");
        displayImage(image,"three",$("#image3"));
      });
        imageFourRef.on('value', function(snapshot) {
        var image= snapshot.val();
        //var canvas = document.getElementById("canvas_four");
        displayImage(image,"four",$("#image4"));
      });

        questionsRef.on('value', function(snapshot) {
        var question = snapshot.val();
        addquestion(question);
      });

        function addquestion(question){
           //var qs = question.split(",");
           //console.log(qs.length);
           if(question!==null){
           $("#questions").append("<ul>");
           for(var i =question.length-1; i<question.length; i++){
               $("#questions").append("<li>"+question[i]+"</li>");
           }
           $("#questions").append("</ul>");
       }

        }


      function displayImage(image,num,image_holder){
      	//var im = atob(image.trim());
      //var im =	Base64.decode(image);
     // im = atob(im);
        if(image===null)
            return;
      	//draw(im);
      	var testim = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" '
      	var ourim  = image;
      	// imagestring = '<img id="'+num+'" src="data:image/png;base64,'+ourim+'"/>';
         image_holder.empty();
        var imagestring = '<img class="imagez" id="'+num+'" src="data:image/png;base64,'+ourim+'" ></img>';
        console.log(image_holder);


      	  image_holder.append(imagestring);
          var pointstring = '<div class="pointer" id="p_'+num+'"></div>';
          console.log("PointString:"+pointstring);
          console.log(image_holder);
          image_holder.append(pointstring);
          console.log(image_holder);

          $("#"+num).width(width);
          $("#"+num).height(height);
          //$("#test").hide();
          //"#"+num+""
        //var imageOb = new Image();
        //var src = $(imagestring).attr("src");
        //imageOb.src = src;
        //draw(canvas,imageOb,width,height);






       // $(".messages").append("<p> hello </p>");



      };



    function draw(canvas, image,width, height) {

      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image,0,0,width/1.7 ,height/1.75);

      }
    }


var Base64 = {

// private property
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

    }

    return output;
},

// public method for decoding
decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = Base64._utf8_decode(output);

    return output;

},

// private method for UTF-8 encoding
_utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
},

// private method for UTF-8 decoding
_utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }

    return string;
}

}

}


});