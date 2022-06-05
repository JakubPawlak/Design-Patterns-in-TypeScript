namespace Command {
	interface Command {
		execute(): boolean;
	}

	abstract class EditorCommand implements Command {
		protected app: Application;
		protected editor: Editor;
		protected backup: string;

		constructor(app: Application, editor: Editor) {
			this.app = app;
			this.editor = editor;
		}

		saveBackup(): void {
			this.backup = this.editor.text;
		}

		undo(): void {
			this.editor.text = this.backup;
		}

		// Each concrete implementation has to implement its own execute method
		// Returned boolean value indicates if editor's state was changed
		abstract execute(): boolean;
	}

	class CopyCommand extends EditorCommand {
		execute(): boolean {
			this.app.clipboard = this.editor.getSelection();
			console.log('copy command execute, clipboard:', this.app.clipboard);
			return false;
		}
	}

	class CutCommand extends EditorCommand {
		execute(): boolean {
			this.app.clipboard = this.editor.getSelection();
			this.editor.deleteSelection();
			return true;
		}
	}

	class PasteCommand extends EditorCommand {
		execute(): boolean {
			this.saveBackup();
			this.editor.replaceSelection(this.app.clipboard);
			return true;
		}
	}

	class UndoCommand extends EditorCommand {
		execute(): boolean {
			this.app.undo();
			return true;
		}
	}

	class HistoryCommandDecorator implements Command {
		protected wrapee: Command;
		protected history: CommandHistory;

		constructor(wrapee: Command, history: CommandHistory) {
			this.wrapee = wrapee;
			this.history = history;
		}

		execute(): boolean {
			this.history.push(this.wrapee);
			console.log('save in history');
			return this.wrapee.execute();
		}
	}

	class Editor {
		text: string;

		getSelection(): string {
			return 'im selected';
		}

		deleteSelection(): void {
			console.log('deleting selection');
		}

		replaceSelection(text: string): void {
			console.log('replacing selection with', text);
		}
	}

	class CommandHistory {
		history: Command[] = [];

		push(c: Command): void {
			console.log('new command added to history');
			this.history.push(c);
		}

		pop(): Command {
			return this.history.pop();
		}
	}

	class Button {
		protected command: Command;

		constructor(command: Command) {
			this.command = command;
		}

		click(): void {
			console.log('button click');
			if (this.command) {
				this.command.execute();
			}
		}
	}

	export class Application {
		clipboard: string;
		activeEditor: Editor;
		history: CommandHistory;
		copyButton: Button;

		constructor() {
			this.activeEditor = new Editor();
			this.history = new CommandHistory();
			this.createUI();
		}

		createUI() {
			let copyCommand = new CopyCommand(this, this.activeEditor) as Command;
			copyCommand = new HistoryCommandDecorator(copyCommand, this.history);
			this.copyButton = new Button(copyCommand);
		}

		undo(): void {
			console.log('undo');
		}
	}
}

const commandApp = new Command.Application();
commandApp.copyButton.click();
commandApp.copyButton.click();
commandApp.copyButton.click();
console.log(commandApp.history.history);
