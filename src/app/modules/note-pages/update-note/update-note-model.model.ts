export class UpdateNoteModel {
    noteText!: string;
    priority!: number;
    id!: number;
    image!: string;

    constructor(noteText: string, priority: number, image: string, id: number) {
        this.noteText = noteText != null ? noteText : '';
        this.priority = priority != null ? priority : NaN;
        this.image = image != null ? image : '';
        this.id = id != null ? id : NaN;
    }
}
