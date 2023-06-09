import { Injectable } from '@angular/core';

export class DataSource {
  socialLink: string=""
  socialName: string=""
  remark: string=""

}

const datasource: DataSource[] = [{
  socialLink: "youtube.com",
  socialName: 'youtube',
  remark: 'Software Development Agency Rast Mobile Information Technology Ltd.',
}, {

  socialLink: "instagram.com",
  socialName: 'instagram',
  remark: 'Software Development Agency Rast Mobile Information Technology Ltd.',
}, {

  socialLink: "linkdln.com",
  socialName: 'linkdln',
  remark: 'Software Development Agency Rast Mobile Information Technology Ltd.',
}, {

  socialLink: "github.com",
  socialName: 'github',
  remark: 'Software Development Agency Rast Mobile Information Technology Ltd.',
}];

@Injectable()
export class Service {
  getDataSource() {
    return datasource;
  }
}

