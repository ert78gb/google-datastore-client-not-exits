The goal of this repo to reproduce the Google Datastore v4 Node.js client resource management bug.

Reproduction steps:
 1) [install](https://cloud.google.com/datastore/docs/tools/datastore-emulator) Google Datastore Emulator
 2) Start the Emulator `$ gcloud beta emulators datastore start`
 3) Copy the running port of the emulator from the output. Search for similar line in the output of the emulator `[datastore]   export DATASTORE_EMULATOR_HOST=localhost:8081`
 4) Set the `DATASTORE_EMULATOR_HOST` environment variable value in the 1st line of the index.js file
 5) Install the latest v4 version of the Google Datastore Client `$ npm install --no-save @google-cloud/datastore@4`
 6) Create a breakpoint in line 36 of `index.js` file
 7) Start debugging the `index.js` file
 8) If the debugger stops at the breakpoint then stop the emulator
 9) Continue the script running
 10) The script finishing but not exists
