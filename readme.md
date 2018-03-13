<h1>About this project</h1>
<p> 
This is a project made for my education. This project only uses html and css. no javascript. 
To make the use of css more convenient, Gulp is installed as a compiler for scss.
</p>

<h1>About the Gulp settings</h1>
<p>
Gulp is setup to look for a file located at `sass/main.scss`, this file is the entry for all scss files. All other scss files are included from in this single file.
The compiled css placed by file name in the `css` folder, currently this is one file called `main.css`.

Once the production command is executed, this file wil be completely recompiled with minified css. This mean there are no changes needed to the html after a production run.
</p>

<p>
<h1>Installation </h1>
<p>
Clone this repository to a location of your chosing. after the repo has been clones run the following command.
</p>

`yarn install`
<h1>Commands</h1>
<p>The following commands have been preset in the Gulpfile.js</p>

<h3>Start a single run gulp compile</h3>
<p>This wil compile all scss code in to css.</p>

`gulp styles`
<h3>Start gulp watcher</h3>
<p>This will contiually update your css after you have saved a change in a scss file.</p>

`gulp`
<h3>Start a gulp production run.</h3>
<p>This wil run a production version of the compiler, this means the css code will be minified.</p>

`gulp production`