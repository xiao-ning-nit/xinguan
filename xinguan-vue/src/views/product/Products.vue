<template>
    <div>
        <el-breadcrumb separator="/" style="padding-left:10px;padding-bottom:10px;font-size:12px;">
            <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>作品管理</el-breadcrumb-item>
            <el-breadcrumb-item>作品一览</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <div class="product"> 
                <model-gltf
                :rotation="rotation"
                @on-load="onLoad"
                src="./static/models/gltf/Duck/yazi.gltf"></model-gltf>
                           
            </div>
            <div class="product">
                <model-gltf
                :rotation="rotation"
                @on-load="onLoad"
                src="./static/models/gltf/fangjian/cesuo.gltf"></model-gltf>                
              </div>           
            <div class="product">
                <model-gltf
                :rotation="rotation"
                @on-load="onLoad"
                src="./static/models/gltf/shuiping/shuiping.gltf"></model-gltf>                
              </div>
            <div class="product">
                <model-gltf
                title="海岛"
                :rotation="rotation"
                @on-load="onLoad"
                src="./static/models/gltf/yazi/yazi.gltf"></model-gltf>                
              </div>
        </el-card>
    </div>
</template>

<script>
import { ModelGltf } from 'vue-3d-model'
export default {
    components: {
      ModelGltf
    },
    data() {
      return {
        rotation: {
                x:  0,
                y:  0,
                z:  0
            },
      }
    },
    methods: {
      onLoad () {
          this.rotate();
      },
      rotate () {
          this.rotation.y += 0.01;
          requestAnimationFrame( this.rotate );
      }
    }
}
</script>

<style>
.box-card{
    width: 1240px;
    margin: auto;
}
.product{
    width: 550px;
    height: 500px;
    display: block;
    float: left;
    border: 10px solid #333;
    border-radius: 30px;
    margin: 10px;
}
</style>
