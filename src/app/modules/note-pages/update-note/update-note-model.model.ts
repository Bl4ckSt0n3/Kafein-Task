export class UpdateNoteModel {
    noteText!: string;
    priority!: number;
    id!: number;

    constructor(noteText: string, priority: number, id: number) {
        this.noteText = noteText != null ? noteText : '';
        this.priority = priority != null ? priority : NaN;
        this.id = id != null ? id : NaN;
    }
}
