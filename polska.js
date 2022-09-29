const changecolor = () =>{
    if(document.body.style.color === 'black'){
        document.body.style.color = 'white';
    }
    else if(document.body.style.color === 'white'){
        document.body.style.color = 'red';
    }
    else{
        document.body.style.color = 'black';
    }

}