import { computedFrom, inject } from "aurelia-framework";
import {GameIdentifier, GameSong, SongRepository} from "./services/SongRepository";

@inject(SongRepository)
export class SongList {

  songList: GameIdentifier[] = [];

  constructor(private songService: SongRepository){}

  activate() {
    this.songList = this.songService.getSongList();
  }
}
