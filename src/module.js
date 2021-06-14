console.log('module');

async function start(){
    return await Promise.resolve('async ok');
}

start().then(console.log)