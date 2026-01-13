function checkKey(){
  const correctKey = "@LOUSY-ERROR"; // 🔑 YOUR SECRET KEY
  const userKey = document.getElementById("keyInput").value;
  const msg = document.getElementById("msg");

  if(userKey === correctKey){
    msg.style.color = "green";
    msg.innerText = "Access Granted ✅";
    
    // Next page open
    setTimeout(()=>{
      window.location.href = "home.html"; 
    },1000);

  }else{
    msg.innerText = "Invalid Key ❌";
  }
}
