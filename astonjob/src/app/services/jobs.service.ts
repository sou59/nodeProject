import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/Job';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ContractType } from '../models/ContractType';

const API_BASE_URL = 'https://localhost:3000/api/jobs';

@Injectable({
  providedIn: 'root'
})

export class JobsService {

  constructor(private http: HttpClient) { }

  // ajouter ne pas oublier le return, en paramètre l'adresse de l'api et le job
  /**
   * Add a new job.
   */
  add(job: Job) {
    return this.http.post(API_BASE_URL, job, {
      withCredentials: true
    });
  }

/*
  // trouver un seul job par id
  find(id: Number): Observable<Job> {
    const url = API_BASE_URL + '/' + id;
    return this.http.get<Job>(url)
      .pipe(map(res => res));
  }
*/

/**
   * Find a job by its ID.
   */
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
  /*update(job: Job) {
    return this.http.put(API_BASE_URL + '/' + job.id, job)
      .pipe(
        map(res => res));
  }*/

  updateJob(job: Job, id: Number) {
    const url = API_BASE_URL + '/' + id;
    return this.http.put(url, job);
  }

}
