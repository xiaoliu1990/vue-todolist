<template>
  <div class="todolist">
    <div class="form-row">
      <div class="col-7">
        <input type="text" v-model="nameStr" class="form-control" placeholder="todo title" />
      </div>
      <div class="col-5">
        <input type="date" v-model="dateStr" class="form-control" />
      </div>
    </div>
    <div class="form-row">
      <div class="col-12">
        <button type="button" class="btn btn-success" @click="addTodo">增加 todolist</button>
      </div>
    </div>
    <ul class="form-list" v-if="listTodo.length>0">
      <li v-for="(item,index) in listTodo">
        {{item.title}}--{{item.date}}
        <button
          v-if="item.completed"
          class="btn-yes"
          @click="complet(index)"
        >已完成</button>
        <button v-else class="btn-no" @click="complet(index)">未完成</button>
        <button type="button" class="btn-del" @click="del(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      listTodo: [],
      nameStr: "",
      dateStr: ""
    };
  },
  created: function() {
    let arrList = [];
    if (localStorage.getItem("vue-todolist") != null) {
      arrList = JSON.parse(localStorage.getItem("vue-todolist"));
    }
    this.listTodo = arrList;
  },
  methods: {
    addTodo: function() {
      let nameStr = this.nameStr,
        dateStr = this.dateStr,
        listTodo = this.listTodo;
      if (nameStr != "") {
        if (dateStr == "") {
          let myDate = new Date();
          dateStr =
            myDate.getFullYear() +
            "-" +
            (myDate.getMonth() + 1) +
            "-" +
            myDate.getDate();
        }
        listTodo.push({
          title: nameStr,
          date: dateStr,
          completed: false
        });
        localStorage.setItem("vue-todolist", JSON.stringify(listTodo));
        this.$emit("numValue", listTodo);
        this.nameStr = "";
        this.dateStr = "";
      }
    },
    complet: function(index) {
      let listTodo = this.listTodo;
      listTodo[index].completed = !listTodo[index].completed;
      this.listTodo = listTodo;
      this.$emit("numValue", listTodo);
      localStorage.setItem("vue-todolist", JSON.stringify(listTodo));
    },
    del: function(index) {
      let listTodo = this.listTodo;
      listTodo.splice(index, 1);
      this.$emit("numValue", listTodo);
      localStorage.setItem("vue-todolist", JSON.stringify(listTodo));
    },
    updateChange() {
      let arrList = [];
      if (localStorage.getItem("vue-todolist") != null) {
        arrList = JSON.parse(localStorage.getItem("vue-todolist"));
      }
      this.listTodo = arrList;
      this.$emit("numValue", arrList);
    }
  }
};
</script>
<style scoped>
*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
.todolist{padding:0.35rem;}
.form-row{margin-left:-0.2rem;margin-right:-0.2rem;}
.form-row:before,.form-row:after{content:"";display:table;clear:both;}
.col-5{width:41.66666667%;}
.col-7{width:58.33333333%;}
.col-12{width:100%;}
.col-5,.col-7,.col-12{float:left;position:relative;min-height:1px;padding-right:0.2rem;padding-left:0.2rem;}
.form-control{width:100%;display:block;padding:0.1rem 0rem;font-size:0.24rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0.05rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;}
.btn{margin-top:0.1rem;margin-bottom:0;font-weight:normal;text-align:center;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:0.12rem 0.24rem;font-size:0.28rem;line-height:1.42857143;border-radius:0.1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;width:100%;}
.btn.focus,.btn:active.focus,.btn.active.focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
.btn:hover,.btn.focus{color:#333;text-decoration:none;}
.btn.active{outline:0;background-image:none;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);}
.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c;}
.btn-success.focus{color:#fff;background-color:#449d44;border-color:#255625;}
.btn-success:hover{color:#fff;background-color:#449d44;border-color:#398439;}
.btn-success.active{color:#fff;background-color:#449d44;border-color:#398439;}
.btn-success:active:hover,.btn-success:active:focus,.btn-success:active.focus{color:#fff;background-color:#398439;border-color:#255625;}
.form-list{border:1px solid #ccc;border-radius:0.05rem;padding:0rem;font-size:0.22rem;}
.form-list li{list-style-type:none;position:relative;clear:both;padding:0.1rem;border-bottom:1px solid #ccc;}
.form-list li:last-child{border-bottom:none;}
.btn-no{position:absolute;bottom:0.02rem;right:0.3rem;background:#ffc107;border:none;color:#fff;border-radius:0.05rem;font-size:0.18rem;padding:0.05rem;}
.btn-yes{position:absolute;bottom:0.02rem;right:0.3rem;background:#449d44;border:none;color:#fff;border-radius:0.05rem;font-size:0.18rem;padding:0.05rem;}
.btn-del{position:absolute;bottom:0.02rem;right:0.05rem;background:#dc3545;border:none;color:#fff;border-radius:0.05rem;font-size:0.18rem;padding:0.05rem;}
</style>
