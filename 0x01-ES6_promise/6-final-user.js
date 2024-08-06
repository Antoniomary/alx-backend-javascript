import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(result => {
      const response = [];
      for (const each of result) {
        if (each.status === 'fulfilled') {
	  response.push({ status: each.status, value: each.value });
	} else {
	  response.push({ status: each.status, value: each.reason });
	}
      }
      return response;
    });
}
