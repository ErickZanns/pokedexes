// Suggested code may be subject to a license. Learn more: ~LicenseLog:4064904097.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// ... otros imports

@NgModule({
  declarations: [
    // ... tus componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // ... otros módulos
  ],
  providers: [],
  bootstrap: [/* Componente principal */]
})
export class AppModule { }
