import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('EasyList extension was downloaded and activated');
	const disposable = vscode.commands.registerCommand('easylist.ping', () => {
		vscode.window.showInformationMessage('Pong!');
	});
	const wrapWithLiTags = vscode.commands.registerCommand('easylist.wrapWithLi',()=>{
		const activeTextEditor = vscode.window.activeTextEditor;
		if(!activeTextEditor){
			console.error('Failed to load the editor');
			return;
		}

		const selection = activeTextEditor.selection;
		const text = activeTextEditor.document.getText(selection);
		const wrappedText = text.split('\n')
								.map(line => `<li>${line.trim()}</li>`)
								.join('\n');

		activeTextEditor.edit(editBuilder => {
			editBuilder.replace(selection, wrappedText);
		});
		
	});
	const wrapWithOlTags = vscode.commands.registerCommand('easylist.wrapWithOl',()=>{
		const activeTextEditor = vscode.window.activeTextEditor;
		if(!activeTextEditor){
			console.error('Failed to load the editor');
			return;
		}

		const selection = activeTextEditor.selection;
		const text = activeTextEditor.document.getText(selection);
		const wrappedText = text.split('\n')
								.map(line => `<ol>${line.trim()}</ol>`)
								.join('\n');

		activeTextEditor.edit(editBuilder => {
			editBuilder.replace(selection, wrappedText);
		});
	});
	const wrapWithUlTags = vscode.commands.registerCommand('easylist.wrapWithUl',()=>{
		const activeTextEditor = vscode.window.activeTextEditor;
		if(!activeTextEditor){
			console.error('Failed to load the editor');
			return;
		}

		const selection = activeTextEditor.selection;
		const text = activeTextEditor.document.getText(selection);
		const wrappedText = text.split('\n')
								.map(line => `<ul>${line.trim()}</ul>`)
								.join('\n');

		activeTextEditor.edit(editBuilder => {
			editBuilder.replace(selection, wrappedText);
		});
	});

	const generateList = vscode.commands.registerCommand('easylist.generateList', () => {
		const activeTextEditor = vscode.window.activeTextEditor;
		if (!activeTextEditor) {
			console.error('Failed to load the editor');
			return;
		}

		const selection = activeTextEditor.selection;
		const text = activeTextEditor.document.getText(selection);

		const lines = text.split('\n');
		let htmlList = '<ul>';
		let isSubListOpen = false;

		for (const line of lines) {
			const trimmedLine = line.trim();

			if (trimmedLine.endsWith(':')) {
				if (isSubListOpen) {
					htmlList += '</ul>';
					isSubListOpen = false;
				}
				htmlList += `<li>${trimmedLine}</li><ul>`;
				isSubListOpen = true;
			}
			else if (trimmedLine) {
				htmlList += `<li>${trimmedLine}</li>`;
			}
		}

		if (isSubListOpen) {
			htmlList += '</ul>';
		}
		htmlList += '</ul>';

		activeTextEditor.edit(editBuilder => {
			editBuilder.replace(selection, htmlList);
		});
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(generateList);
	context.subscriptions.push(wrapWithLiTags);
	context.subscriptions.push(wrapWithOlTags);
	context.subscriptions.push(wrapWithUlTags);
}

export function deactivate() {}
