import { computedFrom, inject } from "aurelia-framework";
import {GameSong, SongRepository} from "./services/SongRepository";

@inject(SongRepository)
export class GameScene {
  lyrics: LyricButton[];

  constructor(private songService: SongRepository) {}

  activate(params) {
    this.loadGame(this.songService.getSong(params.id));
  }

  loadGame(song: GameSong): void {
    this.lyrics = song.lyrics.map((lyric, index) => {
      return new LyricButton(lyric, !song.types[index])
    })
  }
}

export class LyricButton {
  isRevealed = false;
  isSafe = true;
  lyric: string;

  constructor(lyric: string, isSafe: boolean) {
    this.lyric = lyric;
    this.isSafe = isSafe;
  }

  onClick() {
    this.isRevealed = true;
  }

  @computedFrom('isSafe', 'isRevealed')
  get styleClass(): string {
    const result = [];
    if (this.isRevealed) {
      result.push('opened');
      result.push(this.isSafe ? 'btn-primary' : 'btn-dark');
    } else {
      result.push('unopened');
      result.push('btn-primary');
    }
    return result.join(' ');
  }
}
