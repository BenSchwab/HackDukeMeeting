   var myDataRef = new Firebase('https://hackduke.firebaseio.com/7435282457');

      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $(".messages").append("<p>"+name+"</p")
      };