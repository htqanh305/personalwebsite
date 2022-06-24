console.log("It's working")

let theme = localStorage.getItem('theme') //access local cookies to see which theme was chosen

//set conditions to save the theme if refreshed
if (theme == null){
    setTheme('light')
}
else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode //grab the mode from data-mode
        console.log('Option clicked: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if(mode == 'light'){
       document.getElementById('theme-style').href = 'default.css' 
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css' 
     }

     if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css' 
     }

     if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css' 
     }

     localStorage.setItem('theme', mode) //save the theme clicked to local storage for next refresh

}
