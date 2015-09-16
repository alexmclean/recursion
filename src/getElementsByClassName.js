// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var requestedElements = [];
	var getElems = function(nodes){
		if(nodes){
			if(nodes.length){
				for(var i = 0; i < nodes.length; i++) {
					if(nodes[i].classList !== undefined) {
						getElems(nodes[i]);
					}
				}
			} else {   //perform search on child nodes
				var classes = nodes.classList;
				if(classes){
					if(classes.contains(className)) {
						requestedElements.push(nodes);
					}
					getElems(nodes.childNodes)
				}
			}
		}
	};
	getElems(document.body);
	//console.log(requestedElements.toString());
	//console.log(Array.prototype.slice.apply(document.getElementsByClassName('targetClassName')).toString());
	return requestedElements;
};
