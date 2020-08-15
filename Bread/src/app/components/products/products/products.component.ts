import { Component, ViewEncapsulation , OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openBackDropCustomClass(content) {
    console.log('Jani')
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
}
