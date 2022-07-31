//.....................for loop....................................//

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(var i=0;i<result.length;i++){
        console.log(result[i].name);
    }
}

//.....................for in loop.................................//

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   for (var i in  result){
    console.log(i,result[i].capital);
   }
}

//.......................RESUME IN JSON..........................//

var resume='{"name":"krish", "dob":"dd/mm/yyyy","qualification":"master of engineering","email":"abc@gmail.com","area of interest":"web developing","skills":"html,css,bootstrap,js,reactjs","nationality":"indian","cgpa":"6.8"}';
var myobj = JSON.parse(resume);
console.log(myobj.name,myobj.qualification,myobj.skills);

