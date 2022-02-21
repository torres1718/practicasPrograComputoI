<template>
    <div>   
            <b-table striped hover :items="employees" :fields="fields"></b-table>

    </div>
</template>

<script>
import axios from 'axios'

export default{
    name:'Employee',
    data(){
        return{
           employees:[]
    }
},
created(){
    axios.get('https://api-crud-example.herokuapp.com/Employee/read')
    .then(response => {
        this.employees = response.data;
        console.log(response.data);
        
    })
    .catch(e => {
        this.error.push(e);
    })
}

}
</script>
