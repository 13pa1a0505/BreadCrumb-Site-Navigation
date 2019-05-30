import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      { name: 'home', path: './home', children: [] },
       {
            name: 'Departments',path: './departments',
            children: [
              { name: 'CIVIL', path: './civil' },
              {name: 'CSE',path: './cse' },
              { name: 'ECE', path: './ece'}
                          
            ]
          },
          { name:'Faculty', path: './faculty',
          children: [
            {name:'TechnicalFaculty',path:'./technicalfaculty'},
            {name:'NonTechnicalFaculty',path:'./nontechnicalfaculty'}
          ]
        },
          { name:'Facilities', path: './facilities'},
          { name:'Aboutus', path: './aboutus'},
        
    
     

    ];

    return menu;
  }

}