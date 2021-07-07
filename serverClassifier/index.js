const express = require('express')
const app = express()
const port = 3000

const PythonShell = require('python-shell').PythonShell;

const RunPythonScript = (pythonFile,args) => {
    let options = {
        args: args
    };

    return new Promise((resolve,reject) => {
        try{
            PythonShell.run(pythonFile, options, function(err, results) {
                if (err) {console.log("cannot run py "+pythonFile+" "+err);}
                // results is an array consisting of messages collected during execution
                console.log('results', results);
                let tmp = JSON.parse(''+results)
                resolve(tmp);
            });
        }
        catch{
            console.error('error running python code')
            reject();
        }
    })
}

app.get('/:cat', async (req, res) => {
    let price = req.query.price
    let c_product = req.query.c_product
    let c_packing = req.query.c_packing
    const cat = req.params.cat
    let model = 'modelCafe.pkl'
    if(cat == 'cafe')
        model = 'modelCafe.pkl'
    else
        model = 'modelMiel.pkl'

    const classNum = await RunPythonScript('./CargarModelo.py',[price,c_product,c_packing,model])
    let classes = {
        1:'Accesible',
        2:'Normal',
        3:'Premium'
    };
    //let className = classes[classNum]
    //res.json(className)
    res.json(classNum)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
