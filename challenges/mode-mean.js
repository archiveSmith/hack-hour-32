/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	// find mean
	let modeStore = {}
	let sum = array.reduce((acc, element) => {
		// store all values
		if (modeStore[element] === undefined) {
      modeStore[element] = 0;
		}
    modeStore[element] += 1;
		return acc + element
	}, 0);
	let mean = Math.floor(sum / array.length);
	// find mode
	let modeEntries = Object.entries(modeStore);

  // console.log(modeEntries);

	let modePair = modeEntries.reduce( (acc, modeEntry) => {
    // console.log(`comparing modeEntry: ${modeEntry} with acc: ${acc}`)
		if (modeEntry[1] > acc[1]) {
			return modeEntry;
		} else if (modeEntry[1] === acc[1] && modeEntry[0] < acc[0]) {
			return modeEntry;
		} else {
			return acc;
		}
	});

	let mode = modePair[0];

  // console.log(`mean: ${mean}`);
  // console.log(`mode: ${mode}`);

	return (mode === mean);

	//, [modeEntries[0][0], modeEntries[0][1]]
}

module.exports = modemean;
