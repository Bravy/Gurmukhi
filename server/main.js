import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });
  Api.addCollection(Gurmukhi);
  Api.addRoute('api/hnji/:text',{
    get: function () {
      var txt = this.urlParams.text; //
      return Gurmukhi.find({"word" :txt});
    }
  });
});
