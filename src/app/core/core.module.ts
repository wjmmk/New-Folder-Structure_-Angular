import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations:[],
    exports: [
        SharedModule
    ],
    providers: []
})

export class CoreModule {
    constructor(){}
}