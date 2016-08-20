import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

declare var MediumEditor: any;

@Component( {
	selector: 'medium-editor',
	templateUrl: 'medium-editor.component.html'
})
export class MediumEditorComponent {

	@Input() model;
	@Input() enableToolbar = true;
	@Output() onChanged = new EventEmitter();
  @ViewChild( 'editorContent' ) editorContent;

	constructor() { }

	ngOnInit() {
		var editor = new MediumEditor( this.editorContent.nativeElement, {
			toolbar: this.enableToolbar,
			spellcheck: false,
			placeholder: {
        text: '',
			}
		});

		var self = this;
		editor.subscribe( 'blur', function ( event, editable ) {
			self.onChanged.emit( editable.innerHTML );
		});
	}

}