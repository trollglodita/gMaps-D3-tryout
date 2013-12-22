$.ajax({
  url: 'http://api.randomuser.me/',
  dataType: 'json',
  success: function(data){
    console.log(data);
  }
});