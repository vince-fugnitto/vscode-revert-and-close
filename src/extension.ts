import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('revert-and-close.close', () => {
		vscode.commands.executeCommand('workbench.action.revertAndCloseActiveEditor');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
