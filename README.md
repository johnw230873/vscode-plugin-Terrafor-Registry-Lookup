Sure, here's a quick README for your extension:

# Terraform Registry Lookup Extension for VS Code

## Overview
This extension provides hover tooltips in VS Code for Terraform files. When you hover over a resource or data declaration, a tooltip will appear with a link to the corresponding page in the Terraform registry.

## Features
- Hover over a resource or data declaration to see a link to the corresponding resource or data source in the Terraform registry.
- Hover over a provider declaration to see a link to the corresponding provider in the Terraform registry.
- Click on the link in the tooltip to open the corresponding Terraform registry page in your web browser.

## Usage
1. Open a Terraform file in VS Code.
2. Hover over a resource, data, or provider declaration.
3. A tooltip will appear with the text "hashicorp/[provider]/[resource_type] Documentation]" (where "resource_type" is the type of the resource or data source).
4. Click on the link in the tooltip to open the corresponding page in the Terraform registry.

## Customization for Business Security Policies
The code for this extension is designed to be easily readable and customizable for this reason it has be striped to the basic requirements. Companies are encouraged to fork this repository into their own repositories for review and use. This allows businesses to modify and build their own VS Code package that conforms to their specific security policies and ownership. 
* [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VS Code, noting that if this is for interal use you only need to package with vsce and not publish, packaging will provide you a vsix which you can nativilty install in vscode. 


## Installation
To install this extension, follow these steps:
1. Download and install Visual Studio Code, if you haven't already.
2. Download this extension and unzip it into your VS Code extensions directory.
3. Reload VS Code.

Please note that this extension is still under development and might not work perfectly. If you encounter any issues or have any suggestions for improvements, please let us know.

Enjoy using Terraform Registry Lookup! 🚀