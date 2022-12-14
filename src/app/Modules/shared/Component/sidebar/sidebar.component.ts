import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/categorys/category.service';
import { Output, EventEmitter } from '@angular/core';

CategoryService;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() slectedCAtegory = new EventEmitter<string>();
  categorys: string[] = [];

  constructor(private _CategoryService: CategoryService) {}
  ngOnInit(): void {
    this.getCAtegorys();
  }

  getCAtegorys() {
    this._CategoryService.getAllCAtegorys().subscribe((res:string[]) => {
      this.categorys = res;
    });
  }

  getCheckBoxCAteogry(event:any) {
    this.slectedCAtegory.emit(event);
  }
}
