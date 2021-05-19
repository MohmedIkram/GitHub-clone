
function validate(){
  let name = document.getElementById("username").value; 
  const username = name.split(" ").join("")
  console.log(username)
  fetch(`https://api.github.com/users/${username}`, {method: 'GET'})
.then(data => data.json())
.then(x=>{
  
  
      const newDiv = document.getElementById("searchdata");
      const newContent = document.getElementById("name");
      const joindate = document.getElementById("joindate");
      let Response =document.getElementById("reppolink");
      newContent.innerText = "Users Name : " + x.login;
      joindate.innerText ="joined Date : " + x.created_at;
  
  
     //for img tag 
      img = document.createElement('img');
      img.setAttribute('class','space');
      img.src = x.avatar_url;
      newDiv.append(img);
      
          
      // Delete 
      const button = document.getElementById("delete");
      button.setAttribute('class','btn btn-link');
      button.innerText = 'Delete'
      button.addEventListener('click', function(){
        document.body.removeChild(newDiv)
      })
      // visit profile 
      const profile = document.getElementById("profile");
      profile.setAttribute('class','btn btn-primary');
      profile.setAttribute('id','myButton');
      profile.innerHTML = ' visit profile'
      document. getElementById("myButton"). onclick = function () {
        location. href =`https://github.com/${username}?tab=repositories`;
        }
      
  
      newDiv.appendChild(newContent);
      
      newDiv.appendChild(joindate)
      newDiv.appendChild(Response)
      Response.innerText= "User's Repo link : " +`https://github.com/${username}?tab=repositories`;
      newDiv.append(button)
      newDiv.append(profile)

      document.body.appendChild(newDiv) 
       
   })
   .catch(e=>console.log("User Not Found :("))

}

