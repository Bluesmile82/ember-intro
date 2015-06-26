import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('post');
  },
  // para evitar que el modelo sin salvar se añada a la lista destruimos el modelo temporal
  deactivate: function(){
    const model = this.get('controller.model');
    if(model.get('isDirty')){
     model.destroyRecord();
    }
  }
});
