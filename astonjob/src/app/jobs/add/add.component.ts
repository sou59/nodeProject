import { Component, OnInit } from '@angular/core';
// utilisation des formulaires
import { FormGroup, FormBuilder } from '@angular/forms';
import { contractTypes } from '../../data/jobs';
import { ContractType } from '../../models/ContractType';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/models/Job';
import { FlashmsgService } from 'src/app/services/flashmsg.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

// lifecyle, composant créé, instancié
// ici on utilise l'interface oninit
export class AddComponent implements OnInit {

  // tableau de contrat type
  contractTypes: ContractType[] = contractTypes;
  alertMessage: String;

// génération d'un groupe de champs
  form: FormGroup;
  job: Job = {} as Job;
  sousTitre = '';

  constructor(
    private formBuilder: FormBuilder,
    private jobsService: JobsService,
    private flashmsgService: FlashmsgService,
    private activeRoutes: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        title: '',
        company: '',
        city: '',
        zipcode: '',
        description: '',
        contractType: '',
        startDate: new Date(),
        publishedDate: new Date()
      });

    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    if (id === '') {
      this.sousTitre = 'Ajout d\'un nouveau Job';
    } else {
      this.jobsService.find(parseInt(id)).subscribe(
        data => {
          this.job = data;

          this.sousTitre = 'Editer l\'offre : ' + this.job.title;

          const select = this.job.contractType;

          this.form = this.formBuilder.group({
            title: this.job.title,
            company: this.job.company,
            city: this.job.city,
            zipcode: this.job.zipcode,
            description: this.job.description,
            contractType: this.job.contractType,
            startDate: this.job.startDate,
            publishedDate: new Date()
          });
      });
    }
  }

  chooseFunction() {
    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    if (id === '') {
      this.jobsService.add(this.form.value).subscribe(
        (job: Job) => {
          this.router.navigate(['/jobs']);
        },
        () => {}
      );
    } else {
      this.jobsService.updateJob(this.form.value, parseInt(id)).subscribe(
        (job: Job) => {
          this.router.navigate(['/jobs']);
        },
        () => {}
      );
    }
  }

  addJob() {
    this.jobsService// appel du service (services/jobs.service.ts)
        .add(this.form.value)// récupère les éléments du formulaire
          .subscribe(  // si tout se passe bien, en cas de réussite on peux utiliser les flash message pour dire sucess
          (job: Job) => { // type Job créer dans Job.ts
            this.flashmsgService.add('Job ajouté', 'success');
            this.form.reset(); // vide le formulaire
            this.router.navigate(['/jobs']);
          },
          (err) => {
            console.log('Une erreur est survenue');
          }
        );
    }
/*
  addJob() {
    this.jobsService
      .add(this.form.value)
      .subscribe(
        (job: Job) => {
          this.alerte.add('Job ajouté', 'success');
          this.form.reset();
          this.router.navigate(['/jobs']);
        },
        (err) => {
          console.log('Une erreur est survenue');
        }
      );
  }
*/
}
