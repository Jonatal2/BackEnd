<template>
    <div>
        <h1>Selamat Datangs</h1>
        <ul>
            <nav v-for="(item,i) in baru" :key="item.id">{{i+1}} - {{item.dekripsi}}<button @click="hapus(item._id)"> x </nav>
        </ul>
        <br>
        <input v-model="my" placeholder="masukan teks"/>
        <button @click="tambah"> add </button>
    </div>
</template>

<script>
import axios from "axios"
const url = "htpp://localhost:3000/todo"
    export default {
        data:function() {
            return {
                baru:[],
                    my:'',
            }
        },
        async created() {
            try{
                const res = await axios.get(url);
                this.baru = res.data;
            }catch(e){
                console.log(e)
                }
        },
        methods: {
            async tambah(){
                const res = await axios.post(url,{dekripsi : this.my})
                this.baru.push(res,data)
                this.my = ''
            },
            async hapus(_id){
                await axios.delete(`http://localhost:3000/delete/${_id}`).then(()=>{
                    this.baru.splice(this.baru.indexOf(_id),1)
                })
            }
        },
    }
</script>