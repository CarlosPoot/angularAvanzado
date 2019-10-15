import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SharedModule, SidebarService } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
      SettingsService,
      SharedModule,
      SidebarService
  ]
})
export class ServiceModule { }
