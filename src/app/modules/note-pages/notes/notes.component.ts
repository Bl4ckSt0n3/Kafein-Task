import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { NoteAppService } from '../../SharedServices/note-app.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NoteAppService]
})
export class NotesComponent {

  notes: any = [];
  returnMessage: string = "Henüz içerik girilmedi";
  isEmpty!: boolean;
  selectedSortOrder: any = "Sort by";  
  searchText: any;
  constructor(
    private service: NoteAppService, 
    private modalService: NgbModal,
    private toastr: ToastrService,
    ) {
    this.getAll();
  }

  public getAll(): void {
    this.notes = [];
    this.service.read().subscribe(
      (elem: any) => {
        this.isEmpty = typeof elem == undefined || elem == null || elem.length <= 0 ? true : false;
        elem.forEach((element: any) => {
          this.notes.push(element);
        });
        this.notes.reverse();
    })
  }

  public remove(id: number) {
    this.service.remove(id).subscribe((e: any) => {
      if (e["message"] == "success") {
        this.getAll();
        this.toastr.success("Deleted!", "Success", {
          tapToDismiss: true,
          timeOut: 5000,
          progressBar: true,
          progressAnimation: 'decreasing',
          positionClass: 'toast-top-right',
          closeButton: true
        });
      }
    });
    
  }

  public update(id: number, noteText: string, priority: string) {
    const modalRef = this.modalService.open(UpdateNoteComponent); 
    const t = {
      id: id,
      noteText: noteText,
      priority: priority, 
    };
    modalRef.componentInstance.textForm.reset(t);
    if(this.modalService.hasOpenModals()) {
      modalRef.componentInstance.passEntry.subscribe((e: any) => {
        var emitted = {
          id: e.id,
          noteText: e.noteText,
          priority: e.priority,
          image: e.image
        }
        // send to server
        this.service.update(emitted).subscribe(
          (res: any) => {
            if (res.message == "success") {
              this.getAll();
              this.toastr.success("Updated!", "Success", {
                tapToDismiss: true,
                timeOut: 5000,
                progressBar: true,
                progressAnimation: 'decreasing',
                positionClass: 'toast-top-right',
                closeButton: true
              });
              
            }
          },
          (error: any) => {
            this.toastr.error("Error", "Error!", {
              tapToDismiss: true,
              timeOut: 5000,
              progressBar: true,
              progressAnimation: 'decreasing',
              positionClass: 'toast-top-right',
              closeButton: true
            });
          });
        
      })
      
    }
    
  }


  sortOrders: string[] = ["Ascending", "Descending"];
  templist: any[] = [];
  onChangeSortOrder(newSortOrder: any) { 
    // this.selectedSortOrder = newSortOrder;
    if(newSortOrder == "Ascending") {
      this.notes.sort((a: any, b: any) => {return parseInt(a.priority) - parseInt(b.priority)});
    }
    if(newSortOrder == "Descending") {
      this.notes.sort((a: any, b: any) => {return parseInt(b.priority) - parseInt(a.priority)});
    }
    
  }

}
