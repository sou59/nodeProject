import { Component, OnInit, Input} from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from 'src/app/models/Job';
import { contractTypes } from '../../data/jobs';
import { ContractType } from 'src/app/models/ContractType';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  @Input() jobs: Job[] = [];
  @Input() id: Number;
  @Input() title: string;
  @Input() company: string;
  @Input() city: string;
  @Input() zipcode: string;
  @Input() description: string;
  @Input() contractTypes: ContractType;
  @Input() startDate: Date;
  @Input() index: number;


  constructor(private jobsService: JobsService,
              private router: Router) { }

  ngOnInit() { // comme un constructeur initialise la récup des données
    this.jobsService.all().subscribe(
      data => { // récupère la réponse: les données du formulaire
        this.jobs = data;
      });
    }

    getMyId() {
      this.jobsService.find(this.index);
    }

    onViewJob(id: number) {
      this.router.navigate(['/jobs', id]);
    }
/*
    editJob(jobs: Job) {
    this.jobsService.find(jobs.id)
      .subscribe(data => {
          this.jobs = data;
      });
    }

 // console.log(this.jobs);

  deleteJob(jobs: Job) {
    this.jobsService.delete(jobs.id)
      .subscribe( data => {
        this.jobs = this.jobs.filter(u => u !== jobs);
      });
  }
*/
  /*
  editJob(jobs: Job) {
    localStorage.removeItem("editJobId");
    localStorage.setItem("editJobId", job.id.toString());
    this.router.navigate(['edit-Job']);
  };
*/

}
