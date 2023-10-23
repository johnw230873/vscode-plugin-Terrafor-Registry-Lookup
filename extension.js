const vscode = require('vscode');

function activate(context) {
    context.subscriptions.push(vscode.languages.registerHoverProvider('terraform', {
        provideHover(document, position) {
            const range = document.lineAt(position).range;
            const line = document.getText(range);

            // Check if the line starts with 'resource', 'data', or 'provider'
            if (line.startsWith('resource') || line.startsWith('data')) {
                return handleResourceOrData(line);
            } else if (line.startsWith('provider')) {
                return handleProvider(line);
            }
        }
    }));
}

// Handle 'resource' or 'data' lines
function handleResourceOrData(line) {
    const parts = line.split('"');
    if (parts.length >= 5) {
        const provider = parts[1].split('_')[0];
        const type = parts[1].substring(parts[1].indexOf('_') + 1);

        // Construct the URL for the Terraform registry
        let url;
        if (line.startsWith('resource')) {
            url = `https://registry.terraform.io/providers/hashicorp/${provider}/latest/docs/resources/${type}`;
        } else { // data source
            url = `https://registry.terraform.io/providers/hashicorp/${provider}/latest/docs/data-sources/${type}`;
        }

        // Create the hover message
        const message = new vscode.MarkdownString(`Terraform registry lookup:  [${parts[1]}](${url})`);
        message.isTrusted = true;
        return new vscode.Hover(message);
    }
}

// Handle 'provider' lines
function handleProvider(line) {
    const parts = line.split('"');
    if (parts.length >= 3) {
        const provider = parts[1];

        // Construct the URL for the Terraform registry
        const url = `https://registry.terraform.io/providers/hashicorp/${provider}/latest`;

        // Create the hover message
        const message = new vscode.MarkdownString(`Terraform registry lookup:  ${provider}`);
        message.isTrusted = true;
        return new vscode.Hover(message);
    }
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
