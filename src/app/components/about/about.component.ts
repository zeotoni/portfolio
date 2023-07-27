import { DownloadCurriculumService } from './downloadCurriculum.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private downloadCurriculumService: DownloadCurriculumService) {}

  download() {
    this.downloadCurriculumService.downloadFile('https://drive.google.com/file/d/1i2D-RLOqLB7sbT2mn9Tf1yy2Z0jpr71H/view?usp=drive_link', 'Ezequiel-Otoni-Currículo')
  }
}
