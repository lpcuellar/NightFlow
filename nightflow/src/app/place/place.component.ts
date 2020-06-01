import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { places, getPlace, getReviews, addReview } from '../../places';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  providers: [AuthService],

})
export class PlaceComponent implements OnInit {
  newReviewForm = new FormGroup({
    score: new FormControl(''),
    description: new FormControl(''),
    
  })

  placeName: any;
  places = places;
  result = [];
  reviews = []; 
  totalReviews = 0;

  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.placeName = params['palce'];
    })
    
    this.placeName = this.placeName.toLowerCase();

    this.result = getPlace(places, this.placeName, this.result);

    this.reviews = getReviews(this.result, this.reviews);

    this.totalReviews = this.reviews.length;
  }

  newReview(email) {
    const { score, description } = this.newReviewForm.value;
    let result = addReview(this.placeName, email, score, description);
    this.router.navigate(['/place'], {queryParams: {"palce": this.placeName}});
  }

}
