import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'https://pr-i-nce.github.io/homes-json-data/db.json/locations';
  applicationUrl = 'https://pr-i-nce.github.io/homes-json-data/db.json/applications'; 

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? []; 
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async submitApplication(firstName: string, lastName: string, email: string): Promise<void> {
    const applicationData = { firstName, lastName, email };

    await fetch(this.applicationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicationData),
    });

    console.log('Application submitted');
  }
}

