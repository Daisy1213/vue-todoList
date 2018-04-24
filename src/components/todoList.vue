<template>
   <div>
     <input type="text"/>
     <button>添加</button>
     <ul>
       <li v-for="item in todoItems">
         <input type="checkbox"/>{{item.text}}
       </li>
     </ul>
   </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      title: 'this is a todo list',
      todoItems: [{
        text: '吃饭',
        isFinished: false
      }, {
        text: '睡觉',
        isFinished: false
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
