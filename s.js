// site root / import_modules / title

const before_title = "Türkçe-Français";
const icon = "🌍";
const name_script = "s.js";

const root_path = document.head.getElementsByTagName("script")[0].getAttribute("src").replace(name_script, '');
const import_module = document.head.getElementsByTagName("script")[0].hasAttribute("data-import") ? document.head.getElementsByTagName("script")[0].getAttribute("data-import").split(" ") : [];
//console.log("root_path : "+root_path);
//console.log("import_module : " + import_module);


// Modules
const modules_head = {
"style" :          [{"path":"styles/style.css", "default":true}],
"nav" :            [{"path":"styles/nav.css", "default":true},],
		        // {"path":"scripts/nav/nav.js", "default":true}],
"mathjax" :        [{"path":"scripts/MathJax-master/es5/tex-mml-chtml.js", 
		            "default":true,
			        "attr":{"async":"true"}
                   }],
"prism" :          [{"path":"scripts/prism/prism.css", 
                     "default":false},
		            {"path":"scripts/prism/prism.js", 
					 "default":false, "attr":{"async":"true"}}
				    ],
				  
}


function inject_cssjs (hashtable, recipient, import_module) {
for (var key in hashtable){
	for (var item of hashtable[key]){
		console.log("path : " + item["path"] + "| default : " + item["default"]);
		if ((item["path"].endsWith(".css"))&&(item["default"]||(import_module.includes(key)))) {
			const element = document.createElement("link");
			element.setAttribute("href", root_path + item["path"]);
			element.setAttribute("rel", "stylesheet");
			element.setAttribute("type", "text/css");
			for (attr in item["attr"]) { 
				element.setAttribute(attr, item["attr"][attr])
			};
			recipient.appendChild(element);
		}
		if ((item["path"].endsWith("js"))&&((item["default"])||(import_module.includes(key)))) {
			const element = document.createElement("script");
			for (attr in item["attr"]) { 
				element.setAttribute(attr, item["attr"][attr])
			};
			element.setAttribute("src", root_path + item["path"]);
			element.setAttribute("type", "text/javascript");
			recipient.appendChild(element);

		}
	}
	/* special cases */
	/* prism line numbering */
	if (import_module.includes("prism")) {
		document.body.classList.add("line-numbers")
	}
}
};

// Class rootpath href/src modification

function apply_rootpaths() {
    function apply_rootpath(item) {
        for (attr of ["src", "href"]) {
            if (item.hasAttribute(attr)) {
	        item.setAttribute(attr, root_path+item.getAttribute(attr));
	    };
        };
    };
    Array.from(document.querySelectorAll(".rootpath")).forEach(apply_rootpath);
};

function build_head (before=before_title) {
    let page_title = before + document.getElementsByTagName("h1")[0].textContent.trim();
    let title = document.head.getElementsByTagName("title")[0];
    if (!title) {title = document.createElement("title") ; document.head.appendChild(title);}
    title.text = page_title;
    let favicon = document.createElement("link");
    favicon.setAttribute("rel", "icon");
    favicon.setAttribute("href", `data:image/svg+xml, <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22 fill=%22cyan%22>${icon}</text></svg>`);
    document.head.appendChild(favicon);
    Array.from(document.head.getElementsByTagName("meta")).forEach(function(el){
	console.log(el); // afaire
    });
    return page_title;
}

function body () {
    let page_title = build_head();
    inject_cssjs (modules_head, document.head, import_module);
    apply_rootpaths();
    full_screen_imgs();
    if (document.getElementsByClassName("corr")[0]) {corrections();} 
    if (document.querySelector("ul.collapsible, ol.collapsible")) {ul_collapsible();}



// body : add footer
const footer = document.createElement("footer");
document.body.append(footer);

};
