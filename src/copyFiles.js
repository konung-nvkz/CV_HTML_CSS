// In order to understand what does the file do.
// it helps webpack to copy files from src to dist 
// in order the website has all the images at one place.
// fs-extra and path libraries are used to achieve these aims.
// At the moment code needs refactoring.

  const fs = require('fs-extra');
  const path = require('path');

  const srcDir = path.resolve(__dirname, './src/img');
  const destDir = path.resolve(__dirname, './dist/img');

  try {
      fs.copySync(srcDir, destDir, { overwrite: false })
      console.log('success!')
    } catch (err) {
      console.error(err)
    }

// const fs = require('fs-extra');
// const path = require('path');

// const srcDir = path.resolve(__dirname, './src/img');
// const destDir = path.resolve(__dirname, './dist/img');

// try {
//     fs.copySync(srcDir, destDir, { overwrite: false })
//     console.log('success!')
//   } catch (err) {
//     console.error(err)
//   }

/* At the moment there is no server side and database, 
but this functional is planned. As soon as it is written, the following code will be uncommented. 
*/

/*
const srcServ = path.resolve(__dirname, './src/server.php');
const destServ = path.resolve(__dirname, './dist/server.php');

try {
  fs.copySync(srcServ, destServ, { overwrite: false })
  console.log('success!')
} catch (err) {
  console.error(err)
}//copies file with server in order to allow PUSH

const srcDb = path.resolve(__dirname, './src/db.json');
const destDb = path.resolve(__dirname, './dist/db.json');

try {
  fs.copySync(srcDb, destDb, { overwrite: false })
  console.log('success!')
} catch (err) {
  console.error(err)
}//copies file with database in order to allow PUSH

*/