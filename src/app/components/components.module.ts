import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from "./projects/projects.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent
  ]
})
export class ComponentsModule {}
