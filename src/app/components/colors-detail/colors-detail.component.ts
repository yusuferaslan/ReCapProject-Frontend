import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors-detail',
  templateUrl: './colors-detail.component.html',
  styleUrls: ['./colors-detail.component.css']
})
export class ColorsDetailComponent implements OnInit {
  colors: Color[] = [];

  constructor(private colorService: ColorService, private router: Router) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
