<template>
    <div id="root">
        <ul v-for="(item, index) in cartItems" v-bind:key="index">
            <li>{{item.productName}} {{item.quantity}}</li>
        </ul>   

    </div>
</template>

<script>
export default{
    name:'CartItems',
    props:['cartItems', 'itemCount'],
    methods:{

    }
}
</script>