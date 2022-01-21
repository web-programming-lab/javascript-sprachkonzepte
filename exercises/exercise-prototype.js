const user = {
  doSth() {
    if (!this.isPausing) {
      console.log('I am doing sth.');
    }
  },
  pause() {
    this.isPausing = true;
  },
};
const admin = {
  name: 'Admin User',
  __proto__: user,
};
admin.pause();
console.log(admin.isPausing); //? Wieso?
console.log(user.isPausing); //? Wieso?
