import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicService } from '../../public.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    characters: any = [];
    continents: any = [];

    constructor( private publicSerice: PublicService) { }

    ngOnInit() { 
        /* this.getCharacters();
        this.getContinents(); */
        this.dataGamesOfThrones()
    }

    dataGamesOfThrones(): void {

        const observable = new Observable(subscriber => {
            let count = 0;

            setInterval( () => {
                subscriber.next(count);
                count++;
            }, 1000)
        })

        console.log('Antes de Ejecutar el Observable!!!')


         const subcription = observable.subscribe(
            value => console.log('Callback Next: ', value),
            error => console.log('Callback Error: ', error),
            () => console.log('Observable Completado')
        );
        

        console.log('Despues de Ejecutar el Observable.')

        setTimeout(() => {
            subcription.unsubscribe()
        }, 19000);
    }

    /* getCharacters(): void {
        this.publicSerice.getCharacters().subscribe(
            resp => this.characters = resp,
            error => console.log(error)
        )
    }

    getContinents(): void {
        this.publicSerice.getContinents(). subscribe(
            resp => this.continents = resp,
            error => console.log(error)
        )
    } */
}