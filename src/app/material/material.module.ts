import {NgModule} from "@angular/core";
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdMenuModule,
  MdToolbarModule,
  MdSidenavModule

} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {Md2Module} from "md2";

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    Md2Module,
    MdListModule,
  ],
  exports: [
    Md2Module,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule
  ],
  declarations: []
})
export class MaterialModule {
}
