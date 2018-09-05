var text = document.getElementById('text'),
    button = document.getElementById('btn');
    articleTodo = document.getElementById('article-todo');


window.onload = function(){
    text.focus();
}
    


button.onclick = function (){


    if(text.value.length === 0){
        alert('You Must Type Your Task...')
    } else 

    var element = document.createElement('div'),
    elementSection = document.createElement('section'),
    iconSection = document.createElement('section'),
    icons = document.createElement('i')
    icon = document.createElement('i');


    
    element.classList.add('todo');
    elementSection.classList.add('word');
    iconSection.classList.add('icons');
    icons.classList.add('fas')
    icons.classList.add('fa-trash-alt');
    icon.classList.add('fas');
    icon.classList.add('fa-marker');



    element.appendChild(elementSection);
    element.appendChild(iconSection);
    articleTodo.appendChild(element);
    iconSection.appendChild(icons);
    iconSection.appendChild(icon);


    elementSection.textContent = text.value;
        


        
    icons.onclick = function(){
        articleTodo.removeChild(element)
         }

    icon.onclick = function(){

        element.classList.toggle('color');
        elementSection.classList.toggle('line-through');

        }   

    text.focus(); 
    text.onfocus = text.value = '';


      
}










