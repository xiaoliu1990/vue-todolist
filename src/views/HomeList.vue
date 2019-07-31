<template>
  <div class="home">
    <div class="title">
      My todolist
      <div v-if="valCount>0" class="count">{{valCount}}</div>
    </div>
    <div class="todolist">
      <FormModule
        @addTodo="addTodo"
      />
      <List
        @updateTodoList="updateTodoList"
        @delTodoList="delTodoList"
        :todoList="todoList"
      />
    </div>
    <Empty
      @delAllList="delAllList"
      :yesCount="yesCount"
      :noCount="noCount"  
    />
  </div>
</template>

<script>
import FormModule from "@/components/FormModule.vue";
import List from "@/components/List.vue";
import Empty from "@/components/Empty.vue";
export default {
  name: "home",
  data() {
    return {
      todoList:[],
      valCount: 0,
      yesCount: 0,
      noCount: 0
    };
  },
  components: {
    FormModule,
    List,
    Empty
  },
  created: function() {
    let todoList = [];
    if (localStorage.getItem("vuelist-todolist") != null) {
      todoList = JSON.parse(localStorage.getItem("vuelist-todolist"));
      this.todoList=todoList;
      this.updateCount(todoList);
    }
  },
  methods: {
    addTodo: function(inputTxt) {
      let nameStr = inputTxt[0], dateStr = inputTxt[1], todoList = this.todoList;
      if (nameStr != "") {
        if (dateStr == "") {
          let myDate = new Date();
          dateStr = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate();
        };
        todoList.push({
          title: nameStr,
          date: dateStr,
          completed: false
        });
        this.todoList=todoList;
        this.updateCount(todoList);
      }
    },
    delAllList:function(todoList){
      this.updateCount(todoList);
      this.todoList=todoList;
      localStorage.clear();
    },
    updateTodoList:function(todoList){
      this.updateCount(todoList);
    },
    delTodoList:function(todoList){
      this.updateCount(todoList);
    },
    updateCount:function(todoList){
      let yesCount=0, noCount=0, valCount=0;
      valCount = todoList.length;
      yesCount = todoList.filter(function(value) {
        if (value.completed) {
          return value;
        }
      }).length;
      noCount = todoList.filter(function(value) {
        if (!value.completed) {
          return value;
        }
      }).length;
      this.valCount = valCount;
      this.yesCount = yesCount;
      this.noCount = noCount;
      localStorage.setItem("vuelist-todolist", JSON.stringify(todoList));
    }
  }
};
</script>
<style scoped>
.home{border:1px solid #ccc;border-radius:0.2rem;}
.title{color:#fff;background-color:#007bff!important;border-radius:0.2rem 0.2rem 0 0;padding:0.35rem;font-size:0.4rem;font-weight:bold;position:relative;}
.count{position:absolute;right:0.3rem;top:0.4rem;}
.todolist{padding:0.35rem;}
</style>
