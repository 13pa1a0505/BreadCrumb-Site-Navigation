import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name: string;
  menu: Array<any> = [];
  breadcrumbsList: Array<any> = [];

  constructor(private _router: Router, private menuService: MenuService) { }

  ngOnInit() {
    // Get the menu in MenuService
    this.menu = this.menuService.getMenu();
    this.listenRouting();
  }

  /* Listening for routing events */
  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
        // Initialization breadcrumb
        target = this.menu;
        this.breadcrumbsList.length = 0;
        // Get the current routing url with /
        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {
          // Find this layer in the menu path and the same path as the current routing
          target = target.find(page => page.path.slice(2) === router);
          // breadcrumbListlist
          this.breadcrumbsList.push({
            name: target.name,
            // The second layer starts routing and adds the routing of the previous layer. 
            path: (index === 0) ? target.path : `${this.breadcrumbsList[index - 1].path}/${target.path.slice(2)}`
          });

          //The next level to be compared is the specified subpage of this layer.
          if (index + 1 !== routerList.length) {
            target = target.children;
          }
        });

        console.log(this.breadcrumbsList);
      }
    });
  }


}
