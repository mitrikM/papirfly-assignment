import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-new-customer-modal',
  templateUrl: './new-customer-modal.component.html',
  styleUrls: ['./new-customer-modal.component.scss'],
})
export class NewCustomerModalComponent {
  customerForm: FormGroup;
  validForm = true;
  constructor(
    private fb: FormBuilder,
    private databaseService: DatabaseService,
    private modalService: ModalService,
  ) {
    this.customerForm = this.fb.group({
      com_id: [''],
      enabled: ['', Validators.required],
      id: [''],
      leg_id: [''],
      logo: [''],
      name: ['', Validators.required],
      size: ['', Validators.min(1)],
      sizeValue: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  generateRandomId(): string {
    const idLength = 5;
    const min = Math.pow(10, idLength - 1);
    const max = Math.pow(10, idLength) - 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber.toString();
  }

  submit() {
    if (this.customerForm.valid) {
      this.validForm = true;
      this.customerForm.setValue({
        ...this.customerForm.value,
        size: this.customerForm.value.size +' '+this.customerForm.value.sizeValue,
        com_id: this.generateRandomId(),
        id: this.generateRandomId(),
        leg_id: this.generateRandomId(),
        logo: './assets/notification/notification.png',
      });
      this.databaseService.addNewItem(this.customerForm.value);
      this.close();
    } else {
      this.validForm = false;
    }
  }

  close() {
    this.customerForm.setValue({
      com_id: '',
      enabled: '',
      id: '',
      leg_id: '',
      logo: '',
      name: '',
      size: '',
      status: '',
      sizeValue: ''
    });

    this.modalService.closeModal();
  }
}
