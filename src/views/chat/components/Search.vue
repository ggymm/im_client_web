<template>
  <div class="search-container">
    <el-button icon="el-icon-plus" />
    <el-input
      v-model="searchContent"
      placeholder="搜索"
      prefix-icon="el-icon-search"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: ''
    }
  }
}
</script>
