import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { FruitsDeailsComponent } from './fruits-deails/fruits-deails.component'; // <-- NgModel lives here

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FruitsComponent,
    StudentComponent,
    FruitsDeailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
