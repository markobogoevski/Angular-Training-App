import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list-component';
import { StarComponent } from './shared/star.component';
import { WhitespaceTransformer } from './shared/replace-char-with-whitespace.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    WhitespaceTransformer
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
