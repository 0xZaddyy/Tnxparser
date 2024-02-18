// build a transaction parser to identify the transaction type, extracting the version, inputs, outputs and the locktime.
function getDetails(hex) {
  // "0ccc140e766b5dbc884ea2d780c5e91e4eb77597ae64288a42575228b79e2349";
    const version = hex.slice(2, 8).concat(hex.slice(0, 2));
    const inputCount = hex.slice(12, 14);
    const rawTxid = hex.slice(14, 78);
    let newTxid = "";
    for (let i = 32; i >= 1; i--) {
      newTxid = newTxid.concat(rawTxid.slice(i * 2 - 2, i * 2));
    }
   
    const vout = hex.slice(80, 86).concat(hex.slice(78, 80));
    const locktime = hex.slice(-8);
    const scriptSigSize = hex.slice(86, 88);
    const outputCount = hex.slice(96, 98);
    const output1 = hex.slice(98, 114);
    const output2 = hex.slice(184, 200);

    const result = {
      version,
      inputCount,
      inputs: [ 
         {
        transcationId: newTxid,
        vout,
        scriptSigSize,
      }],
      outputCount,
      outputs: [{id:0,value: output1},
                {id:1,value:output2,}],
      locktime,
    };
    console.log(result);
  }
  


  getDetails(
    "020000000001010ccc140e766b5dbc884ea2d780c5e91e4eb77597ae64288a42575228b79e234900000000000000000002bd37060000000000225120245091249f4f29d30820e5f36e1e5d477dc3386144220bd6f35839e94de4b9cae81c00000000000016001416d31d7632aa17b3b316b813c0a3177f5b6150200140838a1f0f1ee607b54abf0a3f55792f6f8d09c3eb7a9fa46cd4976f2137ca2e3f4a901e314e1b827c3332d7e1865ffe1d7ff5f5d7576a9000f354487a09de44cd00000000"
  );