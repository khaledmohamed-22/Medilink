<template>
  <div>
    <FormData></FormData>
  </div>
</template>
<script>
import FormData from "@/components/FormData.vue";
export default {
  components: {
    FormData,
  },
};
</script>
<style scoped>
div {
  min-height: 100vh;

  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e0f7fa, #ffffff);
  padding: 40px;
}
</style>
