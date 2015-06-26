import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    savePost: function(){
      const post = this.get('model');
      post.save().then((savedPost) => {
        this.transitionToRoute('posts.show', savedPost);
      });
    }
  }
});
