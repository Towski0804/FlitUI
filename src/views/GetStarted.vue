<template>
  <article class="markdown-body">
    <h1>Getting Started</h1>

    <p>
      Please first <a href="#/doc/install">install</a> this component library.
    </p>
    <p>Then, import the components and the css file where you need them:</p>
    <pre><code>import {Button, Tabs, Switch, Dialog} from "flitui"</code></pre>
    <pre><code>import 'cws-flitui/dist/style.css'</code></pre>
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

<style lang="scss" scoped>
@media (max-width: 500px) {
  .markdown-body {
    margin: 10px auto;
    max-width: 92vw;
  }
}
</style>
