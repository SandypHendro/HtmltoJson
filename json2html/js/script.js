var arrayObject = [
    {
        tagName: "p",
        id: "first-p",
        html: 'This is p tag'
    },
    {
        tagName: 'div',
        class: 'header-wrapper',
        id: 'header',
        children: [
            {
                tagName: 'input',
                name: 'name',
                type: 'text'
            }
        ]
    }
];

var body = document.querySelector('body');

function createHtmlDOM(parent, arrayObject) {
    for (var i = 0; i < arrayObject.length; i++) {
        var obj = Object.assign({}, arrayObject[i]);
        var ele = document.createElement(obj.tagName);
        if (obj.html) {
            ele.innerHTML = obj.html;
            delete obj.html;
        }

        delete obj.tagName;
        var keys = Object.keys(obj);
        var childrenIndex = keys.indexOf("children");
        keys.splice(childrenIndex, 1);
        keys.forEach(function (attribute) {
            ele.setAttribute(attribute, obj[attribute]);
        });
        parent.appendChild(ele);

        if(obj.children) {
            createHtmlDOM(ele, obj.children);
        }
    }
};

createHtmlDOM(body, arrayObject);



