$(loaded);



function loaded(){
  showText();
  $("#formButton").click(
    function(){
      saveText();
      showText();
    });
}

function saveText(){
  var text = $("#formText");
  var time = new Date();
  localStorage.setItem(time,text.val());
  text.val("");
}

function showText(){
  var list = $("#list");
  list.children().remove();
  var key,value,html = [];
  for(var i=localStorage.length,len=0;i>=len;i--){    
      key = localStorage.key(i);
      value = localStorage.getItem(key);
      html.push($("<p; display: inline-block>").text(value),"<br>");
      if(i!=0){
        html.push($('<input type="checkbox">'));
     }
  }
  list.append(html);
  
}






