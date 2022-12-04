export class CreateNoteModel {
    noteText!: string;
    priority!: number;

    constructor(noteText: string, priority: number) {
        this.noteText = noteText != null ? noteText : '';
        this.priority = priority != null ? priority : NaN;
    }
}
