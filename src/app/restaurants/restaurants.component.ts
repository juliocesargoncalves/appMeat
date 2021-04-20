import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurant/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants : Restaurant[];

  constructor(private restauranteService : RestaurantsService) { }

  ngOnInit() {

    this.restauranteService.restaurants().subscribe(restaurants => this.restaurants = restaurants);

  }

}
