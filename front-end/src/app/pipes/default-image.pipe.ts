import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(imagePath: string): string {
    return imagePath === 'N/A'
      ? 'https://via.placeholder.com/200x300'
      : imagePath;
  }
}
