import { computedFrom, inject } from "aurelia-framework";
import {GameIdentifier, GameSong, SongRepository} from "./services/SongRepository";

@inject(SongRepository)
export class SongList {

  songList: GameIdentifier[] = [];
  encodedSongs: string = '';

  constructor(private songService: SongRepository){}

  activate() {
    this.songList = this.songService.getSongList();
    console.log(this.songList);
  }

  importantButton() {
    const result = JSON.parse(atob(this.encodedSongs));
    this.songList = result.map((x,i) => {
      return {
        identifier: {
          id: i,
          title: x.title,
        },
        lyrics: x.lyrics.map(lyric => lyric.text),
        types: x.lyrics.map(lyric => lyric.trap),
      }
    })
    this.songService.songs = {};
    this.songService.createSongs(result.map((x,i) => {
        return {
          identifier: {
            id: i,
            title: x.title,
          },
          lyrics: x.lyrics.map(lyric => lyric.text),
          types: x.lyrics.map(lyric => lyric.trap),
        }
      })
    );
    this.songList = this.songService.getSongList();
  }
}
