( async function getApi(){
    var ahmed= await fetch("https://jsonplaceholder.typicode.com/photos");
    var item= await ahmed.json(); 
    var myText="";  
    for(var i=0;i<item.length;i++){
    var cartoona =`<div class="col-md-4 ">
          <img src="${item[i].url}" class="img-fluid">
               <h4>${item[i].title}</h4>
             <h6>${item[i].id}</h6>
                </div>
  
                ` ;
                myText = myText + cartoona;
    }
                document.querySelector(".test").innerHTML =myText;
}) ();