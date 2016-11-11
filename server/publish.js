Meteor.publish('recipes', function(){
  return Recipes.find({author: this.userId}); //Current user's recipies only avaliable
})
