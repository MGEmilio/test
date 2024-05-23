
function List(){

    const lista = [{id: 1, name:"hm", numero: 1},
                    {id: 2, name:"hmm", numero: 2},
                    {id: 3, name:"hmmm", numero: 3},
                    {id: 4, name:"hmmmh", numero: 4}];

    //lista.sort((a, b) => a.name.localeCompare(b.name));
    //lista.sort((a, b) => b.name.localeCompare(a.name));
    //lista.sort((a, b) => a.numero - b.numero);
    //lista.sort((a, b) => b.numero - a.numero);

    const lista2 = lista.map(lista => <li key={lista.id}>{lista.name}: &nbsp; <b>{lista.numero}</b></li>);

    return(<ol>{lista2}</ol>);

}
export default List