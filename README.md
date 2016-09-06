Chroma: Colors for your terminal app
---

## Intro

![Screenshot](screenshot.png)

I started writing more and more Node apps for the terminal and guess what? I liked them in color. So I decided I'd write a module to add colors to text for stuff that's printed to `stdout`


Yh I know there's a colors package....but this is just MINE!! There's also another module for text formatting like underlining and boldening

## Some reading

[Terminal code (ANSI/VT100) introduction](http://wiki.bash-hackers.org/scripting/terminalcodes)

[Long list of codes](http://misc.flogisoft.com/bash/tip_colors_and_formatting)

* Terminal codes help you issue commands to your terminal itself.
* If the codes are understood they won't be printed but instead cause the terminal to perform an action
* Action may include changing text color or moving the cursor.
* You can use `echo` to test these codes manually.
* Escape characters are prefixed with `0x1B` or `033` in octal form. This is written as `\x1b` when using `echo`.
* The code then follows the prefix ( `\x1b[2m`  ) which is followed by whatever text stream.

```bash
echo "a\x1b[2mb\x1b[0m"
```


### Tput
* Due to varying terminal control languages you may use a tool like `tput` as an intermediary to the terminal.
* It detects the terminal and generates necessary escape codes by looking them up the `terminfo` database.
* It uses acronyms called `capability names` and parameters to do this.

```bash
echo "a$(tput dim)b$(tput sgr0)"
```

### Color codes
* Basic foreground colors start from `30m` to `39m`
* Basic background colors start from `40m` to `49m`
* Reset is `0m` and tells the terminal where to stop the effects of the previous code.
__NB: getting more colors depends on your terminal type.__

### Text formatting
* Underline is `4m` and `24m` for unsetting.
* Bold is `1m`
* Emphasis ("Italics") is `3m`
* Dim is `2m`

## Design and Usage
* `var sometext = chroma.red(chroma.underline("Hello Word"));`
* `sometext` will contain "\x1b[31m\x1b[4mHello Word\x1b[24m\x1b[0m"

To use, it copy it into your project and do:
```javascript
var chroma = require("./chroma.js");
```


## Test

```bash
node test.js
```

## TODO
- [ ] Make it work more like `chroma.underline.red("Hello Word");`
- [ ] Make an npm module.
