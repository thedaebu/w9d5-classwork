
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    if (htmlElement.children){
        const children = Array.from(htmlElement.children);
        children.forEach(child =>{
            htmlElement.removeChild(child)
        })
    }
    let header = document.createElement("p" );

    const newContent = document.createTextNode(string);

    header.appendChild(newContent);


    htmlElement.appendChild(header)
    // document.body.insertBefore(header, htmlElement.nextSibling);

};

htmlGenerator('Party Time.', partyHeader);