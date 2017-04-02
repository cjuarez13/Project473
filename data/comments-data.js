 var SERVER_URL = 'http://localhost:3002'
 var commentsArray = '';
 $.get(SERVER_URL + '/' + 'commentsArray', function(data){
   commentsArray = data;
 });
 console.log(commentsArray);
