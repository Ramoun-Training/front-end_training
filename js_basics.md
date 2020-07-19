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

> **Note**: The reason to place the <code>&lt;script&gt;</code> element near the bottom of the HTML file is that **the browser reads code in the order it appears in the file**.

> If the JavaScript loads first and it is supposed to affect the HTML that hasn't loaded yet, there could be problems. Placing JavaScript near the bottom of an HTML page is one way to accommodate this dependency. To learn more about alternative approaches, see [Script loading strategies](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Script_loading_strategies).
</details>

<details>
<summary><b><u>What happened?:</u></b></summary>

The heading text changed to Hello world! using JavaScript. You did this by using a function called <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">querySelector()</a></code> to grab a reference to your heading, and then store it in a variable called <code>myHeading</code>. This is similar to what we did using CSS selectors. When you want to do something to an element, you need to select it first.

Following that, the code set the value of the <code>myHeading</code> variable's <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent">textContent</a></code> property (which represents the content of the heading) to Hello world!.
</details>