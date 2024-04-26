const hasLicence = true;
const age = 18;
const isDrunk = false;

const canDrive = hasLicence && age >= 18 && !isDrunk;
if (canDrive) {
   console.log('может');
} else {
   console.log('не может');
}
