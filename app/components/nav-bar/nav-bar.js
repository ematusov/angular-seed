'use strict';

// Necessary to do the [] here
angular.module('navBar', [])

.component('navBar', {
  bindings: {
    //This binding cannot have dashes or be camelCase
    tab: '@'
  },
  templateUrl: 'components/nav-bar/nav-bar.html',
  controller: [
    function NavBarController($log) {
      console.log("Nav Bar Controller Loaded!");
      this.isActiveTab = function(tabNum) {
        if (this.tab === tabNum) {
          return "active";
        } else {
          return "";
        }
      };

      }

  ]
});
