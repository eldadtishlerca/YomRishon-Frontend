import {gBoards} from '../data/data.js'
export const boardService = {
    query,
    // getById,
    // remove,
    // save
}


function query(boardId) {
    var board = gBoards.filter(board => board._id === boardId)
    // car => filterBy.userId === car.owner._id
    return Promise.resolve(board)
}

// function save(car, loggedinUser) {
//     if (car._id) {
//         const idx = gCars.findIndex(currCar => currCar._id === car._id)
//         if (gCars[idx].owner._id !== loggedinUser._id) {
//             return Promise.reject('Not your Car')
//         }
//         gCars[idx].price = car.price
//     } else {
//         car._id = utilService.makeId()
//         car.createdAt = Date.now()
//         gCars.push(car)
//     }
//     return _saveCarsToFile().then(() => car)
// }


// function remove(carId, loggedinUser) {
//     const idx = gCars.findIndex(car => car._id === carId)
//     if (!loggedinUser.isAdmin &&  gCars[idx].owner._id !== loggedinUser._id) {
//         return Promise.reject('Not your Car')
//     }
//     gCars.splice(idx, 1)
//     return _saveCarsToFile()
// }

// function getById(carId) {
//     const car = gCars.find(car => car._id === carId)
//     return Promise.resolve(car)
// }




// function _saveCarsToFile() {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('data/car.json', JSON.stringify(gCars, null, 2), (err) => {
//             if (err) {
//                 console.log(err);
//                 reject('Cannot write to file')
//             } else {
//                 console.log('Wrote Successfully!')
//                 resolve()
//             }
//         })
//     })
// }