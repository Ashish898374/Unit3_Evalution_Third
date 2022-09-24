// Store the wallet amount to your local storage with key "amount"

let arr=JSON.parse(localStorage.getItem("amount"));

 
arr=+arr
  function getdata(){
    let money=document.getElementById("amount").value;
    money=arr+(+money )
    localStorage.setItem("amount",JSON.stringify(money))
    // location.reload();
       
    
  }
  document.getElementById("wallet").innerHTML=arr
