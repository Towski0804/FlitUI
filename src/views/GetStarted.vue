<template>
  <article>
    <h1>Getting Started</h1>

    <p>
      Please first <a href="#/doc/install">install</a> this component library.
    </p>
    <p>Then, include the following code in your project:</p>
    <pre><code>import {Button, Tabs, Switch, Dialog} from "flitui"</code></pre>
    You can now use the components provided by this library.

    <h2>Vue Single File Component</h2>
    <p>Code example:</p>
    <pre>
      <code>
&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;Button&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Switch, Dialog} from "flitui"
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </code>
</pre>
  </article>
</template>
