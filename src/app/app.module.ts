import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BreakpointComponent } from './components/breakpoint/breakpoint.component';
import { PositionComponent } from './components/position/position.component';
import { TableComponent } from './components/table/table.component';
import { AnimationComponent } from './components/animation/animation.component';
import { CustomComponent } from './components/custom/custom.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, LayoutComponent, BreakpointComponent, PositionComponent, TableComponent, AnimationComponent, CustomComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
