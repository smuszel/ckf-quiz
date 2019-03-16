const f = async x => {
    console.log('a');
    const y = await new Promise(rez => setTimeout(() => rez(10), 2000));
    console.log('b');
    const z = await new Promise(rez => setTimeout(() => rez(100), 2000));
    console.log('c');
    
    return x + y + z;
}

console.log(f(1));