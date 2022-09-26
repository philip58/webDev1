const changecolor = () =>{
    if(document.body.style.color === 'black'){
        document.body.style.color = 'white';
    }
    else if(document.body.style.color === 'white'){
        document.body.style.color = 'yellow';
    }
    else{
        document.body.style.color = 'black';
    }

}