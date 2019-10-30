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
      {
        route: ['welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: true,
        title: 'Welcome'
      },
      {
        route: 'users',
        name: 'users',
        moduleId: PLATFORM.moduleName('./users'),
        nav: true,
        title: 'Github Users'
      },
      {
        route: 'child-router',
        name: 'child-router',
        moduleId: PLATFORM.moduleName('./child-router'),
        nav: true,
        title: 'Child Router'
      }
    ]);

    this.router = router;
  }
}
