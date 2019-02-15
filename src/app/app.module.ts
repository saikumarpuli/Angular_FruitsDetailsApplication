import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { FruitsDetailsComponent } from './fruits-details/fruits-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FruitsComponent,
    StudentComponent,
    FruitsDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
