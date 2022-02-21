<template>
    <div class="firstcomponent">
        <h1  @mouseover="mouseOver" @mouseout="mouseOut">
        
        {{titulo}}
        
        
        </h1>
        <h1 :style="[styleE,{'fontSize':fontSize+'px'}]">
            {{ materia }}
    
        </h1>
        <p>Tama;o de la fuentes es: {{fontSize}}</p>
        <button v-on:click="fontSize++" >Incrementar</button>
        <button v-on:click="fontSize--">Disminuir</button>
        <h1>{{ Nombre }}</h1>
        <h2>{{x}} , {{y}}</h2>
        <img v-on:mousemove="getXY" @mouseover="mouseOver" @mouseout="mouseOut" src="https://th.bing.com/th/id/OIP.e8cOUJfElLXGTY9W1M9X2QHaFL?w=226&h=180&c=7&r=0&o=5&pid=1.7" alt="235" >
        <br>
        <br>
        <b>{{message}}</b>
<br>
<br>
    <input type="text" v-on:keydown="key">

    


        </div>
</template>
<script>


export default{
    name: 'FirstComponent',
    data(){
        return{
            titulo: 'Mi primer Componente',
            materia:'Programacion Computacional IV',
            Nombre: 'Cristobal Josue Torres Hernandez',
            x:0,
            y:0,
            message:'',
            fontSize:10
        }
    },
    methods:{
        getXY(){
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        mouseOver(){
            this.message="IN"
        },
        mouseOut(){
            this.message="OUT"
        },
        
        key(event){
            console.log(event.keyCode);
        }
          
        

    },
    computed:{
        styleE(){
            return{
                textDecoration:'underline',
                textWeight:'bold'
            }
        }
        
    }
}
</script>
