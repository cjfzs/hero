import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '托儿所' },
      { id: 2, name: '儿童劫' },
      { id: 3, name: '快乐迪' },
      { id: 4, name: '侍者亮' },
      { id: 5, name: '俊狗' },
      { id: 6, name: '黑皮' },
      { id: 7, name: '灰鳖' },
      { id: 8, name: '剑圣' },
      { id: 9, name: '路比' },
      { id: 10, name: '时辰' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}