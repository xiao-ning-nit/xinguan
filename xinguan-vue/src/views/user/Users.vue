<template>
    <div>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/" style="padding-left:10px;padding-bottom:10px;font-size:12px;">
            <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 用户列表卡片 -->
        <el-card class="box-card">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="用户名" label-width="70px">
                    <el-input clearable v-model="formInline.user" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" label-width="70px">
                    <el-input clearable v-model="formInline.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="性别" label-width="70px">
                  <el-radio v-model="formInline.radio" label="1">男</el-radio>
                  <el-radio v-model="formInline.radio" label="2">女</el-radio>
                  <el-radio v-model="formInline.radio" label="3">全部</el-radio>
                </el-form-item>
                <el-form-item label="昵称" label-width="70px">
                    <el-input clearable v-model="formInline.nikeName" placeholder="请输入昵称"></el-input>
                </el-form-item>
                <el-form-item style="margin-left: 10px">
                  <el-button type="primary" icon="el-icon-search">查询</el-button>
                  <el-button type="success" icon="el-icon-plus">添加</el-button>
                </el-form-item>
            </el-form>
            <!-- 表格内容显示区域 -->
              <el-table
                :data="tableData"
                border
                style="width: 100%;height: 400px;">
                <el-table-column
                  prop="date"
                  label="日期">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名">
                </el-table-column>
                <el-table-column
                  prop="sex"
                  label="性别">
                </el-table-column>               
                <el-table-column
                  prop="email"
                  label="邮箱">
                </el-table-column>
                <el-table-column
                  prop="nikeName"
                  label="昵称">
                </el-table-column>
              </el-table>



              <el-pagination
                style="padding-top: 15px"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="40">
              </el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'Users',
    data() {
      return {
        formInline: {
          user: '',
          email: '',
          city: '',
          radio: '1',
          nikeName: '',
        },
        currentPage4: 4,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          sex: '男',
          email: '3132122342@qq.com',
          nikeName: 'xx'
        }, {
          date: '2017-05-04',
          name: '丽丽',
          sex: '女',
          email: '12342342@qq.com',
          nikeName: 'xx'
        }, {
          date: '2018-05-01',
          name: '小明',
          sex:'男',
          email: '343423422@qq.com',
          nikeName: 'xx'
        }, {
          date: '2019-05-03',
          name: '小红',
          sex:'女',
          email: '4342342233@qq.com',
          nikeName: 'hh'
        }],
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    }
}
</script>

<style>

</style>
