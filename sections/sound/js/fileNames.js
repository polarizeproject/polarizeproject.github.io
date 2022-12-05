const xoNames = ['Edward Elgar - Sea Pictures, Op. 37: 1. Sea Slumber-Song', 'Claude Debussy - L. 109: 1. De l’aube à midi sur la mer', 'Frank Bridge - The Sea: No. 1 Seascape'];

const ratatatNames = ['Vaughan Williams - A Sea Symphony: I', 'Johann Strauss II - The Blue Danube Waltz ', 'Maurice Ravel - Miroirs, M. 43: III. Une barque sur l’océan'];

const xo2Names = ['Igor Stravinsky - The Flood Prelude', 'Arnold Schönberg - At the Beach', 'John Cage - Water Walk (Water Music No. 2)'];

const ratatat2Names = ['Ludovico Einaudi - Elegy for the Arctic', 'Arnold Edward Trevor Bax - Tintagel', 'Benjamin Britten - Four Sea Interludes, Op. 33a: I. Dawn'];

const setNames = function(album, songList) {
  for (let i = 0; i < album.length; i++) {
    album[i].file = songList[i];
  }
};
