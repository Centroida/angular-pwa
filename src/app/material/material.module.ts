import {NgModule} from "@angular/core";
import { DatepickerModule } from "angular2-material-datepicker";
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

@NgModule({
  imports: [
    DatepickerModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdProgressSpinnerModule,
    MdListModule,
  ],
  exports: [
    DatepickerModule,
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
