function showTable() {
    const animal = "Tiikeri";
    const habitat = "Metsä";
    const diet = "Liha";

    const table = `
        <table border="1">
            <thead>
                <tr>
                    <th>Eläin</th>
                    <th>Elinympäristö</th>
                    <th>Ruokavalio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

    const container = document.querySelector("#table-container");
    container.innerHTML = table;
}
