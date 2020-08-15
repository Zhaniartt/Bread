import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ContactService } from './contact.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService,
              private spinner: NgxSpinnerService, private router: Router, 
              private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
      });
  }
  onSubmit(FormData) {
    this.ngxService.start(); 
    this.contact.PostMessage(FormData)
    .subscribe(response => {
      this.FormData.reset();
      this.ngxService.stop();
      this.router.navigate(['/']);
    }, error => {
    console.warn(error.responseText);
    console.log({ error });
    });
    }

}
