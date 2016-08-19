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
		console.log(this.enableToolbar);
		var editor = new MediumEditor( this.editorContent.nativeElement, {
			toolbar: this.enableToolbar,
			spellcheck: false,
		});

		var self = this;
		editor.subscribe( 'editableInput', function ( event, editable ) {
			if ( editable )
				self.onChanged.emit( editable.innerHTML );
		});
	}

}