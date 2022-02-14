import { AnimationComponent } from './components/animation/animation.component';
import { TableComponent } from './components/table/table.component';
import { BreakpointComponent } from './components/breakpoint/breakpoint.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PositionComponent } from './components/position/position.component';
import { CustomComponent } from './components/custom/custom.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'breakpoint', component: BreakpointComponent },
  { path: 'position', component: PositionComponent },
  { path: 'table', component: TableComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
