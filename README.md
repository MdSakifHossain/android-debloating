# How to debloat you android (without pc)


## Table of Contents

* [Introduction](#Introduction)
* [Prerequisites](#Prerequisites)
* [Steps](#steps)
* [Conclusion](#Conclusion)


## Introduction

Bloatware is software that is pre-installed on a device, often by the manufacturer or carrier. It can be used to promote the manufacturer's brand or services, or to generate revenue through advertising. Bloatware can often be removed, but this process can be difficult and time-consuming, especially if you don't have a PC.

>Note: This method is safe and will not damage your device.


## Prerequisites

* An Android phone ( Version >= 11 )
* A Wireless Network


## Steps

#### 1. Open Termux

#### 2. Update the repositories.
```bash
apt update && apt upgrade -y
```

#### 3. Install git
```bash
apt install git -y
```

#### 4. Install NodeJs
```bash
apt install nodejs -y
```

>Note: I'm pretty much familiar with `JavaScript` that's why im installing `NodeJs` and written some stuff on `Js`. You can use any language of your choice. Like, python, go, etc.

#### 5. Clone this Repo
```bash
git clone https://github.com/MdSakifHossain/android-debloating
```

#### 6. cd into that Repo
```bash 
cd android-debloating
```

#### 7. Open "Package Name Viewer 2.0"
Select every app that you wanna uninstall. Click on the copy button. 

#### 8. Open a Text Editor of your choice.
Open the cloned Repo. Open the "package-info.txt" file. This file should be empty. If not then, clear and paste the **copied** text from "package name Viewer 2.0" and save it. You may wanna look at that later I guess.

#### 9. Open a browser. (Optional)
Ask `GPT` or `Bard` to make that data into an `array`. Here I'm naming that `array` as `packageList`. 

>Note: you can do this by yourself. But, I'm lazy AF..

#### 10. Copy and Paste
Copy that `array` and Paste it on the `utility.js` file which is located on the cloned Repo. 
>Note: make sure that you have exported that `array` like this example below 👇
```js
export const packageList = [...]
```

#### 11. Open Shizuku
Setup the Shizuku app (Wireless debugging). The app is pretty self explainatory. Read the app. There's enough information for the setup.

#### 12. Connect Shizuku with Termux
You have to Authorize Termux from Shizuku. Then, there's an option called `Use Shizuku in in terminal apps`. Go to that section and do as the steps are written. There are only 3 steps. 
You just have to do only first 2 steps. There's some catch. So, do as I say. Remember that you have to export the files to the cloned directory.

#### 13. Open Termux
Fire up Termux and navigate to that cloned directory.

#### 14. Use NodeJs
```bash
node index.js
```

This command will generate a bash script called `uninstall`. And, output this on the `terminal`.

```
script creation successful..!!
script writing successful..!!
```

#### 15. Run `rish`
```bash
sh rish
```

#### 16. Run `uninstall`
```bash
sh uninstall
```

#### 17. Exit that session
By typing the code below 👇
```bash
exit
```

#### 18. Restart your Android
Now everything is fakam fast..
Your phone is Debloated.

You're welcome.. 🤗🥸

## Conclusion
Debloating your Android without a PC is a safe and easy way to improve the performance and battery life of your device. By following the steps in this Readme, you can quickly and easily remove bloatware from your Android phone or tablet.
