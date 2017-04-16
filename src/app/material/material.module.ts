import {NgModule} from "@angular/core";
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdGridListModule,
  MdToolbarModule,
  MdSidenavModule

} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {Md2Module} from "md2";

@NgModule({
  imports: [
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdMenuModule,
    MdToolbarModule,
    MdGridListModule,
    FlexLayoutModule,
    MdSidenavModule,
    Md2Module,
  ],
  exports: [
    Md2Module,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdMenuModule,
    MdToolbarModule,
    MdGridListModule,
    FlexLayoutModule,
    MdSidenavModule
  ],
  declarations: []
})
export class MaterialModule {
}
