<template>
  <div class="formModule">
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
          <button type="button" class="btn btn-success" @click="addTodoItem">增加 todolist</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"formModule",
  data(){
    return{
      nameStr:"",
      dateStr:""
    }
  },
  methods:{
    addTodoItem:function(){
      var nameStr=this.nameStr, dateStr=this.dateStr;
      this.$emit("addTodo", [nameStr, dateStr]);
      this.nameStr = "";
      this.dateStr = "";
    }
  }
}
</script>
<style scoped>
*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
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
</style>
