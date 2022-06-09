import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OnlyFirstPipe } from "./pipes/only-first/only-first.pipe";

@NgModule({
  declarations: [AppComponent, OnlyFirstPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
