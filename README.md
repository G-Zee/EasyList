# EasyList

**EasyList**  simple  VS Code extension that makes working with lists in plain text or HTML effortless. Change this as you wish.

**"make this a damn list" extension**

---

## Features

- **Wrap with `<li>` Tags**: Quickly wrap each selected line with `<li>` tags.
- **Create Ordered Lists (`<ol>`)**: Convert selected text into an ordered list.
- **Create Unordered Lists (`<ul>`)**: Convert selected text into a bulleted list.
- **Generate Nested Lists**: Automatically parse structured text (e.g., shopping lists) into nested HTML list structures.

### Example Workflow:

#### Input:
```
Shopping List

Fruits:
Apples
Bananas
Oranges

Vegetables:
Carrots
Broccoli
Spinach

Dairy:
Milk
Cheese
Yogurt
```

#### Output:
```html
<ul>
    <li>Shopping List</li>
    <ul>
        <li>Fruits:</li>
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Oranges</li>
        </ul>
        <li>Vegetables:</li>
        <ul>
            <li>Carrots</li>
            <li>Broccoli</li>
            <li>Spinach</li>
        </ul>
        <li>Dairy:</li>
        <ul>
            <li>Milk</li>
            <li>Cheese</li>
            <li>Yogurt</li>
        </ul>
    </ul>
</ul>
```

---

## Requirements

No special requirements or dependencies are needed. Just install the extension and start organizing your lists!

---

## How to Share and Install

### Share the Extension:
1. Package the extension as a `.vsix` file using the following command in your terminal:
   ```bash
   vsce package
   ```
2. This generates a file like `easylist-1.0.0.vsix`.
3. Share this file via email, cloud storage, or any file-sharing platform.

### Install the Extension:
1. Open VS Code and navigate to the **Extensions View** (`Ctrl+Shift+X`).
2. Click the ellipsis (`...`) in the top-right corner.
3. Select **Install from VSIX...** and choose the `.vsix` file.


---

## Commands and Keybindings

EasyList provides the following commands, accessible via the Command Palette (`Ctrl+Shift+P`) or with customizable keybindings:

| Command ID                | Command Name in Palette    | Action                                   | Default Keybinding |
|---------------------------|----------------------------|------------------------------------------|--------------------|
| `easylist.wrapWithLi`     | Wrap With Li              | Wrap selected lines with `<li>` tags     | `Ctrl+Alt+L`       |
| `easylist.wrapWithOl`     | Wrap With Ol              | Wrap selection in `<ol>` tags            | `Ctrl+Alt+O`       |
| `easylist.wrapWithUl`     | Wrap With Ul              | Wrap selection in `<ul>` tags            | `Ctrl+Alt+U`       |
| `easylist.generateList`   | Try to generate list via ':' and '\n' | Generate a nested HTML list from structured text | `Ctrl+Alt+G` |


---

## Release Notes

### 1.0.0
- EasyList.
- Added commands for wrapping text in `<li>`, `<ul>`, and `<ol>` tags.
- Added functionality to generate nested HTML lists from structured text, probably not great, change it like you want.

---

## Feedback and Contributions

Have ideas or found a bug? Contributions and feedback are welcome! Please visit the [GitHub repository](https://github.com/G-Zee/EasyList) to file an issue or create a pull request.
