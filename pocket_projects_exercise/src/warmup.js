
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let header = document.createElement("p" );

    const newContent = document.createTextNode(string);

    header.appendChild(newContent);

    document.body.insertBefore(header, htmlElement.nextSibling);

};

htmlGenerator('Party Time.', partyHeader);