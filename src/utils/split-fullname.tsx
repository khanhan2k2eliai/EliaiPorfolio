export function splitFullName(name: string): any{
    let names = name.split(' ');
    let lastName=names[names.length-2] +' '+names[names.length-1];
    let firstName = name.replace(lastName,"");
    return {firstName:firstName,lastName:lastName}
}