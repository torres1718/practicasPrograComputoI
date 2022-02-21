//ocultamos o mostramos div que contiene la lista de agregados
const hide= document.querySelector('#hideElements');
const listDiv= document.querySelector('#list');

//constantes para poder agregar elementos a la lista
const addItemInput=document.querySelector('#addItem');//intput
const addItemButton=document.querySelector('button#addItemButton');//boton

//eliminar el ultimo item en la lista
const removeItemButton=document.querySelector('button#removeItemButton');
//eliminar elemento seleccionado en la lista
const removeItem=document.querySelector('button#removeItem');


//eventos para cada boton

//mostrar y ocultar lista
hide.addEventListener('click',()=>{
    if(listDiv.style.display==='none'){
        listDiv.style.display='block';
        hide.textContent='Ocultar';
    }else{
        listDiv.style.display='none';
        hide.textContent='Mostrar';
    }
});

//agregar elementos a la lista 
addItemButton.addEventListener('click',()=>{
    let list=document.querySelector('ul');
    let li=document.createElement('li');
    li.textContent=addItemInput.value;
    list.appendChild(li);
    addItemInput.value="";
});

//agregar elementos a la lista mediante enter
addItemInput.addEventListener('keydown',(e)=>{
    if(e.keyCode===13){
        let list=document.querySelector('ul');
        let li=document.createElement('li');
        li.textContent=addItemInput.value;
        list.appendChild(li);
        addItemInput.value="";
    }
});

//eliminar ultimo elemento de la lista
removeItemButton.addEventListener('click',()=>{
    let list=document.querySelector('ul');
    let li=document.querySelector('li:last-child');
    list.removeChild(li);
});

//eliminar mediante seleccion de objeto de la lista
function findIndex(elem){
    var i, len = items.length;
    for (i = 0; i < len; i++) {
        if (items[i] === elem) {
            return i;
        }
    }
    return -1;
}

//obtenermos index del elemento seleccionado
var list=document.getElementById("listItems"),
    items = list.getElementsByTagName("li");
list.onclick=function(e){
    var event = e || window.event,
    src=event.target || event.srcElement;
    var myIndex=findIndex(src);
    //alerta para confirmar eliminacion
    index=myIndex;
    console.log(myIndex);

    if(event.target.tagName==='LI'){
        list.querySelectorAll('li').forEach(el=>el.classList.remove('alert','alert-success'));
        items[index].classList.add('alert','alert-success');
    }
};

removeItem.addEventListener('click',()=>{
    let showDiv=document.getElementById('list');
    let divAlert=document.createElement('div');
    let label=document.createElement('label');
    label.innerHTML='Se elimino el elemento: '+index;
    divAlert.classList.add('alert','alert-danger');

    items[index].parentNode.removeChild(items[index]);
    divAlert.appendChild(label);
    showDiv.appendChild(divAlert);
});
