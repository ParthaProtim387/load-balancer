import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  processId: number | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ processId: number }>('/api/processid').subscribe(
      (data) => {
        this.processId = data.processId;
      },
      (error) => {
        console.error('Error fetching process ID:', error);
      }
    );
  }

  title = 'simple-app';
}

