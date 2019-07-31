<template>
  <div class="empty">
    <div class="yes">已完成 {{yesCount}}</div>
    <div class="btn">
      <button type="button" class="btn-empty" @click="delAll">清空</button>
    </div>
    <div class="no">未完成 {{noCount}}</div>
  </div>
</template>

<script>
export default {
  name:"empty",
  props:{
    yesCount: Number,
    noCount: Number
  },
  methods:{
    delAll:function(){
      this.$emit("delAllList",[]);
    }
  }
}
</script>

<style scoped>
.empty{background-color:#eee!important;border-radius:0 0 0.2rem 0.2rem;padding:0.13rem 0.35rem;font-size:0.4rem;position:relative;}
.btn{text-align:center;}
.btn-empty{background:#dc3545;border:none;color:#fff;border-radius:0.05rem;font-size:0.18rem;padding:0.1rem 0.5rem;}
.yes,.no{position:absolute;font-size:0.24rem;}
.yes{left:0.1rem;top:0.25rem;}
.no{right:0.1rem;top:0.25rem;}
</style>
