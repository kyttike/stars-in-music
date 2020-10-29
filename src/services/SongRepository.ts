export class SongRepository {

  songs: {
    [key: number]: GameSong,
  };

  constructor() {
    this.songs = {};
    this.createSongs(defaultSongs);
  }

  getSongList(): GameIdentifier[] {
    return Object.values(this.songs).map(e => e.identifier);
  }

  getSong(id: number): GameSong {
    let result: GameSong = this.songs[id];
    if (!result) return this.songs[0];
    return this.songs[id];
  }

  createSongs(songs: GameSong[]) {
    songs.map(song => {
      song.identifier.id = Object.keys(this.songs).length;
      this.songs[song.identifier.id] = song;
    })
  }
}

export interface GameSong {
  identifier: GameIdentifier;
  lyrics: string[];
  types: boolean[];
}

export interface GameIdentifier {
  id: number;
  title: string;
}

const defaultSongs: GameSong[] = [
  {
    identifier: {
      id: null,
      title: 'Tutorial'
    },
    lyrics: 'right music getting in the swing'.split(' '),
    types: [false, false, true, false, true, false],
  },
  {
    identifier: {
      id: null,
      title: 'Vastasseis 1'
    },
    lyrics: 'veel sulle tahan hüüda juba veel'.split(' '),
    types: [false, false, true, false, false, true],
  },
  {
    identifier: {
      id: null,
      title: 'Vastasseis 2'
    },
    lyrics: 'the first time and this time'.split(' '),
    types: [true, false, false, true, false, false],
  },
  {
    identifier: {
      id: null,
      title: 'Vastasseis 3'
    },
    lyrics: 'kaua samad näod käes on aeg'.split(' '),
    types: [true, false, false, false, false, true],
  },
  {
    identifier: {
      id: null,
      title: 'Kaklus 1'
    },
    lyrics: 'peita püüab ta mu pisarad siis'.split(' '),
    types: [false, false, false, true, false, true],
  },
  {
    identifier: {
      id: null,
      title: 'Kaklus 2'
    },
    lyrics: 'vibes why don’t you kill me'.split(' '),
    types: [false, false, false, true, true, false],
  },
  {
    identifier: {
      id: null,
      title: 'Kaklus 3'
    },
    lyrics: 'See on rohkem veel kui sõna'.split(' '),
    types: [true, true, false, false, false, false],
  },
  {
    identifier: {
      id: null,
      title: 'Finale 1'
    },
    lyrics: 'siis ma tean kuhu järele tulla'.split(' '),
    types: [false, false, true, false, false, true],
  },
  {
    identifier: {
      id: null,
      title: 'Finale 2'
    },
    lyrics: 'sleep tonight and you singing the'.split(' '),
    types: [false, false, true, false, false, true],
  },
  {
    identifier: {
      id: null,
      title: 'Finale 3'
    },
    lyrics: 'on tilluke kuid ta on armas'.split(' '),
    types: [true, false, false, false, true, false],
  },
  {
    identifier: {
      id: null,
      title: 'Finale 4'
    },
    lyrics: 'pole öö ei ole silm nagu'.split(' '),
    types: [false, false, true, true, false, false],
  },
  {
    identifier: {
      id: null,
      title: 'Finale 5'
    },
    lyrics: 'mis on sinu nimi mina olen'.split(' '),
    types: [false, true, false, false, true, false],
  },
  {
    identifier: {
      id: null,
      title: '2019 Tutorial',
    },
    lyrics: ['phone', 'late', 'night', 'when', 'you', 'need'],
    types: [false, false, false, true, true, false],
  },
  {
    identifier: {
      id: null,
      title: '2019 Laul 1',
    },
    lyrics: ['meeldib', 'mulle', 'sinu', 'kaelakee', 'ja', 'su'],
    types: [false, false, false, false, true, true],
  },
  {
    identifier: {
      id: null,
      title: '2019 Laul 2',
    },
    lyrics: ['heart', 'got', 'lost', 'in', 'the', 'game'],
    types: [false, false, false, true, true, false],
  },
  {
    identifier: {
      id: null,
      title: '2019 Laul 3',
    },
    lyrics: ['ei', 'hooli', 'on', 'hetki', 'mida', 'võime'],
    types: [true, false, true, false, false, false],
  },
  {
    identifier: {
      id: null,
      title: '2019 Laul 4',
    },
    lyrics: ['speed', 'of', 'light', 'i', 'wanna', 'make'],
    types: [false, true, false, true, false, false],
  },
  {
    identifier: {
      id: null,
      title: '2019 Laul 5',
    },
    lyrics: ['keda', 'ootate', 'on', 'see', 'me', 'unistus'],
    types: [false, false, true, false, true, false],
  },
  {
    identifier: {
      id: null,
      title: '2019 Varu 1',
    },
    lyrics: ['südame', 'ma', 'kaotada', 'võin', 'nüüd', 'vist'],
    types: [false, true, false, true, false, false],
  },
  {
    identifier: {
      id: null,
      title: '2019 Varu 2',
    },
    lyrics: ['kui', 'viin', 'mida', 'lootsin', 'leida', 'eest'],
    types: [true, false, true, false, false, false],
  },
];
