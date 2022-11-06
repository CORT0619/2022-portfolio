import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/services/portfolio.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
  }
  submitForm() {
    console.log('submitting...');
    this.portfolioService.sendFormMessage();
  }

}
