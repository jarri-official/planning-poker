import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { IconModule } from '@shared/icon/icon.module';

import { CardContainerComponent } from './card-container/card-container.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardSymbolComponent } from './card-symbol/card-symbol.component';
import { CardComponent } from './card/card.component';

const COMPONENTS: Type<any>[] = [
  CardComponent,
  CardItemComponent,
  CardContainerComponent,
  CardSymbolComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CardModule {
}
