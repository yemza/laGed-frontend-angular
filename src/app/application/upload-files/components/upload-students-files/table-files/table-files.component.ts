import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-files',
  templateUrl: './table-files.component.html',
  styleUrls: ['./table-files.component.css'],
})
export class TableFilesComponent implements OnInit {
  @Input() filesStudentUploadedFromGroup: FormGroup = new FormGroup({});
  @Output() studentFilesTableEvent = new EventEmitter();
 studentFiles : FormArray = new FormArray([])

  config = {
    id: 'custom',
    itemsPerPage: 4,
    currentPage: 1,
    totalItems: this.filesStudentUploadedFromGroup?.value?.studentFiles?.length,
  };
  tableSizes = [4, 8, 10, 14];
  filter = '';
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filesStudentUploadedFromGroup']) {
      console.log(this.filesStudentUploadedFromGroup.value);
    }
    if (changes['studentFiles']) {
      console.log(this.studentFiles);

    }
  }

  deleteFile(index: number) {
    this.studentFileControl.controls.splice(index, 1);
    this.studentFileControl.value.splice(index, 1);
    this.studentFilesTableEvent.emit(this.studentFileControl.value);

    console.log(this.filesStudentUploadedFromGroup.value)
    console.log(this.filesStudentUploadedFromGroup.controls.value)

  }

  get studentFileControl(): FormArray {
    return this.filesStudentUploadedFromGroup.get('studentFiles') as FormArray;
  }
}
