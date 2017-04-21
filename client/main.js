import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import './main.html';

Template.box.onCreated(function word(){
  this.meaning = new ReactiveVar();
});

Template.box.helpers({
  meaning() {
    var txt= $(".inputBox").val();
      return Template.instance().meaning.get();
  },
});

Template.box.events({
  'click .translate': function(event , instance){
    var txt = $(".inputBox").val();
   return instance.meaning.set(Gurmukhi.find({"word" :txt}));
    	if(txt == ""){
      console.log("Kuch ta likho ji");
    }else{
      console.log(txt);
    }

  }
});
