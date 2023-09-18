import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  cardNumber: string = '';
  expirationDate: string = '';
  cvv: string = '';
  paymentStatus: boolean = false;
  cardName: string = '';

  constructor(
    private paymentService: PaymentService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  //Aşağıda kullanıcıdan alınan alanlar, regular expression (regex) yapısı ile düzenlendi.
  formatCreditCardNumber() {
    // Kredi kartı numarasını sadece rakamlarla doldurun ve 16 karakterden fazlasını almamak için kısıtlayın
    this.cardNumber = this.cardNumber.replace(/\D/g, '').substring(0, 16);
    // Kredi kartı numarasını 4 haneli gruplara ayırın ve aralarına boşluk ekleyin
    this.cardNumber = this.cardNumber.replace(
      /(\d{4})(\d{4})(\d{4})(\d{4})/,
      '$1 $2 $3 $4'
    );
  }

  formatExpirationDate() {
    // Son kullanma tarihi için yalnızca rakamları ve "/" karakterini koru
    this.expirationDate = this.expirationDate.replace(/[^\d/]/g, '');
    // "MM/YY" formatına uygun hale getirin
    const parts = this.expirationDate.split('/'); // Giriş tarihini '/' karakterine göre ikiye ayırır
    if (parts[0]) {
      parts[0] = parts[0].substring(0, 2); // Ay bölümünü en fazla 2 karaktere sınırlar
    }
    if (parts[1] && parts[1].length > 2) {
      parts[1] = parts[1].substring(0, 2); // Yıl bölümünü en fazla 2 karaktere sınırlar
    }
    if (parts[1]) {
      this.expirationDate = parts[0] + (parts[1] ? '/' + parts[1] : ''); // Son kullanma tarihini 'ay/yıl' formatında birleştirir
    }
  }

  formatCVV() {
    // CVV için yalnızca rakamları koru
    this.cvv = this.cvv.replace(/\D/g, '');
    // CVV'nin maksimum uzunluğunu kontrol et
    if (this.cvv.length > 3) {
      this.cvv = this.cvv.substring(0, 3);
    }
  }

  formatCardName() {
    // Kart üzerindeki ismin sadece harflerden oluşmasını sağla
    this.cardName = this.cardName.replace(/[^a-zA-Z\s]/g, '');
  }

  getPayments() {
    this.paymentService.getPayments().subscribe((response) => {
      this.paymentStatus = response.success;
      if (this.paymentStatus === true) {
        this.toastrService.success(response.message);
      } else this.toastrService.error(response.message);
    });
  }
}
