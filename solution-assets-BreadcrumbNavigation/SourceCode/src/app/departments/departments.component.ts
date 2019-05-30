import { Component, OnInit } from '@angular/core';
import { MenuService } from './../menu.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departmentsList: Array<any> = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.departmentsList = this.menuService
      .getMenu()[1].children[0].children;
  }

}

