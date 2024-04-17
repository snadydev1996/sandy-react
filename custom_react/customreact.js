
function customRender(reactElement,container){
    // version 1
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)

    // version 2 loop based code

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop == "children") continue;
        domElement.setAttribute(prop,reactElement.props[prop])    
        }
    container.appendChild(domElement)
}

// ab ek a tag render krna hai
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

// root ko grab krna hai
const mainContainer = document.querySelector('#root')

// ab hme ek method or function chahiye jo react element ko inject kr de id root ke under

customRender(reactElement, mainContainer)

// 
