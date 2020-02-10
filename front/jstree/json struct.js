/** IMPORTANT NOTES */
/*
id key of a node must be a unique string.
weird things will happen if two nodes have the same id key, here are some of them:
	only the node that was defined latter in the data structure is present in the tree.
	previous nodes are visible in tree but they get deleted upon clicking on them.

do not use single quotes.
*/

// expected format of the node (there are no required fields)
{
	id          : "string"		// will be autogenerated if omitted (must be unique)
	text        : "string"		// node text
	icon        : "string"		// string for custom
	state       : {
		opened    : false		    // is the node open
		disabled  : false		    // is the node disabled
		selected  : false		    // is the node selected
	},
	children    : []			    // array of strings or objects
	li_attr     : {}			    // attributes for the generated <li> node
	a_attr      : {}			    // attributes for the generated <a> node
}

// everything goes inside an array:
[
	"an item",
	{
		"text": "another item",
		"children": [
			...
		],
		"icon":
			"images/icon.png" |         // an image path (relative to index.html)
			"jstree-icon jstree-file" | // added to the <i> used to represent the icon
			false                       // render the node without icon
			
	}
]

// example:

[
	"root-level childless",
	"root-level childless",
	{
		"text": "root-level with childrens",
		"children": [
			"2nd-level childless",
			{
				"text": "2nd-level with 1 children",
				"children": [
					"3rd-level childless"
				]
			}
		]
	}
]


// another example:
[
	"Simple root node",
	{
		"text" : "Root node 2",
		"state" : {
			"opened" : true,
			"selected" : true
		},
		"children" : [
			{
				"text" : "Child 1"
			},
			"Child 2"
		]
	}
]


// another example:
[
	{
		"text": "root_node",
		"children": [
			{
				"text": "2nd layer node",
				"children": [
					{
						"text" : "2nd layer node",
						"state" : {
							"opened" : true,
							"selected" : true
						},
						"children" : [
							{
								"text" : "3rd layer node"
							},
							"3rd layer node"
						]
					}
				]
			},
			"simple 2nd node"
		]
	}
]

// another example (12 levels of nesting):
[
	"node",
	"node",
	{ text: "node", "children": [
		"node",
		{ text: "node", "children": [
				"node",
				{ text: "node", "children": [
					"node",
					{ text: "node", "children": [
						"node",
						{ text: "node", "children": [
							"node",
							{ text: "node", "children": [
									"item",
									{ text: "node", "children": [
										"item",
										{ text: "node", "children": [
												"item",
												{ text: "node", "children": [
													"item",
													{ text: "node", "children": [
														"item",
														{ text: "node", "children": [
															"item",
															"item",
															"item",
															"item",
															"item"
														]}
													]}
												]}
										]}
									]}
							]}
						]}
					]},
				]},
		]},
	]}
]