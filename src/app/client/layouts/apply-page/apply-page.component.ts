import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, Renderer2, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/interfaces/country';
import { Faculty } from 'src/app/interfaces/faculty';
import { University } from 'src/app/interfaces/university';
import { CountryService } from 'src/app/services/country/country.service';
import { UniversityService } from 'src/app/services/university.service';

import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ApplicationService } from '../../../services/application/application.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { transition } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.css']
})
export class ApplyPageComponent implements OnInit {
  formFileData = new FormData();

  fileInput: ElementRef<HTMLInputElement>|any;
  files: NgxFileDropEntry[]  = [];

  //  files: NgxFileDropEntry[] = [];
   newFiles:File[]=[];


dropdownList:any;
dropdownSettings:any;
form: FormGroup | any;

universities: University[] = [];
faculties: Faculty[] = [];
countries:Country[]=[];

selectedCountryIds: number[] = []; 
selectedUniversityIds: number[] = []; 

formData: any = {
  first_name: '',
  mid_name: '',
  last_name: '',
  birthday: '',
  email: '',
  nationality: '',
  address: '',
  phone: '',
  preferred_countries: [],
  preferred_universities: [],
  preferred_majors: '',

  documents: [[] as File[]], 

};


dropDownSelect = false;


applicationForm: FormGroup;


acceptedFiles:any= '.pdf'; // Allowed file types


constructor(
  private translate: TranslateService,
  private http: HttpClient,
  private applicationService:ApplicationService,
  private _router: Router,
  private render2:Renderer2,@Inject(DOCUMENT) private _document:Document,
  private formBuilder: FormBuilder,private countryService: CountryService 
  ,private univerService: UniversityService) {
  this.applicationForm = this.formBuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    nationality: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^[+]?[0-9]*$')]],
    email: ['', [Validators.required, Validators.email]],
    mid_name: [''],
    birthday: ['',Validators.required],
    address: [''],
   
    preferred_countries: [''],
    preferred_universities:  [''],
    preferred_majors: [''],
    documents:  [[] as File[]],

  });
}



// ################################ Multi Value Selector ################################
ngOnInit(){

  this.renderJsFile();
  
  


  this.initForm();
  this.getCountries();
  this.getFaculties();
  this.getUniversities();

  this.dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    enableCheckAll:false,
    clearSearchFilter:true,
    noDataAvailablePlaceholderText:"No data available",
    closeDropDownOnSelection:true,
    maxHeight:100

  };


}

initForm(){
  this.form = this.formBuilder.group({
    countryFromControl : [''],
    universityFromControl : ['']

  })
}


getObjectListFromData(ids:any){
  return this.dropdownList.filter((item:any) => ids.includes(item.item_id))
}


onCountrySelect($event: any) {
      
        const idAsString = $event["id"]; 
         let selectedId = parseInt(idAsString, 10);
        const index = this.selectedCountryIds.indexOf(selectedId);
        if (index === -1) {
          this.selectedCountryIds.push(selectedId);
        } else {
          this.selectedCountryIds.splice(index, 1);
        }

      
    }
  
    
    onUniversitySelect($event: any) {
      
      const idAsString = $event["id"]; 
       let selectedId = parseInt(idAsString, 10);
      const index = this.selectedUniversityIds.indexOf(selectedId);
      if (index === -1) {
        this.selectedUniversityIds.push(selectedId);
      } else {
        this.selectedUniversityIds.splice(index, 1);
      } 
  }
    
    
    

  async getCountries() {

    (await this.univerService.getUniversitiesCountriesRequest()).subscribe({
      next: (res:any) => {this.countries=res["data"]},
      error: (err:any) =>  {},
      complete: () => {}
  
    })  
  }
  
   async getUniversities() {
  
    (await this.univerService.getAllUniversitiesRequest()).subscribe({
      next: (res:any) => {
        this.universities=res["data"];   
    },
      error: (err:any) =>  {},
      complete: () =>{  }
    })  
  }

  
async getFaculties() {

(await this.univerService.getFacultiesCountriesRequest()).subscribe({
  next: (res:any) => {this.faculties=res["data"]},
  error: (err:any) =>  {},
  complete: () => {}

})  
}

onUploadSuccess(event: any) {
}



  // ################################  File Uploader ################################

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    
    // Create a FormData object to append files

    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.newFiles.push(file)
          this.formFileData.append('files', file, file.name);
        });
      } else {
        // Handle directories if needed
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        // console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }




public fileOver(event:any){
  // console.log(event);
  // console.log(this.files);

}

public fileLeave(event:any){
  // console.log(event);
}
getActualFiles(){ this.files.map((f)=>{
  const files:File[]=[];
    const fileEntry = f.fileEntry as FileSystemFileEntry;

    fileEntry.file((file)=>{
      files.push(file);
    });
    // console.log(files);
    return files;
   } 
   )
  }
getApplicationData(){
   

  return { 

    
    first_name:this.applicationForm.value.first_name,
    mid_name:this.applicationForm.value.mid_name,
    last_name:this.applicationForm.value.last_name,
    birthday:this.applicationForm.value.birthday,
    email:this.applicationForm.value.email,
    nationality:this.applicationForm.value.nationality,
    address:this.applicationForm.value.address,
    phone:this.applicationForm.value.phone,
    preferred_majors:this.applicationForm.value.preferred_majors,
    preferred_countries:this.selectedCountryIds,
    preferred_universities:this.selectedUniversityIds,

    documents :this.files.map((f)=>{
      let actualFile:File;
        const fileEntry = f.fileEntry as FileSystemFileEntry;
        fileEntry.file((file)=>{
          actualFile = file;
        });
        return actualFile!;
       } 
      ), 
 
  }

  }


 


    async submitApplication() {  



  
      const firstField = this.applicationForm.get('first_name');
      // Check if any form control is empty
      if (this.applicationForm.invalid) {
        Swal.fire({
          title: this.translate.instant('reqFields-err-msg-title') ,
          text: this.translate.instant('reqFields-msg-text'),
          icon: 'error',
          confirmButtonText: this.translate.instant('confirmButtonText')
        }).then((result) => {

          // Add your logic here for what should happen after the user clicks "OK."
          if (result.isConfirmed) {
            // const firstInvalidControl = this.applicationForm.get('mid_name');
            // if (firstInvalidControl) {
            //   const firstInvalidControlElement = document.getElementById('mid_name'); // Assuming 'first_name' is the id of the input field
            //   if (firstInvalidControlElement) {
            //     firstInvalidControlElement.focus();
            //   }
              
            // }
            
            // this.scrollToTop();


          }
        });

        return; // Prevent form submission if any field is empty

      }
      

  (await this.applicationService.submitApplicationRequest(this.getApplicationData())).subscribe({
    next: (res:any) => {
      Swal.fire({
        title: this.translate.instant('Success-err-msg-title') ,
         text: this.translate.instant('Success-msg-text'),
        icon: 'success',
        confirmButtonText:this.translate.instant('confirmButtonText'),
      }).then((result) => {
        // Add your logic here for what should happen after the user clicks "OK."
        // You can redirect to another page or perform other actions as needed.
      });
    },
    error: (err:any) =>{
      Swal.fire({
        title: this.translate.instant('reqFields-err-msg-title') ,
          text: this.translate.instant('server-msg-text'),
          icon: 'error',
          confirmButtonText: this.translate.instant('confirmButtonText')
      }).then((result) => {
        // Add your logic here for what should happen after the user clicks "OK."
        // You can redirect to another page or perform other actions as needed.
      });
    },
    complete: () => {}
}) 
}




saveFunction($event:any) {
  if (this.dropDownSelect) {
         // close the opening to subsequent actions 
         this.dropDownSelect = false;
         // Perform action;
  };
 }

  
onFileChange(event:any) {

  if(this.files.length==0){
    for (var i = 0; i < event.target.files.length; i++) { 
      this.files.push(event.target.files[i]);
      }
  }else{
      this.files=[];
  }


}

getFileNames(): string[] {
  // Use the map function to extract file names
  return this.files.map((file:any) => file.name);
}

// Helper function to scroll to the top of the page
scrollToTop() {
  const element = document.getElementById('top');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


 
renderJsFile(){
  const s=this.render2.createElement('script');
  s.type='text/javascript';
  s.src="/assets/js/main.js";
  this.render2.appendChild(this._document.body,s);
}


backToHome() {

  const url = `/`;
  window.open(url, '_self');
}

}
