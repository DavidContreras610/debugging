function changeTextColor(color){
    // Add the function to change the image
    document.getElementById("changeGreen").onclick = function(){
        document.getElementById("output").style.color = 'green';
    }
    
    document.getElementById("changeRed").onclick = function(){
        document.getElementById("output").style.color = 'red';
    }
}

