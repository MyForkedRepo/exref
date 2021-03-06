EventTarget <- Node
EventTarget.addEventListener()
EventTarget.removeEventListener()
EventTarget.dispatchEvent()

Node <- Document, Element, Attr, CharacterData(Text,Comment,CDATASection), ProcessingInstruction, DocumentFragment, DocumentType
Node.nodeName
Node.tagName
Node.attributes
Node.nodeValue
Node.nodeType
	1  Element               // <p>, <div>, ...
	3  Text                  // text inside an Element or Attr
	4  CDATASection          // <!CDATA[[ … ]]>
	7  ProcessingInstruction // <?xml-stylesheet … ?> in an xml document
	8  Comment               // <!-- ... -->.
	9  Document
	10 DocumentType          // <!DOCTYPE html>
	11 DocumentFragment
Node.childNodes: NodeList
Node.parentNode: Node|null
Node.nextSibling
Node.previousSibling
Node.firstChild
Node.lastChild
Node.isEqualNode(otherNode)
Node.isSameNode(node)
Node.contains(node)
Node.cloneNode(deep=true) // false: without childs
Node.appendChild(node) // old...
Node.removeChild(node)
Node.replaceChild(newNode, oldNode)
Node.insertBefore(newNode, referenceNode)

mixin ParentNode <- Element, Document, DocumentFragment
ParentNode.childElementCount
ParentNode.children: HTMLCollection
ParentNode.firstElementChild
ParentNode.lastElementChild 
ParentNode.append(...nodes|...strings)
ParentNode.prepend(...nodes|...strings)
ParentNode.querySelector()
ParentNode.querySelectorAll()

mixin ChildNode <- ELement, DocumentType, CharacterData
ChildNode.remove()
ChildNode.before(...nodes|...strings)
ChildNode.after(...nodes|...strings)
ChildNode.replaceWith()

mixin DocumentOrShadowRoot <- Document, ShadowRoot
DocumentOrShadowRoot.activeElement
DocumentOrShadowRoot.fullscreenElement
DocumentOrShadowRoot.styleSheets
DocumentOrShadowRoot.caretPositionFromPoint()
DocumentOrShadowRoot.elementFromPoint(x, y)
DocumentOrShadowRoot.elementsFromPoint()
DocumentOrShadowRoot.getSelection()

Document extends Node
Document implements DocumentOrShadowRoot
Document.title
Document.head
Document.body
Document.hidden
Document.documentElement
Document.readyState
Document.querySelector()
Document.querySelectorAll()
Document.getElementById()
Document.getElementByClassName()
Document.getElementByName()
Document.getElementByTagName()
Document.getElementsByTagNameNS(namespace, name)
Document.createElement(tagName, ?options)
Document.createElementNS(namespaceURI, qualifiedName, ?options)
Document.createTextNode(str)
Document.createAttribute(name)
Document.createComment(str)
Document.hasFocus()
Document.write()
Document.writeln()

Element extends Node
Element implements ParentNode, ChildNode, NonDocumentTypeChildNode
Element <- HTMLElement, SVGElement
Element.attributes: NamedNodeMap
Element.classList: DOMTokenList
Element.className
Element.clientHeight
Element.clientLeft
Element.clientTop
Element.clientWidth
Element.id
Element.innerHTML
Element.outerHTML
Element.scrollHeight
Element.scrollLeft
! Element.scrollLeftMax
Element.scrollTop
! Element.scrollTopMax
Element.scrollWidth
Element.shadowRoot
! Element.openOrClosedShadowRoot
X Element.slot
! Element.tabStop
Element.tagName
Element.insertAdjacentHTML(position='beforebegin'|'afterbegin'|'beforeend'|'afterend', text)
Element.insertAdjacentElement(position, element)
Element.insertAdjacentText(position, str)
Element.getBoundingClientRect()
Element.setAttribute(name, value)
Element.getAttribute(name)
Element.removeAttribute(name)
Element.hasAttribute(name)
Element.getAttributeNames()
Element.closest(selectors)
Element.scrollIntoView(alignToTop|options={
	behavior: 'auto'|'smooth',
	block:    'start'|'center'|'end'|'nearest',
	inline:   'nearest'|'start'|'center'|'end'
})

mixin HTMLOrForeignElement <- HTMLElement, SVGElement, MathMLElement
HTMLOrForeignElement.dataset
HTMLOrForeignElement.tabIndex
HTMLOrForeignElement.blur()
HTMLOrForeignElement.focus(?options={preventScroll: false})

HTMLElement extends Element
HTMLElement implements HTMLOrForeignElement, DocumentAndElementEventHandlers, ElementCSSInlineStyle, GlobalEventHandlers, TouchEventHandlers
HTMLElement.contentEditable
HTMLElement.isContentEditable 
HTMLElement.dir
HTMLElement.draggable
HTMLElement.dropzone
HTMLElement.hidden
HTMLElement.innerText
HTMLElement.lang
HTMLElement.noModule
X HTMLElement.offsetHeight
X HTMLElement.offsetLeft
X HTMLElement.offsetParent
X HTMLElement.offsetTop
X HTMLElement.offsetWidth
HTMLElement.style
HTMLElement.title
HTMLOrForeignElement.blur()
HTMLElement.click()
HTMLOrForeignElement.focus()

abstract NonDocumentTypeChildNode <- Element, CharacterData
NonDocumentTypeChildNode.nextElementSibling
NonDocumentTypeChildNode.previousElementSibling

abstract CharacterData extends Node
CharacterData implements ChildNode, NonDocumentTypeChildNode
CharacterData <- Text, Comment, CDATASection

NodeList: {Node, ..., length}
NodeList.forEach|keys|values|item()
Array.from(NodeList).map|reduce|filter|...()

HTMLCollection: {HTMLElement, ..., length}

DOMTokenList <- Element.classList, HTMLLinkElement.relList, HTMLAnchorElement.relList, HTMLAreaElement.relList
DOMTokenList.add(token1, ?token2, ...)
DOMTokenList.remove(token1, ?token2, ...)
DOMTokenList.toggle(token)
DOMTokenList.contains(token)
DOMTokenList.replace(oldToken, newToken)
DOMTokenList.item(index)

DocumentFragment extends Node
DocumentFragment implements ParentNode
var fragment = new DocumentFragment()
fragment.append(elemA)
fragment.append(elemB)
elemC.append(fragment)

// ps
A <- B, C, D // B,C,D implements A (implemented by)
! = non-standard
X = experimental