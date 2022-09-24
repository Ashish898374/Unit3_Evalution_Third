// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
  
   let amount=JSON.parse(localStorage.getItem("amount"));
     document.getElementById("wallet").innerHTML=amount

     async function setdata(){
        let search=document.getElementById("search").value;

       
        

        let res=await fetch(`https://www.omdbapi.com/?apikey=3015d72d&s=${search}`)
        let data=await res.json();
        console.log(data)
        append(data.Search)
    }
    // setdata()

    let arr=JSON.parse(localStorage.getItem("movie"))
    // console.log(arr)

      function append(Search){
        let container=document.getElementById("movies")
        container.innerHTML=null;
        Search.forEach(function(el){
              let div=document.createElement("div");
              let image=document.createElement("img");
              image.src=el.Poster;
              image.style.width="500px"
              image.style.height="500px"
              let name=document.createElement("p");
              name.innerText=el.Title;
              name.style.marginLeft="150px"
              let btn=document.createElement("button");
              btn.innerText="BookNow";
              btn.style.marginLeft="150px"
              btn.setAttribute("class","book_now")
              btn.addEventListener("click",function(){
                // arr.push(el)
                console.log(arr)
                localStorage.setItem("movie",JSON.stringify(el))
                window.location.href="checkout.html"
                
              })
              
              div.append(image,name,btn)
              container.append(div)
            
            

        })
      }
      let id;
     function debouncing(fun,delay){
        if(id){
            clearInterval(id)
        }
        id=setTimeout(function(){
            fun()
        },delay)
        
     }



      
