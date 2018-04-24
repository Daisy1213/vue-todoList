<template>
  <div>
    <input type="text" v-model="todoItem" @keyup.enter="addItem"/>
    <button @click="addItem">添加</button>
    <ul>
      <li v-for="(item, index) in todoItems" class="todoItem">
        <input type="checkbox" :checked="item.isFinished" @click="completed(index)"/><span
        :class="item.isFinished ? 'completed': ''"><em>{{index + 1}}、</em>{{item.text}}</span>
      </li>
    </ul>
    <p>共{{todoItems.length}}个待办事项。{{computeCounts}}个已完成，{{todoItems.length - computeCounts}}个未完成</p>
  </div>
</template>

<script>
  export default {
    name: 'TodoList',
    data() {
      return {
        title: 'this is a todo list',
        todoItem: '',
        todoItems: [{
          text: '吃饭',
          isFinished: false
        }, {
          text: '睡觉',
          isFinished: false
        }]
      }
    },
    methods: {
      addItem() {
        this.todoItems.push({text: this.todoItem, isFinished: false});
        this.todoItem = ''
      },
      completed(index) {
        this.todoItems[index].isFinished = !this.todoItems[index].isFinished;
      }
    },
    computed: {
      computeCounts() {
        return this.todoItems.filter(item => item.isFinished).length;
      }
    }
  };
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

  .todoItem {
    display: block;
  }

  .completed {
    text-decoration: line-through;
  }
</style>
