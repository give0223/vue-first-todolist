<template>
  <div>
    <h1>This is from child title</h1>
    <button @click="showMsg">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chmsg:'',
      sandmsg:['Get Child MSG-1','Get Child MSG-2','Get Child MSG-3'],
    };
  },
  methods:{
    showMsg(){
      let randomnum = Math.floor(Math.random()*this.sandmsg.length);
      this.$emit('show-msg',this.sandmsg[randomnum]);
    },
  },
};
</script>

<style>
</style>
