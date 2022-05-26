namespace ChainOfResponsibility {
	interface ComponentWithHelpInfo {
		showHelp: () => void;
	}

	abstract class Component implements ComponentWithHelpInfo {
		tooltipText: string;
		container: Container;

		showHelp(): void {
			if (this.tooltipText) {
				console.log('componentTooltipText', this.tooltipText);
			} else {
				this.container.showHelp();
			}
		}
	}

	abstract class Container extends Component {
		protected children: Component[] = [];

		add(child: Component): void {
			this.children.push(child);
			child.container = this;
		}
	}

	class Button extends Component {}

	class Panel extends Container {
		modalHelpText: string;

		showHelp(): void {
			if (this.modalHelpText) {
				console.log('modalHelpText', this.modalHelpText);
			} else {
				super.showHelp();
			}
		}
	}

	export class Application {
		panel;
		button;
		noTooltipButton;

		initUI() {
			this.panel = new Panel();
			this.panel.modalHelpText = 'This is modal help text';

			// will use it's own showHelp
			this.button = new Button();
			this.button.tooltipText = 'This is btn help text';

			// will use container's showHelp
			this.noTooltipButton = new Button();

			this.panel.add(this.button);
			this.panel.add(this.noTooltipButton);
		}
	}
}

const chainApp = new ChainOfResponsibility.Application();
chainApp.initUI();
chainApp.panel.showHelp();
chainApp.button.showHelp();
chainApp.noTooltipButton.showHelp();
