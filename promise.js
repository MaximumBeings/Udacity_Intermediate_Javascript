const getTodos2 = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState ===4){
                reject('Error Getting Resource');
            }
            
        });
        
        request.open('GET', resource)
        request.send();
    });
};

getTodos2('dino.json').then(data=>{
    console.log('Promise Resolved:', data);
}).catch(err => {
    console.log('Promise Rejected:', err);
})