import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
imports:[MatFormFieldModule,MatInputModule,MatCardModule,MatToolbarModule,MatButtonModule,MatIconModule,MatRadioModule,MatSelectModule,MatExpansionModule,MatCheckboxModule,MatDividerModule,MatTabsModule],
exports:[MatFormFieldModule,MatInputModule,MatCardModule,MatToolbarModule,MatButtonModule,MatIconModule,MatRadioModule,MatSelectModule,MatExpansionModule,MatCheckboxModule,MatDividerModule,MatTabsModule]
})
export class MaterialModule{}
