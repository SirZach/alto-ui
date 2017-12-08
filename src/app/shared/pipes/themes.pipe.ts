import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'themes' })
export class ThemesPipe implements PipeTransform {
  transform(themes: string[]): string {
    return themes.join(', ');
  }
}