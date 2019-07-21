
// function hello() {
     //     alert("Hello, world!");
     //     }
     
     function birth(){
         var ane,ana;
     // var fullName= document.getElementById("fName").value;
     // document.getElementById("Results").innerHtml=fullName;
     var dateInput=document.getElementById("day").value;
     var date=new Date(dateInput);
     console.log(date);
     var dd= date.getDate();
     console.log(dd)
     var mm= date.getMonth() + 1;
     var yy= date.getFullYear();
     console.log(mm);
     var cc=parseInt(yy.toString().slice(0,2));
     var Year=parseInt(yy.toString().slice(2,4));
     if(document.getElementById('male').checked){
         var gender = 'Male'
     }else{
         var gender = 'Female'
     }
     
     console.log(gender)
     var M=["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
     var F=["Ama/Amma","Akosua","Adwoa","Abenna","Akua/Akuba","Yaa","Afua"];
          var anu,ani;
          ani=(parseInt(Year/4))+dd;
          if(cc===17){
          ane=ani+4;
          if(mm===1){
          anu=ane+1;
          }
          else if(mm===2){
          anu=ane+4;
          }
          else if(mm===3){
          anu=ane+4;
          }
          else if(mm===4){
          anu=ane+0;
          }
          else if(mm===5){
          anu=ane+2;
          }
          else if(mm===6){
          anu=ane+5;
          }
          else if(mm===7){
          anu=ane+0;
          }
          else if(mm===8){
          anu=ane+3;
          }
          else if(mm===9){
          anu=ane+6;
          }
          else if(mm===10){
          anu=ane+1;
          }
          else if(mm===11){
          anu=ane+4;
          }
          else if(mm===12){
          anu=ane+6;
          }
          else{
          alert("wrong input")
          }
     }
     else if (cc===18){
     ane=ani+2;
     if(mm===1){
          anu=ane+1;
     }
     else if(mm===2){
          anu=ane+4;
     }
     else if(mm===3){
          anu=ane+4;
     }
     else if(mm===4){
          anu=ane+0;
     }
     else if(mm===5){
          anu=ane+2;
     }
     else if(mm===6){
          anu=ane+5;
     }
     else if(mm===7){
          anu=ane+0;
     }
     else if(mm===8){
          anu=ane+3;
     }
     else if(mm===9){
          anu=ane+6;
     }
     else if(mm===10){
          anu=ane+1;
     }
     else if(mm===11){
          anu=ane+4;
     }
     else if(mm===12){
          anu=ane+6;
     }
     else{
          alert("wrong input")
     }
     }
     else if (cc===19){
          ane=ani+0;
          if(mm===1){
               anu=ane+1;
          }
          else if(mm===2){
               anu=ane+4;
          }
          else if(mm===3){
               anu=ane+4;
          }
          else if(mm===4){
               anu=ane+0;
          }
          else if(mm===5){
               anu=ane+2;
          }
          else if(mm===6){
               anu=ane+5;
          }
          else if(mm===7){
               anu=ane+0;
          }
          else if(mm===8){
               anu=ane+3;
          }
          else if(mm===9){
               anu=ane+6;
          }
          else if(mm===10){
               anu=ane+1;
          }
          else if(mm===11){
               anu=ane+4;
          }
          else if(mm===12){
               anu=ane+6;
          }
          else{
               alert("wrong input")
          }
     }
     else if(cc===20){
          ane=ani+6;
          if(mm===1){
               anu=ane+1;
          }
          else if(mm===2){
               anu=ane+4;
          }
          else if(mm===3){
               anu=ane+4;
          }
          else if(mm===4){
               anu=ane+0;
          }
          else if(mm===5){
               anu=ane+2;
          }
          else if(mm===6){
               anu=ane+5;
          }
          else if(mm===7){
               anu=ane+0;
          }
          else if(mm===8){
               anu=ane+3;
          }
          else if(mm===9){
               anu=ane+6;
          }
          else if(mm===10){
               anu=ane+1;
          }
          else if(mm===11){
               anu=ane+4;
          }
          else if(mm===12){
               anu=ane+6;
          }
          else{
               alert("wrong input")
          }
     }
     ana=(anu+Year)%7;
     if (ana===0){
          day="Saturday";
          if(gender==="Female"){
               document.getElementById("Results").innerHTML=F[0];
          }
          else if(gender==="Male"){
             document.getElementById("Results").innerHTML=M[0];
          }
     }
     else if(ana===1){
          day="Sunday";
          if(gender==="Female"){
             document.getElementById("Results").innerHTML=F[1];
          }
          else if(gender==="Male"){
             document.getElementById("Results").innerHTML=M[1];
          }
     }
     else if(ana===2){
          day="Monday";
          if(gender==="Female"){
             document.getElementById("Results").innerHTML=F[2];
          }
          else if(gender==="Male"){
             document.getElementById("Results").innerHTML=M[2];
          }
     }
     else if(ana===3){
          day="Tuesday";
          if(gender==="Female"){
             document.getElementById("Results").innerHTML=F[3];
          }
          else if(gender==="Male"){
             document.getElementById("Results").innerHTML=M[4];
          }
     }
     else if(ana===4){
          day="Wednesday";
          if(gender==="Female"){
             document.getElementById("Results").innerHTML=F[4];
          }
          else if(gender==="Male"){
             document.getElementById("Results").innerHTML=M[4];
          }
     }
     else if(ana===5){
          day="Thursday";
          if(gender==="Female"){
             document.getElementById("Results").innerHTML=F[5];
          }
          else if(gender==="Male"){
             document.getElementById("Results").innerHTML=M[5];
          }
     }
     else if(ana===6){
          day="Friday";
          if(gender==="Female"){
             document.getElementById("Results").innerHTML=F[6];
          }
          else if(gender==="Male"){
             document.getElementById("Results").innerHTML=M[6];
          }
     }
     else{
          alert("no remaining days")
     }
    //   console.log(name);
        }
    //  alert("your Akan name is:"+ birth());
     