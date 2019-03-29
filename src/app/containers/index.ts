import { AppComponent } from './app/app.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { LoginComponent } from './login/login.component';

export const containers: any[] = [
    AppComponent,
    FourOhFourComponent,
    LoginComponent
];

export * from './app/app.component';
export * from './login/login.component';
export * from './four-oh-four/four-oh-four.component';