document.getElementById('select').addEventListener('click',function(){
    const email=document.getElementById('email').value;
    const pass=document.getElementById('pass').value;
    //console.log((email,pass))
    if(email==="nayeem@gmail.com" && pass==="Nayeem"){
        window.location.href="takaPoysha.html";
    }
    else{
        alert("your email and password is wrong sabdhan. taka nite ascho")
    }
})