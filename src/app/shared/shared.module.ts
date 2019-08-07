import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { WhitespaceTransformer } from './replace-char-with-whitespace.pipe';

@NgModule({
  declarations: [
    StarComponent,
    WhitespaceTransformer
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarComponent,
    CommonModule,
    FormsModule,
    WhitespaceTransformer
  ]
})
export class SharedModule { }
