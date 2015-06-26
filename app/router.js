import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('edit', function(){});
    this.route('show', {path: ':post_id'});
    this.route('new');
  });
});

export default Router;
