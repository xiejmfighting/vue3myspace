<template>
    <Content>
      404
    </Content>
    </template>
    
    <script>
    import Content from '../components/Content';
    //每一个vue都会导出一个对象
    export default {
      name: 'NotFound',
      components: {//表示template中用到的所有组件都放在components中
       Content,
      }
    }
    </script>
    
    <style scoped>
    
    </style>