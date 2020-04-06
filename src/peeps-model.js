"use strict";
class Peeps{
  constructor(peep, id){
    this.peep = peep;
    this.id = peep.id;
  }

// (function(exports) {
//
//   function Peep(peep) {
//     this.peep = peep;
//     this.id = peep.id;
//   };

  Peep() {
    return this.peep.body;
  }
//   exports.Peep = Peep;
// })(this);
