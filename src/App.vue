<template>
    <div id="app">
      <div>
        <el-input placeholder="Please input" v-model="input"></el-input>
        <el-button @click="startHacking">Start</el-button>
  
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="pk" label="Primary-Key" width="180"></el-table-column>
          <el-table-column prop="name" label="Nome" width="180"></el-table-column>
          <el-table-column prop="course" label="Course" width="180"></el-table-column>
          <el-table-column prop="status" label="Status" width="180"></el-table-column>
        </el-table>
      </div>
    </div>
  </template>

<script>
    const axios = require('axios')

    export default {
        data() {
            return {
                input: "",
                tableData: []
            }
        },
        mounted() {
            let self = this 
            axios
                .get('/gt/api/student/')
                .then(response => {
                    console.log(response)
                    self.tableData = response.data["results"]
                })
        },
        methods: {
            startHacking() {
                this.$notify({
                    title: "It works!",
                    type: "success",
                    message: "We've laid the ground work for you. It's time for you to build something epic!",
                    duration: 5000
                });
                console.log(this.input)
            }
        }
    };
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
</style>