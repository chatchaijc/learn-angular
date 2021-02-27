import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  constructor() {}
  search: string;
  isShow: boolean = false;

  showAnswer() {
    if (this.isShow == true) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
    this.search;
    // this.search = 'ขออภัยคุณลูกค้า ของมีไม่พอ';
  }

  // setShow() {
  //   if (this.isShow == true) {
  //     this.isShow = false;
  //   } else {
  //     this.isShow = true;
  //   }
  // }

  ngOnInit(): void {}
}
