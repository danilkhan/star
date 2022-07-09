const stars = document.querySelector('.stars')
const star = document.querySelectorAll('.star')
const starArr = star.length - 1
const output = document.querySelector('.output')
console.log(star);


star.forEach(function(obj, key){
    obj.addEventListener('mouseover', function(){     
        for(let i = 0; i <= key; i++){
            star[i].classList.add('yellow')
        }
    })
    obj.addEventListener('mouseout', function(){
        for(let i = key; i >= 0; i--){
            star[i].classList.remove('yellow')
        }
    })
    obj.addEventListener('click', function(){
        // let i = 0;
        if(star[key].classList.contains('orange')){
            for(let i = starArr; i > key; i--){
                star[i].classList.remove('orange')
            }
        }else{
            for(let i = 0; i <= key; i++){
                star[i].classList.add('orange')
            }
        }
       
        output.innerHTML = `Message ${key+1}`;
    })
    
})
