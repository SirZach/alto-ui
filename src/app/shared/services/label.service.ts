import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Label } from '../../model';

@Injectable()
export class LabelService {
  private URL = `${process.env.API_URL}`;
  private COLORS = ['Turquoise','IndianRed','Orchid','ForestGreen','LightSalmon','PowderBlue','Thistle','SkyBlue','GoldenRod',
    'LimeGreen','Tomato','FireBrick','DodgerBlue','Orange','Brown','DarkSeaGreen','BlueViolet','DarkSlateBlue','YellowGreen','Red',
    'Salmon','CadetBlue','MediumAquaMarine','DarkTurquoise','RoyalBlue','Crimson','DarkRed','Khaki','LightPink','Aquamarine','Tan',
    'MidnightBlue','MediumOrchid','HotPink','Violet','Chocolate','DarkGoldenRod','Blue','DarkGreen','SandyBrown','DeepPink',
    'Magenta','Lime','SlateBlue','Olive','Darkorange','DarkCyan','LightCoral','MediumPurple','DarkViolet','Maroon','SteelBlue',
    'LightSteelBlue','SaddleBrown','Indigo','Plum','Coral','Peru','CornflowerBlue','DeepSkyBlue','Sienna',
    'DarkSalmon','GreenYellow','Fuchsia','LawnGreen','MediumVioletRed','OrangeRed','RosyBrown','PaleVioletRed','Purple',
    'DarkMagenta','MistyRose','Gold'];

  constructor(private http: HttpClient) {}

  get(): Promise<Label[]> {
    return Promise.resolve([
      { id: 1, name: 'admin and paraprofessional' },
      { id: 2, name: 'animal services' },
      { id: 3, name: 'automotive services' },
      { id: 4, name: 'beauty and grooming services' },
      { id: 5, name: 'childcare and early education' },
      { id: 6, name: 'corporate internship' },
      { id: 7, name: 'corporate professional' },
      { id: 8, name: 'corporate sales and marketing professional' },
      { id: 9, name: 'direct sales and customer support' },
      { id: 10, name: 'environmental services' },
      { id: 11, name: 'exclude spanish language' },
      { id: 12, name: 'food and beverage' },
      { id: 13, name: 'health and wellness direct care' },
      { id: 14, name: 'health and wellness home care' },
      { id: 15, name: 'health and wellness professional' },
      { id: 16, name: 'health and wellness technical' },
      { id: 17, name: 'hospitality' },
      { id: 18, name: 'industrial warehouse and manufacturing front line' },
      { id: 19, name: 'industrial warehouse and manufacturing professional' },
      { id: 20, name: 'industrial warehouse and manufacturing skilled/technical' },
      { id: 21, name: 'information technology professional' },
      { id: 22, name: 'military recruiting and contracting' },
      { id: 23, name: 'personal instruction and tutoring' },
      { id: 24, name: 'real estate sales and related services' },
      { id: 25, name: 'renovation contracting construction commercial' },
      { id: 26, name: 'renovation contracting construction home' },
      { id: 27, name: 'retail' },
      { id: 28, name: 'retail grocery' },
      { id: 29, name: 'security services' },
      { id: 30, name: 'trucking and transportation specialized licensed' },
      { id: 31, name: 'trucking and transportation taxi and delivery' }
    ] as Label[]);
  }

  delete(label: Label): Promise<any> {
    return Promise.resolve();
  }

  put(label: Label): Promise<Label> {
    return Promise.resolve(label);
  }

  colorLabel(label: Label) {
    if (!label.color) {
      label.color = this.COLORS.shift();
      // TODO save the label's color?
      // this.put(label);
    }
  }
}
