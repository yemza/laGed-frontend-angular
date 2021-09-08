import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-students-files',
  templateUrl: './upload-students-files.component.html',
  styleUrls: ['./upload-students-files.component.css'],
})
export class UploadStudentsFilesComponent implements OnInit {
  showTableFilesOrIconBolean: boolean = false;
  filesStudentUploadedFromGroup: FormGroup = new FormGroup({});
  filesUploadedFromGroup : FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filesStudentUploadedFromGroup = this.fb.group({
      AnneeScolaire : [null, Validators.required],
      studentCode: [{value: null, disabled: true}, Validators.required],
      studentFiles: this.fb.array([]),
    });
  }

  showTableFilesOrIcon() {}

  uploadNow() {
    console.log('send Files To Back-End');
    console.log(this.filesStudentUploadedFromGroup);
  }

  filesStudentUploadedEventEmitter(event: any) {
    if (event.length > 0) {
      this.showTableFilesOrIconBolean = true;
    } else {
      this.showTableFilesOrIconBolean = false;
    }
  }


}
