

function changeBG(color){
    document.body.style.backgroundColor=color;
    let txt = document.getElementsByClassName("text");

    if(color=="#000000"){
        for(let ele of txt){
            ele.style.color="white";
        }
    }
    else{
        for(let ele of txt){
            ele.style.color="black";
        }
    }

}