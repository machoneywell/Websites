"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: macayla honeywell
   Date:   4-10-21

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array


*/

/*Generate an outline based on h1 through h6 headings in the source document*/
window.addEventListener("load", makeOutline);

function makOutline() {
    //location of the document outline
    var outline = document.getElementById("outline");
    
    //source document for the outline
    var source = document.getElementById("doc");
    
    var mainHeading = document.createElement("h1");
    var outlineList = document.createElement("ol");
    var headingText = document.createTextNode("Outline");
    
    mainHeading.appendChild(headingText);
    outline.appendChild(mainHeading);
    outline.appendChild(outlineList);
    
    createList(source, outlineList);
}

function createList(source, outlineList) {
    //headings for the outline
    var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
    
    //previous level of the headings
    var prevLevel = 0;
    
    //running total of the article headings
    var headNum = 0;
    
    //loop through ll of the child nodes of source article until none are left
    
    for (var n = source.firstChild; n !== null; n = n.nextSibling) {
        //examine only article headings
        var headLevel = headings.indexOf(n.nodeName);
        
        if (headLevel !== -1) {
            //add an id to the heading if it is missing
            headNum++;
            if (n.hasAttribute("id") === false) {
                n.setAttribute("id", "head" + headNum);
            }
            var listElem = document.createElement("li");
            
            //create hypertext links to the document headings
            var linkElem = document.createElement("a");
            linkElem.innerHTML = n.innerHTML;
            linkElem.setAttribute("href", "#" + n.id);
            
            //append the hypertext link to the list item
            listElem.appendChild(linkElem);
            
            listElem.innerHTML = n.firstChild.nodeValue;
            
            if (headLevel === prevLevel) {
                //append the list item to the current list
                outlineList.appendChild(listElem);
            }else if (headLevel > prevLevel) {
               //start a new nested list 
                var nestedList = document.createElement("ol");
                nestedList.appendChild(listElem);
                //append nested list to last item in the current list
                outlineList.lastChild.appendChild(nestedList);
                //change the current list to the nested list
                outlineList = nestedList;
            }else {
                //append the list item to a higher list
                var levelUp = prevLevel - headLevel;
                //go up to the higher level
                for (var i = 1; i <= levelUp; i++) {
                    outlineList = outlineList.parentNode.parentNode;
                }
                outlineList.appendChild(listElem);
            }
            
            //update the value of prevlevel
            prevLevel = headLevel;
            
        }
    }
}




















