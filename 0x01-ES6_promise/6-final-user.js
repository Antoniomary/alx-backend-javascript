import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([user, photo]) => [
      { status: user.status, value: user.value },
      { status: photo.status, value: photo.value },
    ])
    .catch(([user, photo]) => [
      { status: user.status, value: user.reason },
      { status: photo.status, value: photo.reason },
    ]);
}
