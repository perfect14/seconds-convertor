let button = document.querySelector('.button')
button.onclick=function convert(e){
    let hours = document.querySelector('.hours')
    let minutes = document.querySelector('.minutes')
    let result = document.querySelector('.result')
    e.preventDefault();
    hours=parseInt(hours.value);
    minutes = parseInt(minutes.value);
    if(isNaN(hours) || isNaN(minutes)){
        result.textContent = 0
    }else{
        let converthours = hours * 3600; 
         let convertminutes = minutes * 60;
        const secondValue = converthours +convertminutes ;
        result.textContent = secondValue + " seconds";
    }
   
   
};