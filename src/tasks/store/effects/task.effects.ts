import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

@Injectable()
export class TaskEffects {
    // TODO: Effecti voi kuunnella samaa tyyppiä, joka on selektoituna jossai komponentissa.
    // @Effect()
    // listTasks$: Observable<Action> = this.actions$

    // this.http.get('http://localhost:3000/api/tasks')
    //   .subscribe((tasks: Task[]) => {
    //     console.log('tasks', tasks);
    //     this.tasks = tasks;
    //   })

    constructor(private http: HttpClient, private actions$: Actions) {}
}