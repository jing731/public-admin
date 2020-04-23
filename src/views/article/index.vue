<template>
  <div class="artice-container">
      <el-card class="box-card">
  <div slot="header" class="clearfix">
        <!-- 面包写 -->
      <el-breadcrumb separator="/">
     <el-breadcrumb-item to='/'>首页</el-breadcrumb-item>
     <el-breadcrumb-item>活动管理</el-breadcrumb-item>
     </el-breadcrumb>
     <!-- 面包屑 -->
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
  <!-- <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div> -->
  <el-form ref="form" :model="form" label-width="40px" size="mini">
    <el-form-item label="状态">
    <el-radio-group v-model="form.resource">
      <el-radio label="全部"></el-radio>
      <el-radio label="草稿"></el-radio>
      <el-radio label="待审核"></el-radio>
      <el-radio label="审核通过"></el-radio>
      <el-radio label="审核失败"></el-radio>
      <el-radio label="已删除"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="频道">
    <el-select v-model="form.region" placeholder="请选择">
      <el-option label="开发者咨询" value="shanghai"></el-option>
      <el-option label="iOS" value="beijing"></el-option>
      <el-option label="c++" value="beijing"></el-option>
      <el-option label="android" value="beijing"></el-option>
      <el-option label="css" value="beijing"></el-option>
      <el-option label="数据库" value="beijing"></el-option>
      <el-option label="区块链" value="beijing"></el-option>
    </el-select>
  </el-form-item>
      <!-- 日期 -->
    <el-form-item label="日期">
        <el-date-picker
      v-model="form.date1"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00']">
    </el-date-picker>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
  <!-- 表单 -->
    <!-- 分页 -->
<el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</el-form>
</el-card>
<el-card class="box">
  <div slot="header" class="clearfix">
根据筛选条件共查询到 46147 条结果：
  </div>
  <!-- <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div> -->
   <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="封面"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="标题"
        width="180">
      </el-table-column>
       <el-table-column
        prop="name"
        label="状态"
        width="180">
      </el-table-column>
       <el-table-column
        prop="name"
        label="发布"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
</el-card>
  </div>
</template>
<script>
export default {
  name: 'ArticleIndex',
  components: {},
  props: {},
  data () {
    return {
      form: {
        region: '',
        resource: '',
        date1: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {},
  watch: {},
  created () {

  },
  mounted () {

  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style scoped lang="less">
.box{
  margin-top: 15px;
}
</style>
