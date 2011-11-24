Ext.data.JsonP.Ext_fx_animation_SlideOut({"requires":[],"files":[{"href":"SlideOut.html#Ext-fx-animation-SlideOut","html_filename":"SlideOut.html","linenr":1,"filename":"/Users/nickpoulden/Projects/sencha/SDK/touch/src/fx/animation/SlideOut.js"}],"mixedInto":[],"meta":[],"static":false,"allMixins":[],"superclasses":["Ext.Base","Ext.fx.animation.Abstract","Ext.fx.animation.Slide","Ext.fx.animation.SlideOut"],"tagname":"class","xtypes":{},"alias":null,"extends":"Ext.fx.animation.Slide","uses":[],"code_type":"ext_define","statics":{"cfg":[],"property":[],"method":[{"template":false,"static":true,"owner":"Ext.Base","tagname":"method","protected":false,"name":"addMembers","id":"static-method-addMembers","deprecated":null,"required":null},{"template":false,"static":true,"owner":"Ext.Base","tagname":"method","protected":false,"name":"addStatics","id":"static-method-addStatics","deprecated":null,"required":null},{"template":false,"static":true,"owner":"Ext.Base","tagname":"method","protected":false,"name":"create","id":"static-method-create","deprecated":null,"required":null},{"template":false,"static":true,"owner":"Ext.Base","tagname":"method","protected":false,"name":"createAlias","id":"static-method-createAlias","deprecated":null,"required":null},{"template":false,"static":true,"owner":"Ext.Base","tagname":"method","protected":false,"name":"getName","id":"static-method-getName","deprecated":null,"required":null},{"template":false,"static":true,"owner":"Ext.Base","tagname":"method","protected":false,"name":"override","id":"static-method-override","deprecated":{"tagname":"deprecated","text":"<p>Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n","version":"4.1.0","doc":null},"required":null}],"event":[],"css_var":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><a href='#!/api/Ext.fx.animation.Abstract' rel='Ext.fx.animation.Abstract' class='docClass'>Ext.fx.animation.Abstract</a><div class='subclass '><a href='#!/api/Ext.fx.animation.Slide' rel='Ext.fx.animation.Slide' class='docClass'>Ext.fx.animation.Slide</a><div class='subclass '><strong>Ext.fx.animation.SlideOut</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/SlideOut.html#Ext-fx-animation-SlideOut' target='_blank'>SlideOut.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-direction' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.animation.Slide' rel='Ext.fx.animation.Slide' class='definedIn docClass'>Ext.fx.animation.Slide</a><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-direction' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-cfg-direction' class='name expandable'>direction</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The direction of which the slide animates ...</div><div class='long'><p>The direction of which the slide animates</p>\n<p>Defaults to: <code>&quot;right&quot;</code></p></div></div></div><div id='cfg-offset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.animation.Slide' rel='Ext.fx.animation.Slide' class='definedIn docClass'>Ext.fx.animation.Slide</a><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-offset' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-cfg-offset' class='name expandable'>offset</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The offset that the animation should go offscreen before entering (or when exiting) ...</div><div class='long'><p>The offset that the animation should go offscreen before entering (or when exiting)</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-out' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.animation.Slide' rel='Ext.fx.animation.Slide' class='definedIn docClass'>Ext.fx.animation.Slide</a><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-out' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-cfg-out' class='name expandable'>out</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>True if you want to make this animation slide out, instead of slide in. ...</div><div class='long'><p>True if you want to make this animation slide out, instead of slide in.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-callOverridden' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-property-callOverridden' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-callOverridden' class='name expandable'>callOverridden</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected-signature'>protected</strong><strong class='deprecated-signature'>deprecated</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<div class='deprecated'><p>This property has been <strong>deprecated</strong> </p><p>as of 4.1. Use <a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">callParent</a> instead.</p>\n</div></div></div></div><div id='property-self' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-property-self' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependentOL on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div id='m-method'><h3 class='members-title'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-callParent' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callParent' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> Ext.define('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n Ext.define('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> Ext.define('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> Ext.define('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> Ext.define('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the parent method</p>\n</div></li></ul></div></div></div><div id='method-getDirection' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.animation.Slide' rel='Ext.fx.animation.Slide' class='definedIn docClass'>Ext.fx.animation.Slide</a><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-direction' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getDirection' class='name expandable'>getDirection</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns the value of direction. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-direction\" rel=\"Ext.fx.animation.Slide-cfg-direction\" class=\"docClass\">direction</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getInitialConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.animation.Slide' rel='Ext.fx.animation.Slide' class='definedIn docClass'>Ext.fx.animation.Slide</a><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-offset' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getOffset' class='name expandable'>getOffset</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Returns the value of offset. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-offset\" rel=\"Ext.fx.animation.Slide-cfg-offset\" class=\"docClass\">offset</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOut' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.animation.Slide' rel='Ext.fx.animation.Slide' class='definedIn docClass'>Ext.fx.animation.Slide</a><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-out' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getOut' class='name expandable'>getOut</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns the value of out. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-out\" rel=\"Ext.fx.animation.Slide-cfg-out\" class=\"docClass\">out</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-initConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-setDirection' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.animation.Slide' rel='Ext.fx.animation.Slide' class='definedIn docClass'>Ext.fx.animation.Slide</a><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-direction' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-setDirection' class='name expandable'>setDirection</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> direction</span> )</div><div class='description'><div class='short'>Sets the value of direction. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-direction\" rel=\"Ext.fx.animation.Slide-cfg-direction\" class=\"docClass\">direction</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>direction</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.animation.Slide' rel='Ext.fx.animation.Slide' class='definedIn docClass'>Ext.fx.animation.Slide</a><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-offset' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-setOffset' class='name expandable'>setOffset</a>( <span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> offset</span> )</div><div class='description'><div class='short'>Sets the value of offset. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-offset\" rel=\"Ext.fx.animation.Slide-cfg-offset\" class=\"docClass\">offset</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>offset</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOut' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.animation.Slide' rel='Ext.fx.animation.Slide' class='definedIn docClass'>Ext.fx.animation.Slide</a><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-out' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-setOut' class='name expandable'>setOut</a>( <span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> out</span> )</div><div class='description'><div class='short'>Sets the value of out. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-out\" rel=\"Ext.fx.animation.Slide-cfg-out\" class=\"docClass\">out</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>out</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-statics' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-addMembers' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-addMembers' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-addMembers' class='name expandable'>addMembers</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> members</span> )<strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Add methods / properties to the prototype of this class. ...</div><div class='long'><p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-addStatics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-addStatics' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-addStatics' class='name expandable'>addStatics</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Add / override static properties of this class. ...</div><div class='long'><p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-create' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-create' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-create' class='name expandable'>create</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Create a new instance of this Class. ...</div><div class='long'><p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>the created instance.</p>\n</div></li></ul></div></div></div><div id='static-method-createAlias' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-createAlias' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-createAlias' class='name expandable'>createAlias</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> alias, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> origin</span> )<strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Create aliases for existing prototype methods. ...</div><div class='long'><p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The new method name, or an object to set multiple aliases. See\n<a href=\"#!/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n</div></li><li><span class='pre'>origin</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The original method name</p>\n</div></li></ul></div></div></div><div id='static-method-getName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-getName' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Get the current class' name in string format. ...</div><div class='long'><p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='static-method-override' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-override' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-override' class='name expandable'>override</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static-signature'>static</strong><strong class='deprecated-signature'>deprecated</strong></div><div class='description'><div class='short'>Override members of this class. ...</div><div class='long'><p>Override members of this class. Overridden methods can be invoked via\n<a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">callParent</a>.</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n<p>As of 4.1, direct use of this method is deprecated. Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>\ninstead:</p>\n\n<pre><code>Ext.define('My.CatOverride', {\n    override: 'My.Cat',\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n</code></pre>\n\n<p>The above accomplishes the same result but can be managed by the <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a>\nwhich can properly order the override and its target class and the build process\ncan determine whether the override is needed based on the required state of the\ntarget class (My.Cat).</p>\n<div class='deprecated'><p>This method has been <strong>deprecated</strong> since 4.1.0</p><p>Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n</div><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The properties to add to this class. This should be\nspecified as an object literal containing one or more properties.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this class</p>\n</div></li></ul></div></div></div></div></div></div></div>","protected":false,"singleton":false,"members":{"property":[{"template":null,"static":false,"owner":"Ext.Base","tagname":"property","protected":true,"name":"callOverridden","id":"property-callOverridden","deprecated":{"tagname":"deprecated","text":"<p>as of 4.1. Use <a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">callParent</a> instead.</p>\n","version":null,"doc":null},"required":null},{"template":null,"static":false,"owner":"Ext.Base","tagname":"property","protected":true,"name":"self","id":"property-self","deprecated":null,"required":null}],"cfg":[{"template":null,"static":false,"owner":"Ext.fx.animation.Slide","tagname":"cfg","protected":false,"name":"direction","id":"cfg-direction","deprecated":null,"required":false},{"template":null,"static":false,"owner":"Ext.fx.animation.Slide","tagname":"cfg","protected":false,"name":"offset","id":"cfg-offset","deprecated":null,"required":false},{"template":null,"static":false,"owner":"Ext.fx.animation.Slide","tagname":"cfg","protected":false,"name":"out","id":"cfg-out","deprecated":null,"required":false}],"method":[{"template":false,"static":false,"owner":"Ext.Base","tagname":"method","protected":true,"name":"callParent","id":"method-callParent","deprecated":null,"required":null},{"template":null,"static":null,"owner":"Ext.fx.animation.Slide","tagname":"method","protected":null,"name":"getDirection","id":"method-getDirection","deprecated":null,"required":null},{"template":false,"static":false,"owner":"Ext.Base","tagname":"method","protected":false,"name":"getInitialConfig","id":"method-getInitialConfig","deprecated":null,"required":null},{"template":null,"static":null,"owner":"Ext.fx.animation.Slide","tagname":"method","protected":null,"name":"getOffset","id":"method-getOffset","deprecated":null,"required":null},{"template":null,"static":null,"owner":"Ext.fx.animation.Slide","tagname":"method","protected":null,"name":"getOut","id":"method-getOut","deprecated":null,"required":null},{"template":false,"static":false,"owner":"Ext.Base","tagname":"method","protected":true,"name":"initConfig","id":"method-initConfig","deprecated":null,"required":null},{"template":null,"static":null,"owner":"Ext.fx.animation.Slide","tagname":"method","protected":null,"name":"setDirection","id":"method-setDirection","deprecated":null,"required":null},{"template":null,"static":null,"owner":"Ext.fx.animation.Slide","tagname":"method","protected":null,"name":"setOffset","id":"method-setOffset","deprecated":null,"required":null},{"template":null,"static":null,"owner":"Ext.fx.animation.Slide","tagname":"method","protected":null,"name":"setOut","id":"method-setOut","deprecated":null,"required":null},{"template":false,"static":false,"owner":"Ext.Base","tagname":"method","protected":true,"name":"statics","id":"method-statics","deprecated":null,"required":null}],"css_var":[],"event":[],"css_mixin":[]},"subclasses":[],"inheritable":false,"private":true,"name":"Ext.fx.animation.SlideOut","mixins":[],"deprecated":null,"id":"class-Ext.fx.animation.SlideOut","component":false,"alternateClassNames":[]});