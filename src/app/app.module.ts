import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component'; // <-- NgModel lives here

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FruitsComponent,
    StudentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
