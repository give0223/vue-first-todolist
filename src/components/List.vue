<template>
  <div>
    <h1>{{title}}</h1>
    <div>
      <input v-model.trim="newItem" @keyup.enter="addItem" type="text" placeholder="do something...">
      <ul>
        <li v-for="(item,idx) in items" :key="idx" :class="{finished: item.isFinished}" @click="toggleFinish(item)">{{item.label}}</li>
      </ul>
    </div>
  </div>  
</template>

<script>
import Store from './Store.js';
export default {
  data() {
    return {
      title: 'This is Todo List Project',
      newItem: '',
      items: []
    };
  },
  methods: {
    toggleFinish(item) {
      item.isFinished = !item.isFinished;
    },
    addItem() {
      if (this.newItem == '') {
        return;
      } else {
        this.items.push({
          label: this.newItem,
          isFinished: false
        });
      }
      this.newItem = '';
    }
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
}
.finished {
  text-decoration: line-through red;
}
</style>
