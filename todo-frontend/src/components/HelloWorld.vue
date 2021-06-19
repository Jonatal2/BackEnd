<template>
  <div>
    <h1>Selamat Datang</h1>
    <ul>
      <li v-for="item in todos">{{ item.desc }}</li>
    </ul>
    <input v-model="myText" /><button @click="tambah">Add</button>
  </div>
</template>

<script>

 export default{
   data: function(){
     return {
       todos: [
         { desc: 'Makan Pisang'},
         { desc: 'Makan Sayur'},
         { desc: 'Belajar JS'},
       ],
       myText: ''
     }
   },
   methods: {
     tambah: function(){
       this.todos.push({ desc: this.myText})

     }
   }
 }

</script>

