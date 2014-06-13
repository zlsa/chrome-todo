
var Storage={
  backend:localStorage,
  get:function(key,value) {
    if(key in this.backend)
      return JSON.parse(this.backend[key]);
    return value;
  },
  set:function(key,value) {
    this.backend[key]=JSON.stringify(value);
  }
};
