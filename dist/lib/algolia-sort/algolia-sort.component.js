var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
export let AlgoliaSortComponent = class AlgoliaSortComponent {
    constructor() {
        this.indices = [];
        this.label = '';
    }
    ngOnInit() {
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], AlgoliaSortComponent.prototype, "indices", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], AlgoliaSortComponent.prototype, "label", void 0);
AlgoliaSortComponent = __decorate([
    Component({
        selector: 'app-algolia-sort',
        // templateUrl: './algolia-sort.component.html',
        // styleUrls: ['./algolia-sort.component.css']
        template: `
  <div>
  <select>
    <option *ngFor="let indice of indices" [value]="indice.value">
      {{indice.label}}
    </option>
  </select>
  </div>
  `
    }), 
    __metadata('design:paramtypes', [])
], AlgoliaSortComponent);
//# sourceMappingURL=/Users/olivier/lab/algolia/algolia-components/lib/algolia-sort/algolia-sort.component.js.map