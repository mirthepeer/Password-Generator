const characters =["A","B","C","D","E","F","G","H","I",
                    "J","K","L","M","N","O","P","Q","R",
                "S","T","U","V","W","X","Y","Z","a","b",
                "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
                    "/"];




    let passwordOne =   document.querySelector("#passwordOne")
    let passwordTwo =   document.querySelector("#passwordTwo")
            
    
function clear() {
    passwordOne.innerHTML = ""
    passwordTwo.innerHTML = ""
}
    
function getRandomIndex(){
    let randomIndex = Math.floor(Math.random ()* characters.length)
    return randomIndex

}


function generate(){
    if(passwordOne.innerHTML.length && passwordTwo.innerHTML.length){
        clear()
    }
    for(i = 0 ; i <16 ; i++){
        passwordOne.innerHTML += characters[getRandomIndex()]
        passwordTwo.innerHTML += characters[getRandomIndex()]
    
}
    
    }

   