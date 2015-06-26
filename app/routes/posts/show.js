import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    const postId = params.post_id;
    return this.store.findById('post', postId);
  }
});
