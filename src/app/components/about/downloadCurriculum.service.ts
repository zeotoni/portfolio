import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';



@Injectable({
  providedIn: 'root'
})
export class DownloadCurriculumService {

  constructor(private httpClient: HttpClient){}

  downloadFile(url: string, fileName: string): void {
    this.httpClient.get(url, { responseType: 'blob'}).subscribe((data) => {
      saveAs(data, fileName)
    })
  }
}
