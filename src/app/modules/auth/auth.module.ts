import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './widgets/login-form/login-form.component';
import { AppModule } from '../../app.module';
import { UiModule } from '../../shared/ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
  imports: [CommonModule, UiModule, ReactiveFormsModule, FormsModule],
})
export class AuthModule {}