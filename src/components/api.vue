<template>
  <div class="hello">
    <h1>这里是点击添加选项后的页面</h1>
    <h1>{{ msg }}</h1>
    <div id="app">
    <el-button @click="query" type="primary">查询</el-button>
    <el-button @click="add" type="success">增加</el-button>
    </div>
  </div>
</template>
<script>
  import store from'../store/index.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '开始点击....'
    };
  },
  methods: {
  query() {//查询按钮获取信息
  this.msg="点击查询结果："+this.$store.state.user+this.$store.state.text;//写在页面上的
  console.log("Helloworld页面中query点击之后"+this.msg+"收到否?");//控制台可以输出来的
  },
  add(){//添加按钮
  this.msg1=this.$store.state.user+this.$store.state.text;//写在页面上的
  this.$store.commit('add',this.textValue);
  console.log("点击添加之后的结果："+this.$store.state.user+this.$store.state.text);
  }
  },
  store,
  mounted(){
  console.log("Helloworld页面中 这里是mouted store的值："+store.state.test);
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
