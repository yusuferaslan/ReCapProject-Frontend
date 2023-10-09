import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
  colorUpdateForm: FormGroup = new FormGroup({});
  color: Color | null = null;
  colorId!: number;
  colorName: string | null = null;

  constructor(
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
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
    this.colorUpdateForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  update() {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({}, this.colorUpdateForm.value);
      this.colorService.update(colorModel).subscribe(
        (response) => {
          this.toastrService.success('Renk güncellendi', 'Başarılı');
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
