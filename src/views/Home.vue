<template>
  <div class="home">
    <div class="title">
      My todolist
      <div v-if="countStr>0" class="count">{{countStr}}</div>
    </div>
    <TodoList ref="todoSon" @numValue="updateCount" />
    <div class="statistics">
      <div class="yes">已完成 {{yesCount}}</div>
      <div class="btn">
        <button type="button" class="btn-empty" @click="delAll">清空</button>
      </div>
      <div class="no">未完成 {{noCount}}</div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
export default {
  name: "home",
  data() {
    return {
      yesCount: 0,
      noCount: 0,
      countStr: 0
    };
  },
  components: {
    TodoList
  },
  created: function() {
    let yesCount = 0,
      noCount = 0,
      countStr = 0,
      arrList = [];
    if (localStorage.getItem("vue-todolist") != null) {
      arrList = JSON.parse(localStorage.getItem("vue-todolist"));
      countStr = arrList.length;
      yesCount = arrList.filter(function(value) {
        if (value.completed) {
          return value;
        }
      }).length;
      noCount = arrList.filter(function(value) {
        if (!value.completed) {
          return value;
        }
      }).length;
      this.countStr = countStr;
      this.yesCount = yesCount;
      this.noCount = noCount;
    }
  },
  methods: {
    delAll: function() {
      localStorage.clear();
      this.$refs.todoSon.updateChange(); //在子组件的 TodoList方法上面定义 ref，这样就可以获取到子组件的参数和方法
    },
    updateCount: function(arr) {
      let yesCount = 0,
        noCount = 0,
        countStr = 0;
      countStr = arr.length;
      yesCount = arr.filter(function(value) {
        if (value.completed) {
          return value;
        }
      }).length;
      noCount = arr.filter(function(value) {
        if (!value.completed) {
          return value;
        }
      }).length;
      this.countStr = countStr;
      this.yesCount = yesCount;
      this.noCount = noCount;
    }
  }
};
</script>
<style scoped>
.home {
  border: 1px solid #ccc;
  border-radius: 0.2rem;
}
.title {
  color: #fff;
  background-color: #007bff !important;
  border-radius: 0.2rem 0.2rem 0 0;
  padding: 0.35rem;
  font-size: 0.4rem;
  font-weight: bold;
  position: relative;
}
.statistics {
  background-color: #eee !important;
  border-radius: 0 0 0.2rem 0.2rem;
  padding: 0.13rem 0.35rem;
  font-size: 0.4rem;
  position: relative;
}
.btn {
  text-align: center;
}
.btn-empty {
  background: #dc3545;
  border: none;
  color: #fff;
  border-radius: 0.05rem;
  font-size: 0.18rem;
  padding: 0.1rem 0.5rem;
}
.yes,
.no {
  position: absolute;
  font-size: 0.24rem;
}
.count {
  position: absolute;
  right: 0.3rem;
  top: 0.4rem;
}
.yes {
  left: 0.1rem;
  top: 0.25rem;
}
.no {
  right: 0.1rem;
  top: 0.25rem;
}
</style>
