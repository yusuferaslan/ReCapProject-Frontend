import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-delete',
  templateUrl: './color-delete.component.html',
  styleUrls: ['./color-delete.component.css']
})
export class ColorDeleteComponent implements OnInit {
  colorDeleteForm: FormGroup = new FormGroup({});
  color: Color | null = null;
  colors: Color[] = [];
  colorId!: number;
  colorName: string | null = null;

  constructor(
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getColorById(params['colorId']);
      this.createColorForm();
    });
  }

  getColorById(colorId: number) {
    this.colorService.getColorById(colorId).subscribe((response) => {
      this.color = response.data;
      this.colorId = this.color.id;
      this.colorName = this.color.name;
    });
  }

  createColorForm() {
    this.colorDeleteForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  delete() {
    if (this.colorDeleteForm.valid) {
      let colorModel = Object.assign({}, this.colorDeleteForm.value);
      console.log(colorModel);
      this.colorService.delete(colorModel).subscribe(
        (response) => {
          this.toastrService.success('Renk silindi', 'Başarılı');
          this.backToColorList();
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'İşlem Başarısız'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat!');
    }
  }

  backToColorList() {
    this.router.navigate(['colors/list']);
  }
}
