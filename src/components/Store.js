const Store_Key = 'todos-vue';
export default {
  fetch() {
    return JSON.parse(window.localStorage.getItem(Store_Key) || '[]');
  },
  save(items) {
    window.localStorage.setItem(Store_Key, JSON.stringify(items));
  }
};
