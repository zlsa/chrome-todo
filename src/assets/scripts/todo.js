
var TodoItem=function(name) {
  this.id=-1;
  this.name="";
  this.completed=false;
  
  this.save=function() {
    return {
      id:this.id,
      name:this.name,
      completed:this.completed
    };
  };

  this.restore=function(data) {
    this.id=data.id;
    this.name=data.name;
    this.completed=data.completed;
  }

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
      var item=this.items[i];
      if(item.id == id) {
        return [item,id];
      }
    }
    return null;
  };

  this.remove=function(id) {
    var item=this.get(id);
    if(!item) return;
    this.items.splice(item[1],1);
    item.id=-1;
  };

  this.save=function() {
    return {
      id:this.id,
      name:this.name,
      items:this.items,
      item_id:this.item_id,
    }
  };
  
  this.restore=function(data) {
    this.id=data.id;
    this.name=data.name;
    this.items=data.items;
    this.item_id=data.item_id;
  };
  
}
