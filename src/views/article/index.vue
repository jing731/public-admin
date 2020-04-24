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
    <el-radio-group v-model="status">
      <!-- el-radio 默认把 label 作为文本和选中之后的 value 值 -->
      <el-radio :label="null">全部</el-radio>
      <el-radio :label="0">草稿</el-radio>
      <el-radio :label="1">待审核</el-radio>
      <el-radio :label="2">审核通过</el-radio>
      <el-radio :label="3">审核失败</el-radio>
      <el-radio :label="4">已删除</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="频道">
    <el-select v-model="channelId" placeholder="请选择">
      <!-- <el-option label="开发者咨询" value="shanghai"></el-option>
      <el-option label="iOS" value="beijing"></el-option>
      <el-option label="c++" value="beijing"></el-option>
      <el-option label="android" value="beijing"></el-option>
      <el-option label="css" value="beijing"></el-option>
      <el-option label="数据库" value="beijing"></el-option> -->
      <el-option
        label='全部'
        :value="null"
      ></el-option>
      <el-option
        :label='channel.name'
        :value="channel.id"
        v-for="(channel, index) in channels" :key="index"
      ></el-option>
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
    <el-button type="primary" @click="loadArticles(1)">立即创建</el-button>
  </el-form-item>
  <!-- 表单 -->
</el-form>
</el-card>
<el-card class="box">
  <div slot="header" class="clearfix">
根据筛选条件共查询到 {{ totalCount }} 条结果：
  </div>
  <!-- <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div> -->
   <el-table
      :data="articles"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="封面">
        <template slot-scope="scope">
          <!-- 注意：需要绑定src -->
          <img
           v-if="scope.row.cover.images[0]"
          class="article-cover"
          :src="scope.row.cover.images[0]" alt="">
          <!-- 注意：为了更好的交互，一般没有上传图片
          的情况下，会默认给一个图片
          逻辑为：如果没有图片则使用默认的图片，但是不能用 ||
          因为 || 是在运行期间动态改变处理的
          而本地图片必须在打包的时候就存在
          所以应该添加两个img 分别判断-->
          <!-- 注意：不需要绑定src 就是本地的图片 -->
          <img
          v-else class="article-cover" src="./no-cover.gif" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
       <el-table-column
        prop="status"
        label="状态">
        <template slot-scope="scope">
        <el-tag :type='articleStatus[scope.row.status].type'>{{ articleStatus[scope.row.status].text }}</el-tag>
        <!-- <el-tag v-if="scope.row.status === 0" type='warning'>草稿</el-tag>
        <el-tag v-else-if="scope.row.status === 1">待审核</el-tag>
        <el-tag v-else-if="scope.row.status === 2" type='success'>审核通过</el-tag>
        <el-tag v-else-if="scope.row.status === 3" type='danger'>审核时效</el-tag>
        <el-tag v-else-if="scope.row.status === 4" type='info'>已删除</el-tag> -->
        </template>
      </el-table-column>
       <el-table-column
        prop="pubdate"
        label="发布时间">
      </el-table-column>
      <el-table-column
        label="操作">
         <template>
        <el-button
          size="mini"
          circle
          icon="el-icon-edit"
          type='primary'
          ></el-button>
        <el-button
          size="mini"
          type="danger"
          circle
          icon="el-icon-delete"></el-button>
      </template>
      </el-table-column>
    </el-table>
       <!-- 分页 -->
       <!-- current-change 当前页 -->
<el-pagination
    layout="prev, pager, next"
    :total="totalCount"
    background
    @current-change = 'onCurrentChange'
    :page-size = 'pageSize'
    >
  </el-pagination>
</el-card>
  </div>
</template>
<script>
import { getArticles, getArticlesChannels } from '@/api/article'
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
      tableData: [],
      articles: [], // 文章数据列表
      articleStatus: [
        { status: 0, text: '草稿', type: 'info' },
        { status: 1, text: '待审核', type: '' },
        { status: 2, text: '审核通过', type: 'success' },
        { status: 3, text: '审核失败', type: 'warning' },
        { status: 4, text: '已删除', type: 'danger' }
      ],
      totalCount: 0,
      pageSize: 20,
      status: null,
      channels: [],
      channelId: null
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadArticles(1)
    this.loadChannels()
  },
  mounted () {

  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    loadArticles (page = 1) {
      getArticles({
        // 传到后台 改变的参数
        page,
        per_page: this.pageSize,
        status: this.status,
        channel_id: this.channelId
      }).then(res => {
        // this.articles = res.data.data.results
        const { results, total_count: totalCount } = res.data.data
        this.articles = results
        this.totalCount = totalCount
      })
    },
    // 事件触发的页数  当前页
    onCurrentChange (page) {
      // console.log(page)
      this.loadArticles(page)
    },
    loadChannels () {
      getArticlesChannels().then(res => {
        console.log(res)
        this.channels = res.data.data.channels
      })
    }
    // loadChannels () {
    //   getArticleChannels().then(res => {
    //     console.log(res)
    //     // this.channels = res.data.data.channels
    //   })
    // }
  }
}
</script>
<style scoped lang="less">
.box{
  margin-top: 15px;
}
.article-cover{
  width: 80px;
  height: 80px;
}
</style>
