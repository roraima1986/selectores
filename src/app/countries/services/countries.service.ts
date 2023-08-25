import { Injectable } from '@angular/core';
import { Region, SmallCountry } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _regions: Region[] = [Region.Africa, Region.America, Region.Asia, Region.Europe, Region.Oceania];

  constructor() { }

  get regions(): Region[]{
    return [...this._regions];
  }

  getContriesByRegion(region:Region): SmallCountry[]{
    return [];
  }

}
