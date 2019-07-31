<template>
  <div class="list">
    <ul class="form-list" v-if="todoList.length>0">
      <li v-for="(item,index) in todoList">
        {{item.title}}--{{item.date}}
        <button v-if="item.completed" class="btn-yes" @click="complet(index)">已完成</button>
        <button v-else class="btn-no" @click="complet(index)">未完成</button>
        <button type="button" class="btn-del" @click="del(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"list",
  props:{
    todoList:Array
  },
  methods:{
    complet : function(index) {
      let todoList = this.todoList;
      todoList[index].completed = !todoList[index].completed;
      this.$emit("updateTodoList", todoList);
    },
    del : function(index){
      let todoList = this.todoList;
      todoList.splice(index, 1);
      this.$emit("delTodoList", todoList);
    }
  }
}
</script>

<style scoped>
.form-list{border:1px solid #ccc;border-radius:0.05rem;padding:0rem;font-size:0.22rem;}
.form-list li{list-style-type:none;position:relative;clear:both;padding:0.1rem;border-bottom:1px solid #ccc;}
.form-list li:last-child{border-bottom:none;}
.btn-no{position:absolute;bottom:0.02rem;right:0.3rem;background:#ffc107;border:none;color:#fff;border-radius:0.05rem;font-size:0.18rem;padding:0.05rem;}
.btn-yes{position:absolute;bottom:0.02rem;right:0.3rem;background:#449d44;border:none;color:#fff;border-radius:0.05rem;font-size:0.18rem;padding:0.05rem;}
.btn-del{position:absolute;bottom:0.02rem;right:0.05rem;background:#dc3545;border:none;color:#fff;border-radius:0.05rem;font-size:0.18rem;padding:0.05rem;}
</style>
