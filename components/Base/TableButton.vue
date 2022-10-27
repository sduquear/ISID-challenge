<template>
  <el-button :type="type">
    {{ name }}
  </el-button>
</template>

<script>
export default {
  name: "TableButton",
  props: {
    type: String,
    name: String,
  },
};
</script>
