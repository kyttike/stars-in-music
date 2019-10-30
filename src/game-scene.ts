import { computedFrom } from "aurelia-framework";

export class GameScene {
  lyrics: LyricButton[] = [
    new LyricButton('hello'),
    new LyricButton('from'),
    new LyricButton('the'),
    new LyricButton('other'),
    new LyricButton('side,'),
    new LyricButton('I'),
  ];

  constructor() {
    const randomizedList = this.lyrics.slice(0).sort(() => 0.5 - Math.random());
    randomizedList[0].isSafe = false;
    randomizedList[1].isSafe = false;
  }


}

export class LyricButton {
  isRevealed = false;
  isSafe = true;
  lyric: string;

  constructor(lyric: string) {
    this.lyric = lyric;
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