import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/Job';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const API_BASE_URL = 'http://localhost:3000/jobs';

@Injectable({
  providedIn: 'root'
})

export class JobsService {

  jobs: Job[] = [];

  @Input() id: Number;
  @Input() title: string;
  @Input() company: string;
  @Input() city: string;
  @Input() zipcode: string;
  @Input() description: string;
  @Input() contractTypes: number;
  @Input() startDate: Date;
  @Input() index: number;

  constructor(private http: HttpClient) {}

  // ajouter ne pas oublier le return, en paramètre l'adresse de l'api et le job
  add(job: Job) {
    return this.http.post(API_BASE_URL, job);
  }

  // trouver un seul job par id
  find(id: Number) {
    return this.http.get(`${API_BASE_URL}/${id}`)
      .pipe(map(res => res));
  }

  // afficher tous les les job
  all(): Observable<Job[]> { // type de retour tableau de Job
    return this.http.get<Job[]>(API_BASE_URL)
      .pipe(map(res => res)); // filtrage des données
      // fonction flechée map(res => { return res; });
      // retourne les données sous tab
      // renvoie un objet observable
  }

  // supprimer un job
  delete(id: Number) {
    return this.http.delete(`${API_BASE_URL}/${id}`)
      .pipe(
        tap(res => {
          console.log(res);
        })
      );
  }

  // updater un job
  update(job: Job) {
    return this.http.put(API_BASE_URL + '/' + job.id, job)
    .pipe(map(res => res));
  }

}
