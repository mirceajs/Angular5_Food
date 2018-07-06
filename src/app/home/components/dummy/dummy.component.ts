import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) {
    this.router.navigate(['menu',this.route.snapshot.params['menuName']])
   }

  ngOnInit() {
  }

}
