
var TodoItem=function(name) {
  this.id=0;
  this.name="";
  this.
};

var TodoList=function(name) {
  this.id=0;
  this.name=name;
  this.items=[];
  this.item_id=0;

  this.add=function(item) {
    this.items.append(item);
    this.item_id+=1;
    item.id=this.item_id;
    return item.id;
  };
  
  this.get=function(id) {
    for(var i=0;i<this.items.length;i++) {
      
    }
  };

  this.remove=function(id) {
    this.get(id);
  };
}
