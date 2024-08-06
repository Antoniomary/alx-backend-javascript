import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([user, photo]) => [
      { status: user.status, value: user.value },
      { status: photo.status, value: photo.value },
    ])
    .catch((error) => [{ status: error.status, value: error.reason }]);
}
