# JS_Basics

### What is JS?

<details>
<summary><b><u>Brief about JS:</u></b></summary>

[JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) ("JS" for short) is a full-fledged [dynamic programming language](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_programming_language) that can add interactivity to a website. It was invented by Brendan Eich (co-founder of the Mozilla project), the Mozilla Foundation, and the Mozilla Corporation.

JavaScript is **versatile** and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!

JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort. These include:

<ul>
<li>Browser Application Programming Interfaces ([APIs](https://developer.mozilla.org/en-US/docs/Glossary/API)) built into web browsers, providing functionality such as dynamically creating HTML and setting CSS styles; collecting and manipulating a video stream from a user's webcam, or generating 3D graphics and audio samples.</li>
<li>Third-party APIs that allow developers to incorporate functionality in sites from other content providers, such as Twitter or Facebook.</li>
<li>Third-party frameworks and libraries that you can apply to HTML to accelerate the work of building sites and applications.</li>
</ul>
It's outside the scope of this article—as a light introduction to JavaScript—to present the details of how the core JavaScript language is different from the tools listed above. You can learn more in MDN's [JavaScript learning area](https://developer.mozilla.org/en-US/docs/Learn/JavaScript), as well as in other parts of MDN.
The section below introduces some aspects of the core language, and offers an opportunity to play with a few browser API features too. Have fun!

</details>

### A Hello world! example

<details>
<summary><b><u>Getting our hands dirty:</u></b></summary>

JavaScript is one of the most popular modern web technologies! As your JavaScript skills grow, your websites will enter a new dimension of power and creativity.

However, getting comfortable with JavaScript is more challenging than getting comfortable with HTML and CSS. You may have to start small, and progress gradually. To begin, let's examine how to add JavaScript to your page for creating a Hello world! example. (Hello world! [is the standard for introductory programming examples](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

<ol>
	<li>Go to your test site and create a new folder named <code>scripts</code>. Within the scripts folder, create a new file called <code>main.js</code>, and save it.</li>
	<li>In your <code>index.html</code> file, enter this code on a new line, just before the closing <code>&lt;/body&gt;</code> tag:

```html
<script src="scripts/main.js"></script>
```

</li>

<li>This is doing the same job as the <a href="/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a> element for CSS. It applies the JavaScript to the page, so it can have an effect on the HTML (along with the CSS, and anything else on the page).</li>

<li>Add this code to the <code>main.js</code> file:

```javascript
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
```

</li>

<li>Make sure the HTML and JavaScript files are saved. Then load <code>index.html</code> in your browser. You should see something like this:<img alt="" src="https://mdn.mozillademos.org/files/9543/hello-world.png" style="display: block; height: 236px; margin: 0px auto; width: 806px;"></li>
</ol>

> **Note**: The reason to place the <code>&lt;script&gt;</code> element near the bottom of the HTML file is that **the browser reads code in the order it appears in the file**.

> If the JavaScript loads first and it is supposed to affect the HTML that hasn't loaded yet, there could be problems. Placing JavaScript near the bottom of an HTML page is one way to accommodate this dependency. To learn more about alternative approaches, see [Script loading strategies](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Script_loading_strategies).

</details>

<details>
<summary><b><u>What happened?:</u></b></summary>

The heading text changed to Hello world! using JavaScript. You did this by using a function called <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">querySelector()</a></code> to grab a reference to your heading, and then store it in a variable called <code>myHeading</code>. This is similar to what we did using CSS selectors. When you want to do something to an element, you need to select it first.

Following that, the code set the value of the <code>myHeading</code> variable's <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent">textContent</a></code> property (which represents the content of the heading) to Hello world!.

> **Note**: Both of the features you used in this exercise are parts of the [Document Object Model (DOM) API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), which has the capability to manipulate documents.

</details>

### Language basics crash course

<details>
<summary><b><u>Basics de lingo:</u></b></summary>

To give you a better understanding of how JavaScript works, let's explain some of the core features of the language. It's worth noting that these features are common to all programming languages. If you master these fundamentals, you have a head start on coding in other languages too!

> **Important**: In this article, try entering the example code lines into your JavaScript console to see what happens. For more details on JavaScript consoles, see [Discover browser developer tools](https://developer.mozilla.org/en-US/Learn/Discover_browser_developer_tools).

</details>

<details>
<summary><b><u>Variables:</u></b></summary>

[Variables](https://developer.mozilla.org/en-US/docs/Glossary/Variable) are containers that store values. You start by declaring a variable with the <code>var</code> (less recommended, dive deeper for the explanation) or the <code>let</code> keyword, followed by the name you give to the variable:

```javascript
let myVariable;
```

> **Note**: A semicolon at the end of a line indicates where a statement ends. It is only required when you need to separate statements on a single line. However, some people believe it's good practice to have semicolons at the end of each statement. There are other rules for when you should and shouldn't use semicolons. For more details, see [Your Guide to Semicolons in JavaScript](http://news.codecademy.com/your-guide-to-semicolons-in-javascript/).

> **Note**: You can name a variable nearly anything, but there are some restrictions. (See [this section about naming rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variables).) If you are unsure, you can [check your variable name](https://mothereff.in/js-variables) to see if it's valid.

> **Note** JavaScript is case sensitive. This means <code>myVariable</code> is not the same as <code>myvariable</code>. If you have problems in your code, check the case!

> **Note**: For more details about the difference between <code>var</code> and <code>let</code>, see [The difference between var and let](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#The_difference_between_var_and_let).

After declaring a variable, you can give it a value:

```javascript
myVariable = "Bob";
```

Also, you can do both these operations on the same line:

```javascript
let myVariable = "Bob";
```

You retrieve the value by calling the variable name:

```javascript
myVariable;
```

After assigning a value to a variable, you can change it later in the code:

```javascript
let myVariable = "Bob";
myVariable = "Steve";
```

Note that variables may hold values that have different [data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures):

<table style="width:100%" border="2">
  <tr>
    <th>Variable</th>
    <th>Explanation</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><a href="https://developer.mozilla.org/en-US/docs/Glossary/String">String</a></td>
    <td>This is a sequence of text known as a string. To signify that the value is a string, enclose it in single quote marks.</td>
    <td><code>let myVariable = 'Bob';</code>    
  </tr>
  <tr>
    <td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Number">Number</a></td>
    <td>This is a number. Numbers don't have quotes around them.</td>
    <td><code>let myVariable = 10;</code></td>
  </tr>
  <tr>
    <td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Boolean">Boolean</a></td>
    <td>This is a True/False value. The words <code>true</code> and <code>false</code> are special keywords that don't need quote marks.</td>
    <td><code>let myVariable = true;</code></td>
  </tr>
  <tr>
    <td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Array">Array</a></td>
    <td>This is a structure that allows you to store multiple values in a single reference.</td>
    <td><code>let myVariable = [1,'Bob','Steve',10];</code><br>
    Refer to each member of the array like this:
    <code>myVariable[0]</code>, <code>myVariable[1]</code>, etc.</td>
  </tr>
  <tr>
    <td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Object">Object</a></td>
    <td>This can be anything. Everything in JavaScript is an object, and can be stored in a variable. Keep this in mind as you learn.</td>
    <td><code>let myVariable = document.querySelector('h1');</code><br>
    All of the above examples too.</td>
  </tr>
</table>

So why do we need variables? Variables are necessary to do anything interesting in programming. If values couldn't change, then you couldn't do anything dynamic, like personalize a greeting message or change an image displayed in an image gallery.

</details>

<details>
<summary><b><u>Comments:</u></b></summary>

Comments are snippets of text that can be added along with code. The browser ignores text marked as comments. You can write comments in JavaScript just as you can in CSS:

```javascript
/*
Everything in between is a comment.
*/
```

If your comment contains no line breaks, it's an option to put it behind two slashes like this:

```javascript
// This is a comment
```

</details>

<details>
<summary><b><u>Operators:</u></b></summary>
An <code>operator</code> is a mathematical symbol which produces a result based on two values (or variables). In the following table you can see some of the simplest operators, along with some examples to try in the JavaScript console.

<table style="width:100%" border="2">
	<thead>
		<tr>
			<th>Operator</th>
			<th>Explanation</th>
			<th>Symbol(s)</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Addition</th>
			<td>Add two numbers together or combine two strings.</td>
			<td><code>+</code></td>
			<td><code>6 + 9;<br>
			'Hello ' + 'world!';</code></td>
		</tr>
		<tr>
			<th>Subtraction, Multiplication, Division</th>
			<td>These do what you'd expect them to do in basic math.</td>
			<td><code>-</code>, <code>*</code>, <code>/</code></td>
			<td><code>9 - 3;<br>
			8 * 2; // multiply in JS is an asterisk<br>
			9 / 3;</code></td>
		</tr>
		<tr>
			<th>Assignment</th>
			<td>As you've seen already: this assigns a value to a variable.</td>
			<td><code>=</code></td>
			<td><code>let myVariable = 'Bob';</code></td>
		</tr>
		<tr>
			<th>Equality</th>
			<td>This performs a test to see if two values are equal. It returns a <code>true</code>/<code>false</code> (Boolean) result.</td>
			<td><code>===</code></td>
			<td><code>let&nbsp;myVariable = 3;<br>
			myVariable === 4;</code></td>
		</tr>
		<tr>
			<th>Not, Does-not-equal</th>
			<td>This returns the logically opposite value of what it precedes. It turns a <code>true</code> into a <code>false</code>, etc.. When it is used alongside the Equality operator, the negation operator tests whether two values are <em>not</em> equal.</td>
			<td><code>!</code>, <code>!==</code></td>
			<td>
			<p>For "Not", the basic expression is <code>true</code>, but the comparison returns <code>false</code> because we negate it:</p>
			<p><code>let&nbsp;myVariable = 3;<br>
			!(myVariable === 3);</code></p>
			<p>"Does-not-equal" gives basically the same result with different syntax. Here we are testing "is <code>myVariable</code> NOT equal to 3". This returns<code> false</code> because <code>myVariable</code> IS equal to 3:</p>
			<p><code>let&nbsp;<code>myVariable = 3;</code><br>
			myVariable !== 3;</code></p>
			</td>
		</tr>
	</tbody>
</table>

There are a lot more operators to explore, but this is enough for now. See [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) for a complete list.

> <p><strong>Note</strong>: Mixing data types can lead to some strange results when performing calculations. Be careful that you are referring to your variables correctly, and getting the results you expect. For example, enter <code>'35' + '25'</code> into your console. Why don't you&nbsp;get the result you expected? Because the quote marks turn the numbers into strings, so&nbsp;you've ended up concatenating strings rather than adding numbers. If you enter, <code>35 + 25</code> you'll get the total of the two numbers.</p>

> **Note**: javascript supports implicit conversion from number to string.

> **Note**: <code>3 + 5 + ""</code> try this code in the console

</details>

<details>
<summary><b><u>Conditionals:</u></b></summary>

Conditionals are code structures used to test if an expression returns true or not. A very common form of conditionals is the <code>if ... else</code> statement. For example:

```javascript
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite...");
}
```

<p>The expression inside the <code>if( ... )</code> is the test. This uses the identity operator (as described above) to compare the variable <code>iceCream</code> with the string <code>chocolate</code> to see if the two are equal. If this comparison returns <code>true</code>, the first block of code runs. If the comparison is not true, the second block of code—after the <code>else</code> statement—runs instead.</p>
</details>

<details>
<summary><b><u>Functions:</u></b></summary>

[Functions](https://developer.mozilla.org/en-US/docs/Glossary/Function) are a way of packaging functionality that you wish to <mark>reuse</mark>. It's possible to define a body of code as a function that executes when you call the function name in your code. This is a good alternative to repeatedly writing the same code. You
have already seen some uses of functions previously. For example:

```javascript
let myVariable = document.querySelector("h1");
```

```javascript
alert("hello!");
```

<p>These functions, <code>document.querySelector</code> and <code>alert</code>, are built into the browser.</p>

<p>If you see something which looks like a variable name, but it's followed by parentheses— <code>()</code> —it is likely a function. Functions often take <a href="/en-US/docs/Glossary/Argument">arguments</a>: bits of data they need to do their job. Arguments go&nbsp;inside the parentheses, separated by commas if there is more than one argument.</p>

<p>For example, the <code>alert()</code> function makes a pop-up box appear inside the browser window, but we need to give it a string as an argument to tell the function&nbsp;what message to display.</p>

<p>You can also define your own functions. In the next example, we create a simple function which takes two numbers as arguments and multiplies them:</p>

```javascript
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

Try running this in the console; then test with several arguments. For example:

```javascript
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> <p><strong>Note</strong>: The <a href="/en-US/docs/Web/JavaScript/Reference/Statements/return"><code>return</code></a> statement tells the browser to return the <code>result</code> variable out of the function so it is available to use. This is necessary because variables defined inside functions are only available inside those functions. This is called variable <a href="/en-US/docs/Glossary/Scope">scoping</a>. (Read more about <a href="/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Variable_scope">variable scoping</a>.)</p>

</details>

<details>
<summary><b><u>Events:</u></b></summary>

Real interactivity on a website requires events handlers. These are code structures that listen for activity in the browser, and run code in response. The most obvious example is handling the [click event](https://developer.mozilla.org/en-US/docs/Web/Events/click), which is fired by the browser when you click on something with your mouse. To demonstrate this, enter the following into your console, then click on the current webpage:

```javascript
document.querySelector("html").onclick = function () {
  alert("Ouch! Stop poking me!");
};
```

<p><strong>There are many ways to attach an event handler to an element</strong>. Here&nbsp;we select the <a href="/en-US/docs/Web/HTML/Element/html" title="The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element."><code>&lt;html&gt;</code></a> element, setting its <code><a href="/en-US/docs/Web/API/GlobalEventHandlers.onclick">onclick</a></code> handler property equal to an anonymous (i.e. nameless) function, which contains the code we want the click event to run.</p>

Note that

```javascript
document.querySelector("html").onclick = function () {};
```

is equivalent to

```javascript
let myHTML = document.querySelector("html");
myHTML.onclick = function () {};
```

It's just shorter.

</details>

### Supercharging an example website

<details>
<summary><b><u>Adding an image changer:</u></b></summary>

In this section, you will learn how to use JavaScript and DOM API features to alternate the display of one of two images. This change will happen as a user clicks the displayed image.

1. Choose an image you want to feature on your example site. Ideally, the image will be the same size as the image you added previously, or as close as possible.
2. Save this image in your `images` folder.
3. Rename the image firefox2.png.
4. Add the JavaScript below to your `main.js` file. (Also delete your Hello world! JavaScript from the earlier exercise.)

   ```javascript
   let myImage = document.querySelector("img");

   myImage.onclick = function () {
     let mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   };
   ```

5. Save all files and load `index.html` in the browser. Now when you click the image, it should change to the other one.

<p>This is what happened. You stored a reference to your <a href="/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a> element in the <code>myImage</code> variable. Next, you made this variable's <code>onclick</code> event handler property equal to a function with no name (an "anonymous" function). So every time this&nbsp;element is clicked:</p>

<ol>
	<li>The code retrieves the value of the image's <code>src</code> attribute.</li>
	<li>The code uses a conditional to check if the <code>src</code> value is equal to the path of the original image:
	<ol>
		<li>If it is, the code changes the <code>src</code> value to the path of the second image, forcing the other image to be loaded inside the <a href="/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a> element.</li>
		<li>If it isn't (meaning it must already have changed), the <code>src</code> value swaps back to the original image path, to the original state.</li>
	</ol>
	</li>
</ol>

> **Note**: 
> <code>getAttribute()</code> returns exactly what was in the HTML. It may be a relative URL.
>
> <code>.src</code> returns a fully qualified absolute URL, even if what was in the HTML was a relative URL.

> **For More Info**: visit [this_link](https://stackoverflow.com/questions/3919291/when-to-use-setattribute-vs-attribute-in-javascript)

</details>

<details>
<summary><b><u>Adding a personalized welcome message:</u></b></summary>

Next, let's change the page title to a personalized welcome message when the user first visits the site. This welcome message will persist. Should the user leave the site and return later, we will save the message using the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API). We will also include an option to change the user, and therefore, the welcome message.

<ol>
	<li>In <code>index.html</code>, add the following line just before the <a href="/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a> element:

```html
<button>Change user</button>
```

</li>

<li>In <code>main.js</code>, place the following code at the bottom of the file, exactly as it is written. This takes references to the new button and the heading, storing each inside variables:

```javascript
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
```

</li>

<li>Add the function below to set the personalized greeting. This won't do anything yet, but this will change soon.

```javascript
function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}
```

</li>

The <code>setUserName()</code> function contains a <a href="/en-US/docs/Web/API/Window.prompt"><code>prompt()</code></code></a> function, which displays a dialog box, similar to <code>alert()</code>. This <code>prompt()</code> function does more than <code>alert()</code>, asking the user to enter data, and storing it in a variable after the user clicks <em>OK.</em>&nbsp;In this case, we are asking the user to enter a name. Next, the code calls on an API <code>localStorage</code>, which allows us to store data in the browser&nbsp;and retrieve it later. We use localStorage's <code>setItem()</code> function to create and store a data item called <code>'name'</code>, setting its value to the <code>myName</code> variable which contains the user's entry for the name. Finally, we set the <code>textContent</code> of the heading to a string, plus the user's newly stored name.
<br>

<li>Add the <code>if ... else</code> block (below). We could call this initialization code, as it structures the app when it first loads.

```javascript
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
```

</li>

This first line of this block uses the negation operator (logical NOT, represented by the <code>!</code>) to check whether the <code>name</code> data exists. If not,&nbsp;the <code>setUserName()</code> function runs to create it. If it exists (that is, the user set a user name during a previous visit), we retrieve the stored name using <code>getItem()</code> and set the <code>textContent</code> of the heading to a string, plus the user's name, as we did inside <code>setUserName()</code>.</li>

<li>Put this <code>onclick</code> event handler (below) on the button. When clicked, <code>setUserName()</code> runs. This allows the user to enter a different name by pressing the button.
	
```javascript
myButton.onclick = function() {
    setUserName();
}    
```
</li>
</ol>

</details>

<details>
<summary><b><u>A user name of null?:</u></b></summary>

<p>When you run the example and get the dialog box that prompts you to enter your user name, try pressing the <em>Cancel</em> button. You should end up with a title that reads <em>Mozilla is cool, null</em>. This happens because—when you cancel the prompt—the value is set as <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a></code>. <em>Null</em> is a special value in JavaScript that refers to the absence of a value.</p>

Also, try clicking <em>OK</em> without entering a name. You should end up with a title that reads <em>Mozilla is cool</em>, for fairly obvious reasons.

To avoid these problems, you could check that the user hasn't entered a blank name. Update your <code>setUserName()</code> function to this:

```javascript
function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}
```

<p>In human language, this means: If <code>myName</code> has no value, run <code>setUserName()</code> again from the start. If it does have a value (if the above statement is not true), then store the value in <code>localStorage</code> and set it as the heading's text.</p>

</details>

### Imporntant Links

- [Dynamic client-side scripting with JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

- [Learn JavaScript](https://learnjavascript.online/):
  This is an excellent resource for aspiring web developers! Learn JavaScript in an interactive environment, with short lessons and interactive tests, guided by an automated assessment. The first 40 lessons are free. The complete course is available for a small one-time payment.

<!--
<details>
<summary><b><u>heading:</u></b></summary>

</details> -->
