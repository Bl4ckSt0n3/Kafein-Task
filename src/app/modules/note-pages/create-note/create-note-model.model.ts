export class CreateNoteModel {
    noteText!: string;
    priority!: number;
    image!: string;

    constructor(noteText: string, priority: number, image: string) {
        this.noteText = noteText != null ? noteText : '';
        this.priority = priority != null ? priority : NaN;
        this.image = image != null ? image : '';
    }
}
