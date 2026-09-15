import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-card-project',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() image = '';
  @Input() alt = '';
  @Input() title = '';
  @Input() description = '';
  @Input() technologies: string[] = [];
  @Input() price = '';
  @Input() githubLink = '';
  @Input() deployLink = '';
}
