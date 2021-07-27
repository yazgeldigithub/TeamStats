const team = {
    _players: [
      {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  },
    {
    firstName: 'Pablo2',
    lastName: 'Sanchez2',
    age: 12
  },
  {
    firstName: 'Pablo3',
    lastName: 'Sanchez3',
    age: 13
  },
    ],
    _games: [
      {
    opponent: 'Broncos',
    teamPoints: 41,
    opponentPoints: 21
  },
  {
    opponent: 'Broncos2',
    teamPoints: 42,
    opponentPoints: 22
  },
  {
    opponent: 'Broncos',
    teamPoints: 43,
    opponentPoints: 23
  },
    ],
  
    get players(){
      return this._players;
    },
    get games() {
      return this._games;
    },
  addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
    
      addGame(opp, myPts, oppPts) {
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this.games.push(game);
    }
  }
  team.addPlayer('Steph', 'Curry', '28');
    team.addPlayer('Lisa', 'Leslie', '44');
    team.addPlayer('Bugs', 'Bunny', '76');
  
  team.addGame('Sea Lions', 100, 50);
  team.addGame('Wolves', 56, 90);
  team.addGame('Tigers', 30, 47);
  
  console.log(team.games)