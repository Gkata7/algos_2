var msg = "codingdojo";
for(var x = 0; x < msg.length - 3; x++){
  if(msg.length == 3){
    for(var i = 1; i < 5; i++){
      console.log(i);
    }
  }
  else{
    for(var i = msg.length; i >(msg.length - 1); i--){
      console.log(i);
    }
  }
}
