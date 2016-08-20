import { Pipe, PipeTransform } from '@angular/core';

declare var moment: any;

@Pipe({name: 'momentcalendar'})
export class MomentCalendarPipe {
	transform(value: Date) {
		return moment(value).calendar();
	}
}

@Pipe({name: 'momentfromnow'})
export class MomentFromNowPipe {
	transform(value: Date) {
		return moment(value).fromNow();
	}
}