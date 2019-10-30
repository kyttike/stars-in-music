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
      title: 'Tutorial',
    },
    lyrics: ['phone', 'late', 'night', 'when', 'you', 'need'],
    types: [false, false, false, true, true, false],
  },
  {
    identifier: {
      id: null,
      title: 'Laul 1',
    },
    lyrics: ['meeldib', 'mulle', 'sinu', 'kaelakee', 'ja', 'su'],
    types: [false, false, false, false, true, true],
  },
  {
    identifier: {
      id: null,
      title: 'Laul 2',
    },
    lyrics: ['heart', 'got', 'lost', 'in', 'the', 'game'],
    types: [false, false, false, true, true, false],
  },
  {
    identifier: {
      id: null,
      title: 'Laul 3',
    },
    lyrics: ['ei', 'hooli', 'on', 'hetki', 'mida', 'võime'],
    types: [true, false, true, false, false, false],
  },
  {
    identifier: {
      id: null,
      title: 'Laul 4',
    },
    lyrics: ['speed', 'of', 'light', 'i', 'wanna', 'make'],
    types: [false, true, false, true, false, false],
  },
  {
    identifier: {
      id: null,
      title: 'Laul 5',
    },
    lyrics: ['keda', 'ootate', 'on', 'see', 'me', 'unistus'],
    types: [false, false, true, false, true, false],
  },
  {
    identifier: {
      id: null,
      title: 'Varu 1',
    },
    lyrics: ['südame', 'ma', 'kaotada', 'võin', 'nüüd', 'vist'],
    types: [false, true, false, true, false, false],
  },
  {
    identifier: {
      id: null,
      title: 'Varu 2',
    },
    lyrics: ['kui', 'viin', 'mida', 'lootsin', 'leida', 'eest'],
    types: [true, false, true, false, false, false],
  },
];
