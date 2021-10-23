import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'menu'],
        name: 'menu',
        moduleId: PLATFORM.moduleName('./song-list'),
        nav: true,
        title: 'Menu'
      },
      {
        route: ['game/:id'],
        href: '#game',
        name: 'game',
        moduleId: PLATFORM.moduleName('./game-scene'),
        nav: true,
        title: 'Game'
      },
    ]);

    this.router = router;
  }
}
