$(function(){
    console.log("Page is loaded sucessfully")
   
    
    dobindings()
})

let counter = 0
function dobindings(){
    $("#loginButton").on("click",()=>{
        
        window.alert("Error Occured connecting to facebook please use instagram")

    })
    $("#login").on("click",()=>{
        counter++;
        if(counter<3){
            window.alert("Wrong Password or email")
    
        }
        else{
            window.alert("Session timed out page is not responding")
        }
    })

}