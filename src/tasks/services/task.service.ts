import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../models/task.model';

@Injectable()
export class TaskService {
    private url: string = 'http://localhost:3000/api/tasks';

    constructor(private http: HttpClient) {}

    listTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.url);
    }

    getTaskById(id: number): Observable<Task> {
        return this.http.get<Task>(`${this.url}/${id}`);
    }
}