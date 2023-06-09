import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewAccountComponent } from '../new-account/new-account.component';
import {Service, DataSource} from "../models/dataSorce";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [Service],

})
export class GridComponent implements OnInit {
  dataSource: DataSource[] = [];
  constructor(private dialog: MatDialog,private service: Service) { }

  ngOnInit(): void {
    // İlk yükleme sırasında çalışacak kodları buraya yazdım.

    this.dataSource = this.service.getDataSource();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewAccountComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
