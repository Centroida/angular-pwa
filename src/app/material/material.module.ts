import {NgModule} from "@angular/core";
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdMenuModule,
  MdToolbarModule,
  MdSidenavModule,
  MdProgressSpinnerModule

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
    MdProgressSpinnerModule,
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
    MdSidenavModule,
    MdProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule {
}
