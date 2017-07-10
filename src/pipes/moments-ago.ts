import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Generated class for the MomentsAgo pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
    name: 'momentsAgo',
})
export class MomentsAgoPipe implements PipeTransform {
    momentsAgo: string;

    /**
     * Takes a value and makes it lowercase.
     */
    transform(value: Date): string {
        if (value) {
            this.momentsAgo = moment(value).fromNow(true);
            return this.momentsAgo;
        }
    }
}
